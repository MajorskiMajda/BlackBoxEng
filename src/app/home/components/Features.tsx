import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Card from './Card';

// Define types for the card content to make the component reusable
interface CardContent {
  title: string;
  content: string;
  iconSrc?: string; // Icon is optional now
  price?: number; // Price field is optional for price section
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
    hidden: { opacity: 0, scale: 0.8, y: 20 }, // Start small, slightly below, and invisible
    visible: (i: number) => ({
      opacity: 1,
      scale: 1, // Scale to normal size
      y: 0, // Move to its normal position
      transition: {
        duration: 1.2, // Duration of the animation (slower)
        delay: i * 0.3, // Increase delay for staggered entrance
        type: "spring", // Using spring for a more elastic effect
        stiffness: 50, // Softer bounce effect
        damping: 25, // Softer damping for smoother settle
      },
    }),
  };

  return (
    <>
      {/* Horizontal Scroll Container */}
      <div className={` z-0 w-full h-fit ${sectionType === "prices" ? 'lg:max-w-7xl  mx-auto py-20' : 'py-12 lg:pb-20 pb-0 mx-auto  gg'}`}>
        <section className="panel w-full h-full flex-shrink-0 flex">
          <div className="flex items-center justify-center w-full h-full flex-col">
            <div className={`flex justify-center items-center flex-row gap-0 ${sectionType === "features" ? 'lg:pl-16 lg:pr-16 px-8' : ''} w-full text-left pb-12`}>
              <div className="text-4xl w-fit sm:text-5xl md:text-6xl lg:text-7xl pf font-normal">{heading}</div>
              <div className="w-full lg:block hidden flex justify-center items-center mx-auto">
                <hr className="w-full border-neutral-400  mr-0" />
              </div>
            </div>
            <div className={`flex lg:flex-row flex-col ${sectionType === "features" ? 'lg:pl-16 lg:pr-16 px-8 py-10' : ''} text-white items-center justify-between gap-12 overflow-x-auto`}>
              {cardContents.map((card, index) => (
                <motion.div
                  key={index}
                  custom={index} // Pass custom index for staggering animation
                  variants={appearVariants} // Apply the enhanced animation variants
                  initial="hidden" // Set initial state to hidden
                  whileInView="visible" // Trigger animation when the element is in view
                  viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the element is in the viewport
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
