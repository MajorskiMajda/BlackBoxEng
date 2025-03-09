"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
    {
        id: 1,
        name: 'Radoš S.',
        image: '/man.png',
        title: 'PR Menadžer',
        review: 'Radio sam na projektu širenja našeg brenda. Kontaktirao sam BBM zarad njihovih usluga Meta oglašavanja. Pomogli su mi da dođem do ciljane grupe ljudi kao i do targeta brodaje i širenja brenda.'
    },
    {
        id: 2,
        name: 'Jovan G.',
        image: '/m2.jpg',
        title: 'Kreativni direktor',
        review: 'Super ljudi, super tim za saradnju. Vrlo lak i brz dogovor. Sve preporuke. 👍 👍'
    },
    {
        id: 3,
        name: 'Teodora Č.',
        image: '/ww2.jpg',
        title: 'Direktor Menadžmenta',
        review: 'Sarađivali smo nekoliko puta sa ovom agencijom. Prvi put su nam bili potrebni instagram postovi za reklame a zatim i Reels video matrijali za promocije proizvoda. Ljudi su tačni, ljubazni i maksimalno žele da izađu u susret.'
    },
    {
        id: 4,
        name: 'Marina T.',
        image: '/ww3.jpg',
        title: 'Menadžer Projekta',
        review: 'Bio nam je potreban sajt kao i sav materijal. Preporuku smo dobili od poslovnih partnera. Tim programera u Black Box Media je vrlo kreativan i napravili su nam prelep i moderan sajt. Srdačan Pozdrav.'
    },
    {
        id: 5,
        name: 'Aleksandar K.',
        image: '/m3.png',
        title: 'Izvršni direktor',
        review: 'Osnovao sam svoju knjigovodstvenu agenciju i nisam znao odakle da krenem sa brendiranjem. Čuo sam od prijatelja za BBM agenciju i poslao im mejl, ljudi su bili jako ljubazni i objasnili mi sve. Nakon toga smo započeli saradnju, pomogli su mi u izradi materijala za društvene mreže, logoa i sajta. Hvala puno divnom timu! ❤️'
    }
];

export default function CustomerReviews() {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const toggleExpand = (id: number) => {
        setExpandedId(prevId => (prevId === id ? null : id));
    };

    if (!isMounted) return null;

    return (
        <div className="max-w-full bg-black z-2 mx-auto px-8  py-8 md:px-8 md:py-10 lg:px-16 lg:py-12 text-white" suppressHydrationWarning={true}>
            <div className="text-3xl md:text-4xl xl:text-6xl lg:text-4xl font-semibold text-left mb-6 md:mb-8 lg:mb-12">
                Iskustva koja govore umesto nas
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
                        <SwiperSlide key={id} className="mb-10 md:mb-16 lg:mb-20  flex">
                            <div
                                className={`bg-[#242424] border border-[#da26ff] shadow-xl p-8 md:p-8 text-white rounded-lg flex flex-col justify-between w-full min-h-[18rem] md:min-h-[20rem] lg:min-h-[22rem] transition-all duration-300 ${
                                    isExpanded ? 'max-h-fit' : 'h-full  '
                                }`}
                                style={{ overflow: 'hidden' }}
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
                                        {isExpanded ? 'Prikaži manje' : 'Prikaži više'}
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