import React from "react";
import Prices from './Features'

interface Info {
  cardContents: { title: string; content: string; price: number }[];  // Expect cardContents as a prop
}

interface InfoProps {
  // For the section titles and descriptions
  howWeDoTitle: string;
  howWeDoDescription: string;
  whatWeDoTitle: string;
  whatWeDoDescription: string;
  keyContent: { title: string; content: string;}[]
  cardContents: { title: string; content: string; price: number }[];
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
    <section className="pb-20 test2 pt-10 px-6 md:px-8 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto pb-8 shadow-lg rounded-2xl ">
        {/* Section Title and Description */}
        <h2 className="text-5xl font-normal mb-6">{howWeDoTitle}</h2>
        <p className="text-2xl font-light text-neutral-300 mb-6">
          {howWeDoDescription}
        </p>

        <Prices
          heading="Choose Your Plan"
          sectionType="prices"
          cardContents={cardContents}
        />

        {/* What We Do Section */}
        <h2 className="text-5xl font-normal mb-6">{whatWeDoTitle}</h2>
        <ul className="list-disc font-light text-neutral-300 pl-5 text-2xl marker:text-purple-500 pb-20 space-y-3">
          {whatWeDoList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* What We Do Additional Info */}
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-5xl font-normal mb-6">What We Do</h2>
        <p className="text-2xl text-neutral-400 mb-12">
          {whatWeDoDescription}
        </p>
      </div>

      {/* Service Cards - Render dynamically based on the cardContents prop */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {keyContent.map((card, index) => (
          <div
            key={index}
            className="bgg rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-normal mb-4">{card.title}</h3>
            <p className="text-lg font-light mb-6">{card.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;

