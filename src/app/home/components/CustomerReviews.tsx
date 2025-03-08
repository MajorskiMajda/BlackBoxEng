"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const reviews = [
    {
        id: 1,
        name: 'Radoš Stefanović',
        image: '/man.png',
        title: 'Stručnjak za odnose s javnošću',
        review: 'Radio sam na projektu širenja našeg brenda na druge prostore. Kontaktirao sam BBM zarad njihovih usluga Meta oglašavanja. Pomogli su mi da dođem do ciljane grupe ljudi kao i do targeta brodaje i širenja brenda.'
    },
    {
        id: 2,
        name: 'Jovan G.',
        image: '/m2.jpg',
        title: 'Kreativni direktor',
        review: 'Super ljudi, super tim za saradnju. Vrlo lak i brz dogovor. Sve preporuke.'
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
        review: 'Osnovao sam svoju knjigovodstvenu agenciju i nisam znao odakle da krenem sa brendiranjem. Čuo sam od prijatelja za BBM agenciju i poslao im mejl, ljudi su bili jako ljubazni i objasnili mi sve. Nakon toga smo započeli saradnju, pomogli su mi u izradi materijala za društvene mreže, logoa i sajta. Hvala puno divnom timu!'
    }
];

export default function CustomerReviews() {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    // Use effect to set the state to true after the component is mounted
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const toggleExpand = (id: number) => {
        setExpandedId(prevId => (prevId === id ? null : id));
    };

    // Don't render the content until after the component has mounted to avoid hydration errors
    if (!isMounted) return null;

    return (
        <div className="max-w-full bg-black z-2 mx-auto lg:px-16 lg:py-12 p-8 text-white" suppressHydrationWarning={true}>
            <div className="text-5xl font-normal text-left">What Our Customers Say</div>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                    240: { slidesPerView: 1, spaceBetween: 10 },
                    640: { slidesPerView: 1, spaceBetween: 10 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 4, spaceBetween: 20 },
                }}
                className="p-4 mt-12 min-h-[30vh]"
            >
                {reviews.map(({ id, name, image, title, review }) => {
                    const isExpanded = expandedId === id;
                    const truncatedText = review.length > 100 ? `${review.substring(0, 100)}...` : review;

                    return (
                        <SwiperSlide key={id} className="lg:mb-20">
                            <div
                                className={`bg-[#242424] border lg:min-h-[18vw]  border-[#da26ff] shadow-xl p-8 text-white rounded-lg flex flex-col items-start transition-height ${
                                    isExpanded ? 'lg:max-h-[1000px]' : 'lg:max-h-[23vw]'
                                }`}
                                style={{ overflow: 'hidden' }}
                            >
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
                                <p className="text-gray-200 font-normal mt-2">
                                    {isExpanded ? review : truncatedText}
                                </p>
                                {review.length > 100 && (
                                    <button
                                        className="text-[#da26ff] mt-2 text-sm font-semibold transition-colors duration-200 hover:underline"
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