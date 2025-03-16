"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "James W.",
    image: "/man.png",
    title: "PR Manager",
    review:
      "I worked on a project to expand our brand. I contacted BBM for their Meta advertising services. They helped me reach the target audience and achieve our sales and brand expansion goals.",
  },
  {
    id: 2,
    name: "Ryan S.",
    image: "/m2.jpg",
    title: "CEO",
    review:
      "Great people, awesome team to work with. Very easy and quick to agree on terms. Highly recommended! 👍 👍",
  },
  {
    id: 3,
    name: "	Sophie Q.",
    image: "/ww2.jpg",
    title: "Management Director",
    review:
      "We collaborated with this agency several times. First, we needed Instagram posts for ads, and later, Reels video materials for product promotions. The team is punctual, friendly, and goes above and beyond to meet our needs.",
  },
  {
    id: 4,
    name: "Samantha S.",
    image: "/ww3.jpg",
    title: "Project Manager",
    review:
      "We needed a website and all related materials. We got a recommendation from business partners. The developer team at Black Box Media is highly creative and built us a beautiful, modern website. Warm regards!",
  },
  {
    id: 5,
    name: "Martin O.",
    image: "/m3.png",
    title: "Executive Director",
    review:
      "I started my accounting agency and didn’t know where to begin with branding. I heard about BBM from a friend and sent them an email. The team was very kind and explained everything to me. After that, we started working together,they helped me with social media materials, a logo, and a website. Big thanks to the amazing team! ❤️",
  },
];

export default function CustomerReviews() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  if (!isMounted) return null;

  return (
    <div
      className="max-w-full bg-black z-2 mx-auto px-8 py-8 md:px-8 md:py-10 lg:px-16 lg:py-12 text-white"
      suppressHydrationWarning={true}
    >
      <div className="text-3xl md:text-4xl xl:text-5xl lg:text-4xl font-semibold text-left mb-6 md:mb-8 lg:mb-12">
        Experiences That Speak for Us
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={15}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 }, // 3 slides at 1024px
          1280: { slidesPerView: 4, spaceBetween: 20 },
        }}
        className="p-4"
      >
        {reviews.map(({ id, name, image, title, review }) => {
          const isExpanded = expandedId === id;
          const truncatedText = review.length > 150 ? `${review.substring(0, 150)}...` : review;

          return (
            <SwiperSlide key={id} className="mb-10 md:mb-16 lg:mb-20 flex">
              <div
                className={`bg-[#242424] border border-[#da26ff] shadow-xl p-8 md:p-8 text-white rounded-lg flex flex-col justify-between w-full min-h-[18rem] md:min-h-[20rem] lg:min-h-[22rem] transition-all duration-300 ${isExpanded ? "max-h-fit" : "h-full"
                  }`}
                style={{ overflow: "hidden" }}
              >
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-3 md:gap-4 mb-4">
                    <Image
                      src={image}
                      alt={name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover md:w-16 md:h-16"
                    />
                    <div>
                      <h3 className="text-base md:text-lg font-semibold">{name}</h3>
                      <p className="text-neutral-200 font-normal text-xs md:text-sm">{title}</p>
                    </div>
                  </div>
                  <p className="text-neutral-400 font-normal text-sm md:text-base mt-2 flex-grow">
                    {isExpanded ? review : truncatedText}
                  </p>
                </div>
                {review.length > 150 && (
                  <button
                    className="text-white mt-2 text-xs md:text-sm font-normal underline cursor-pointer transition-colors duration-200 hover:underline self-start"
                    onClick={() => toggleExpand(id)}
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </button>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}