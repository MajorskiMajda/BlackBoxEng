import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';

// You can replace this with your actual logos array
const logos = [
  { id: 1, image: '/dalixt.png' },
  { id: 2, image: '/rev.png' },
  { id: 3, image: '/major.png' },
  { id: 4, image: '/kursor.png' },
  { id: 5, image: '/dalixk.png' },
  { id: 6, image: '/alu.png' },
  { id: 7, image: '/wiz.png' },
  { id: 8, image: '/vv.png' },
];

const Separator: React.FC = () => {
  return (
    <div className="w-full z-2 h-40 navbg flex items-center justify-center">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        autoplay={{
          delay: 0, // 0 delay for continuous motion
          disableOnInteraction: false, // Keep autoplay even after user interaction
        }}
        speed={2000} // Set a very fast transition time (1 second for each slide)
        loop={true} // Loop the carousel for continuous scroll
        slidesPerView="auto" // Allow multiple logos to be visible at once
        centeredSlides={true} // This centers the images in the Swiper view for a spinning effect
        breakpoints={{
          240: {
            slidesPerView: 1, // Adjust number of logos for smaller screens

          },
          640: {
            slidesPerView: 2, // Adjust number of logos for medium screens
          },
          768: {
            slidesPerView: 3, // Adjust number of logos for larger screens
          },
          1024: {
            slidesPerView: 5, // Show 5 logos on large screens
          },
        }}
        className="p-4"
      >
        {logos.map(({ id, image }) => (
          <SwiperSlide key={id} className="flex  justify-center items-center">
            <div className="flex justify-center items-center">
              <Image
                src={image}
                alt={`Logo ${id}`}
                width={250} // Logo size can be adjusted
                height={80} // Logo size can be adjusted
                className="object-contain opacity-[80%] text-white" // Ensures logos are circular
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Separator;
