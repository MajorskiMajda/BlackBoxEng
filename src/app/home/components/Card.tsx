import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    title: string;
    content: string;
    customClass?: string;
    customClass2?: string;
    customIcon?: React.ReactNode;
    iconSrc?: string;
    lineShow?: boolean; // New prop to control line visibility
    buttonText?: string;
    buttonLink?: string; // ✅ New prop to specify the target page
    onButtonClick?: () => void;
    showButton?: boolean; // New prop to control button visibility
    price?: number; // New prop for dynamic price
}

const Card: React.FC<CardProps> = ({
    title,
    content,
    customClass = '',
    customClass2 = '',
    customIcon,
    iconSrc,
    buttonText = "Saznaj Vise",
    lineShow = true,
    buttonLink = "/",
    showButton = true, // Default to show button
    price = 100 // Default price
}) => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Card */}
            <div className={`p-1 text-white bg-[#242424] shadow-md rounded-xl w-full h-fit ${customClass}`}>
                <div className={`shadow-lg border border-white h-fit p-8 rounded-lg flex flex-col justify-between ${customClass2}`}>
                    <div className=''>
                        <div className="flex gap-4 items-center mb-4">
                            {customIcon ? (
                                <span className="icon-container">{customIcon}</span>
                            ) : iconSrc ? (
                                <Image
                                    src={iconSrc}
                                    alt="Custom Icon"
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                />
                            ) : null}
                            <h3 className="text-3xl  font-normal">{title}</h3>
                        </div>
                        
                        <div className="flex flex-col items-left space-x-2">
                            <h3 className="font-light flex gap-2 items-center pb-3">
                                <span className="text-md text-neutral-300">Od</span>
                                <span className='text-3xl'>{price} </span>
                                <span className="text-md text-neutral-300">€</span>
                            </h3>
                            <p className="text-xl text-neutral-400  font-light">{content}</p>
                        </div>
                    </div>

                    {lineShow && (
                        <hr className="my-6 border-neutral-600 w-full mx-auto" />
                    )}

                    {/* Button with Link, conditionally rendered */}
                    {showButton && (
                        <div className=" w-full">
                            <Link href={buttonLink}>
                                <button
                                    aria-label="Go to link"
                                    className="px-6 w-full py-2 font-semibold cursor-pointer rounded-md btn-col text-black 
                                transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#ff007f]/50"
                                >
                                    {buttonText}
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
