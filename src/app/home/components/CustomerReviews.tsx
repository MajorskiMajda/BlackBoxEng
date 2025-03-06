"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviews = [
    {
        id: 1,
        name: 'John Doe',
        image: '/man.png',
        title: 'Software Engineer',
        review: 'This platform has helped me improve my English skills tremendously.'
    },
    {
        id: 2,
        name: 'Jane Smith',
        image: '/m2.jpg',
        title: 'Project Manager',
        review: 'Great content and  excellent teaching methods. I feel more confident in my English now!'
    },
    {
        id: 3,
        name: 'Alex Brown',
        image: '/ww2.jpg',
        title: 'Marketing Specialist',
        review: 'The structured lessons and interactive exercises make learning fun and effective!'
    },
    {
        id: 4,
        name: 'Emily Davis',
        image: '/ww3.jpg',
        title: 'Graphic Designer',
        review: 'I love the user-friendly interface and well-organized content!'
    },
    {
        id: 5,
        name: 'Alex Brown',
        image: '/m3.png',

        title: 'Marketing Specialist',
        review: 'The structured lessons and interactive exercises make learning fun and effective!'
    },
    {
        id: 6,
        name: 'Emily Davis',
        image: '/ww4.jpg',

        title: 'Graphic Designer',
        review: 'I love the user-friendly interface and well-organized content!'
    },
    {
        id: 7,
        name: 'Emily Davis',
        image: '/m4.jpg',

        title: 'Graphic Designer',
        review: 'I love the user-friendly interface and well-organized content!'
    }
];

export default function CustomerReviews() {
    return (
        <div className="max-w-full navbg z-2 mx-auto lg:px-16 lg:py-12 p-8 prp text-white" suppressHydrationWarning={true}>
            <div className="text-5xl text-3xl tx3 font-normal text-left">What Our Customers Say</div>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    240: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                className="p-4 mt-12 min-h-[30vh]" // Adjusted height for responsiveness
            >
                {reviews.map(({ id, name, image, title, review }) => (
                    <SwiperSlide key={id} className="lg:mb-20 lg:mt-20">
                        <div className="bg-[#242424] border border-[#da26ff] shadow-xl p-8 text-white rounded-lg flex flex-col items-start">
                            <div className="flex items-center gap-4 mb-4">
                                <Image
                                    src={image}
                                    alt={name}
                                    width={64}
                                    height={64}
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">{name}</h3>
                                    <p className="text-gray-400 font-normal text-sm">{title}</p>
                                </div>
                            </div>
                            <p className="text-gray-200 font-normal mt-2">{review}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

