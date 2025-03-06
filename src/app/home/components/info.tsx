import React from "react";
import Prices from './Features'

interface Info {
  cardContents: { title: string; content: string; price: number }[];  // Expect cardContents as a prop
}

const Info: React.FC<Info> = ({ cardContents }) => {
  return (
    <section className="pb-20 test2 pt-10 px-6 md:px-8 lg:px-20 text-white">

      <div className="max-w-7xl mx-auto pb-8  shadow-lg rounded-2xl ">
        <h2 className="text-5xl font-bold  mb-6">How we do</h2>
        <p className="text-2xl mb-6">
          SEO (Search Engine Optimization) is the process of optimizing your website
          to improve its visibility in search engine results. By enhancing your
          content, structure, and backlinks, you can attract more organic traffic.
        </p>
        <Prices
          heading="Choose Your Plan"
          sectionType="prices"
          cardContents={cardContents}
        />

        <h2 className="text-5xl font-bold  mb-6">What We Do</h2>
        <ul className="list-disc pl-5 text-2xl marker:text-purple-500 pb-20 space-y-3">
          <li>Keyword research & strategy to target the right audience</li>
          <li>On-page optimization for better search engine indexing</li>
          <li>Technical SEO to improve site speed and user experience</li>
          <li>Quality link-building strategies for higher domain authority</li>
          <li>Content marketing to engage and convert visitors</li>
        </ul>
      </div>
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-5xl font-bold  mb-6">What We Do</h2>
        <p className="text-2xl  mb-12  ">
          We specialize in providing top-notch SEO services to help your business
          rank higher in search engines, drive traffic, and increase conversions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bgg rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold  mb-4">Keyword Research</h3>
          <p className="text-lg mb-6">
            We conduct in-depth keyword research to identify the most relevant and
            high-traffic keywords for your business, ensuring you target the right audience.
          </p>
        </div>

        <div className="bgg rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold  mb-4">On-Page Optimization</h3>
          <p className=" text-lg mb-6">
            Our on-page optimization techniques ensure that your website is fully
            optimized for search engines, from meta tags to content structure.
          </p>
        </div>

        <div className="bgg rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold  mb-4">Technical SEO</h3>
          <p className=" text-lg mb-6">
            We improve your sites technical aspects, such as site speed, mobile-friendliness,
            and crawlability, to enhance user experience and search engine rankings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
