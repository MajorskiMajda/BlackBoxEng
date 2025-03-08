'use client';

import { ReactNode, useEffect, useState } from 'react';
import Animation from '../animation/AnimationView'
export default function MainPage(props: {
    text: string;
    subH: ReactNode | string;
    opis: string;
    subHColor?: string;
    showButton?: boolean;
    showButton2?: boolean;
    className?: string;
    hideImageOnMobile?: boolean;
    textSizeClass?: string; // New prop for text size customization
}) {

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="flex  flex-col-reverse md:flex-row items-center justify-evenly h-fit lg:pl-16 pb-0">
            {/* Image Section */}
            {/* Text Section */}
            <div className="flex flex-col  justify-center min-h-fit w-full  md:w-6/12">
                {/* Wrapper for Title and Description */}
                <div className="w-full lg:px-0 px-8 pb-8  md:w-2/4 lg:w-3/4">
                    {/* Title Section */}
                    <div className={`font-normal  text-white lg:mb-4 lg:p-0 pt-4 pb-4  'lg:text-8xl text-6xl md:text-5xl text-3xl text-left'}`}>
                        {props.text}
                    </div>
                    <div
                        className={`font-light mb-4  'lg:text-6xl text-4xl md:text-5xl `}
                        style={{ color: props.subHColor || 'inherit' }}
                    >
                        {props.subH}
                    </div>
                    {/* Description Section */}
                    <div className={` font-light lg:text-2xl text-lg`}>
                        {props.opis}
                    </div>
                </div>
            </div>
            {isClient && (
                <div
                    className={`mt-12  lg:w-2/4 order-last md:w-10/12 sm:w-full flex justify-center md:mt-0 
            
                `}
                >
                    <Animation />
                </div>
            )}
        </div>
    );
}
