import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

interface CardContent {
  title: string;
  content: string;
  iconSrc?: string;
  price?: string;
  buttonLink?: string;
}

interface HorizontalScrollSectionProps {
  heading: string;
  sectionType: "features" | "prices";
  cardContents: CardContent[];
}

const HorizontalScrollSection: React.FC<HorizontalScrollSectionProps> = ({ heading, sectionType, cardContents }) => {
  // Optimized animation variants
  const appearVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80, // Reduced stiffness for less CPU load
        damping: 20,
        duration: 0.5, // Slightly shorter duration
        delay: i * 0.1, // Faster stagger to reduce overlap
      },
    }),
  };

  return (
    <div
      className={`z-0 w-full overflow:hidden h-fit ${
        sectionType === "prices" ? "lg:max-w-7xl mx-auto lg:py-20 py-0" : "lg:py-12 lg:pb-20 pb-0 mx-auto py-0 gg"
      }`}
    >
      <section className="panel overflow:hidden w-full h-full flex-shrink-0 flex">
        <div className="flex items-center justify-center w-full h-full flex-col">
          <div
            className={`flex justify-center items-center flex-row gap-0 ${
              sectionType === "features" ? "lg:pl-16 lg:pr-16 px-8" : ""
            } w-full text-left lg:pb-12 pb-8`}
          >
            <div
              className={`lg:w-2/5 w-full lg:py-0 leading-[1.3] overflow:hidden lg:mt-0 mt-10 font-semibold ${
                sectionType === "prices"
                  ? "xl:text-5xl text-[#da26ff] lg:text-4xl text-4xl"
                  : "xl:text-5xl lg:text-4xl text-4xl"
              }`}
            >
              {heading}
            </div>
            <div className="w-3/5 pl-4 lg:block hidden flex justify-center items-center mx-auto">
              <hr className="w-full border-neutral-400 mr-0" />
            </div>
          </div>
          <div
            className={`grid overflow:hidden w-full ${
              sectionType === "features" ? "card-grid lg:pl-16 lg:pr-16 px-8 py-10" : "card-grid-prices"
            } text-white items-start justify-evenly gap-6 lg:gap-12 overflow-x-auto overflow-y-hidden`}
            style={{ willChange: "transform", transform: "translateZ(0)" }} // Force hardware acceleration
          >
            {cardContents.map((card, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={appearVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }} // Trigger when 50% in view to stagger load
                className="w-full h-full"
                style={{ willChange: "opacity, transform" }} // Optimize animation properties
              >
                <Card
                  showButton={sectionType === "prices" ? false : true}
                  customClass="card1"
                  customClass2="bgc h-full"
                  title={card.title}
                  content={card.content}
                  iconSrc={sectionType === "features" ? card.iconSrc : undefined}
                  lineShow={sectionType === "features"}
                  price={card.price}
                  buttonLink={sectionType === "features" ? card.buttonLink : undefined}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(HorizontalScrollSection); // Memoize to prevent unnecessary re-renders