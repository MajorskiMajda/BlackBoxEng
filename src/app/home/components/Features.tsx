import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Card from './Card';

// Define types for the card content to make the component reusable
interface CardContent {
  title: string;
  content: string;
  iconSrc?: string; // Icon is optional now
  price?: string; // Price field is optional for price section
  buttonLink?: string;
}

interface HorizontalScrollSectionProps {
  heading: string;
  sectionType: "features" | "prices"; // Make sure sectionType is either 'features' or 'prices'
  cardContents: CardContent[];
}

const HorizontalScrollSection: React.FC<HorizontalScrollSectionProps> = ({ heading, sectionType, cardContents }) => {
  // Animation variants to control the appearance and behavior
  const appearVariants = {
    hidden: { scale: 0.8, y: 20 },
    visible: (i: number) => ({
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6, // Smanjeno sa 1.2 na 0.6
        delay: i * 0.2, // Smanjeno sa 0.3 na 0.2
        ease: "easeOut", // Jednostavniji easing umesto spring-a
      },
    }),
  };

  return (
    <>
      {/* Horizontal Scroll Container */}
      <div className={` z-0 w-full h-fit ${sectionType === "prices" ? 'lg:max-w-7xl   mx-auto lg:py-20 py-0' : 'lg:py-12 lg:pb-20 pb-0 mx-auto py-0 gg'}`}>
        <section className="panel w-full h-full flex-shrink-0 flex">
          <div className="flex items-center justify-center w-full h-full flex-col ">
            <div className={`flex justify-center items-center flex-row gap-0 ${sectionType === "features" ? 'lg:pl-16 lg:pr-16 px-8 ' : ''} w-full  text-left lg:pb-12 pb-8`}>
              <div className={` lg:w-2/5 w-full lg:py-0 leading-[1.3] lg:mt-0 mt-10 font-semibold ${sectionType === "prices" ? 'lg:text-5xl text-4xl' : 'lg:text-5xl text-3xl '}`}>{heading}</div>
              <div className="w-3/5 pl-4 lg:block hidden flex justify-center items-center mx-auto">
                <hr className="w-full border-neutral-400  mr-0" />
              </div>
            </div>
            <div className={`flex lg:flex-row flex-col ${sectionType === "features" ? 'lg:pl-16 lg:pr-16 px-8 py-10 ' : ''} text-white items-center justify-between gap-12 overflow-x-auto`}>
              {cardContents.map((card, index) => (
                <motion.div
                  key={index}
                  custom={index} // Pass custom index for staggering animation
                  variants={appearVariants} // Apply the enhanced animation variants
                  initial="hidden" // Set initial state to hidden
                  whileInView="visible" // Trigger animation when the element is in view
                  viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the element is in the viewport
                  layout
                >
                  <Card
                    showButton={sectionType === "prices" ? false : true}
                    customClass="card1"
                    customClass2="bgc"
                    title={card.title}
                    content={card.content}
                    iconSrc={sectionType === "features" ? card.iconSrc : undefined} // Show icon only for features
                    lineShow={sectionType === "features"} // Show line for features section
                    price={card.price} // Pass price only for pricing cards
                    buttonLink={sectionType === "features" ? card.buttonLink : undefined} // Button link for pricing
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HorizontalScrollSection;
