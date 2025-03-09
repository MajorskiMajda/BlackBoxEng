import React from "react";
import { motion } from "framer-motion";
import Card from './Card';

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
  const appearVariants = {
    hidden: { scale: 0.8, y: 20 },
    visible: (i: number) => ({
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className={`z-0 w-full h-fit ${sectionType === "prices" ? 'lg:max-w-7xl mx-auto lg:py-20 py-0' : 'lg:py-12 lg:pb-20 pb-0 mx-auto py-0 gg'}`}>
      <section className="panel  w-full h-full flex-shrink-0 flex">
        <div className="flex  items-center justify-center w-full h-full flex-col">
          <div className={`flex justify-center items-center flex-row gap-0 ${sectionType === "features" ? 'lg:pl-16 lg:pr-16 px-8' : ''} w-full text-left lg:pb-12 pb-8`}>
            <div className={`lg:w-2/5 w-full lg:py-0 leading-[1.3] lg:mt-0 mt-10 font-semibold ${sectionType === "prices" ? 'xl:text-5xl lg:text-4xl text-4xl' : 'xl:text-5xl lg:text-4xl text-3xl'}`}>
              {heading}
            </div>
            <div className="w-3/5 pl-4 lg:block hidden flex justify-center items-center mx-auto">
              <hr className="w-full border-neutral-400 mr-0" />
            </div>
          </div>
          <div
            className={`grid w-full  card-grid  ${sectionType === "features" ? 'lg:pl-16 lg:pr-16 px-8 py-10' : ''} text-white items-start justify-evenly gap-6 lg:gap-12 overflow-x-auto`}
          >
            {cardContents.map((card, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={appearVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                layout
                className="w-full   h-full" // Fixed width and full height
              >
                <Card
                  showButton={sectionType === "prices" ? false : true}
                  customClass="card1"
                  customClass2="bgc h-full" // Ensure inner div stretches to full height
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

export default HorizontalScrollSection;