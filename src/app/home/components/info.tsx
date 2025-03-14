import React from "react";
import Prices from "./Features";
import Compare from "../components/Compare";

interface InfoProps {
  howWeDoTitle: string;
  howWeDoDescription: string;
  whatWeDoTitle: string;
  whatWeDoDescription: string;
  keyContent: { title: string; content: string }[];
  cardContents: { title: string; content: string; price: string }[];
  whatWeDoList: string[];
}

const Info: React.FC<InfoProps> = ({
  howWeDoTitle,
  howWeDoDescription,
  whatWeDoTitle,
  whatWeDoDescription,
  keyContent,
  cardContents,
  whatWeDoList,
}) => {
  return (
    <section className="lg:pb-20 pt-10 px-4 md:px-6 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto pb-8 shadow-lg rounded-2xl">
        {/* Section Title and Description */}
        <div className="text-2xl md:text-3xl lg:text-5xl text-[#da26ff] font-semibold mb-4">
          {howWeDoTitle}
        </div>
        <p className="text-lg md:text-xl lg:text-2xl font-light text-neutral-300 mb-6">
          {howWeDoDescription}
        </p>

        <Prices
          heading="Our Service Packages"
          sectionType="prices"
          cardContents={cardContents}
        />
        <Compare heading={"Compare Prices"} services={cardContents} />

        {/* What We Do Section */}
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4 text-[#da26ff]">
          Benefits You Get
        </h2>
        <ul className="list-disc font-light text-neutral-300 pl-5 text-lg md:text-xl lg:text-2xl marker:text-purple-500 space-y-2">
          {whatWeDoList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* What We Do Additional Info */}
      <div className="max-w-7xl mx-auto text-left mt-8">
        <h2 className="text-2xl md:text-3xl lg:text-5xl text-[#da26ff] font-semibold mb-4">
          {whatWeDoTitle}
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-neutral-400 mb-8">
          {whatWeDoDescription}
        </p>
      </div>

      {/* Service Cards - Render dynamically based on the cardContents prop */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {keyContent.map((card, index) => (
          <div
            key={index}
            className="bgg rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3">{card.title}</h3>
            <p className="text-base md:text-lg font-light">{card.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;