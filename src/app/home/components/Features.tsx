import React from "react";
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
  return (
    <>
      {/* Horizontal Scroll Container */}
      <div className={`container z-0 w-full h-fit  ${sectionType === "prices" ? 'max-w-7xl mx-auto py-20' : 'py-12 pb-20 mx-auto'}`}>
        <section className="panel w-full h-full flex-shrink-0 flex">
          <div className="flex items-center justify-center w-full h-full flex-col">
            <div className={`flex justify-center items-center flex-row gap-0 ${sectionType === "features" ? 'lg:pl-16 lg:pr-16 px-8' : ''} w-full text-left pb-12`}>
              <div className="text-4xl  w-fit sm:text-5xl md:text-6xl lg:text-7xl pf font-normal">{heading}</div>
              <div className="w-full lg:block hidden flex justify-center items-center mx-auto">
                <hr className={`w-full  border-neutral-600 mr-0 `} />
              </div>
            </div>
            <div className={`flex lg:flex-row flex-col ${sectionType === "features" ? 'lg:pl-16 lg:pr-16 px-8 py-10' : ''} text-white items-center justify-between gap-12 overflow-x-auto`}>
              {cardContents.map((card, index) => (
                <Card
                  showButton={sectionType === "prices" ? false : true}
                  key={index}
                  customClass="card1"
                  customClass2="bgc"
                  title={card.title}
                  content={card.content}
                  // Don't pass iconSrc if sectionType is "prices"
                  iconSrc={sectionType === "features" ? card.iconSrc : undefined}
                  lineShow={sectionType === "features"}
                  price={card.price} // Pass price only for pricing cards
                  buttonLink={sectionType === "prices" ? card.buttonLink : undefined}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HorizontalScrollSection;
