"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { MotionDiv } from '../../ui/motion';

export default function MainPage(props: {
    image: string | StaticImport;
}) {
    const features = [
        "Veća konverzija, veći profit – pretvaramo posetioce u kupce.",
        "Više vremena za važne stvari – preuzimamo marketing na sebe.",
        "Manje stresa, više rezultata – optimizujemo sve za vas.",
        "Više poseta sajtu i profilima – privlačimo ciljanu publiku.",
        "Bolja vidljivost – ističemo vas tamo gde je važno."
    ];

    useEffect(() => {
        // GSAP flying animation for the rocket
        gsap.to('.rocket', {
            y: -50,
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: 'sine.inOut',
        });

        // GSAP wobble animation for the rocket (left-right shaking)
        gsap.to('.rocket', {
            x: 20,
            repeat: -1,
            yoyo: true,
            duration: 0.8,
            ease: 'sine.inOut',
        });
        gsap.to('.rocket', {
            x: 10,
            rotate: 7,
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: 'sine.inOut',
        });
    }, []);

    return (
        <div className="flex z-2 flex-col justify-end">
            <div className="flex flex-col-reverse test2 lg:h-[90vh] h-fit md:flex-row items-center z-9 lg:gap-0 gap-10 lg:justify-between lg:px-16 px-8">
                {/* Image Section */}
                <div className="lg:w-2/4 md:w-8/12 sm:w-full flex justify-center p-4 md:mt-0">
                    <Image
                        className="rocket xx rounded-md"
                        src={props.image}
                        width={500}
                        height={300}
                        objectFit="contain"
                        alt="Rocket"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col items-left justify-left min-h-fit w-full md:w-1/2">
                    <div className="w-full">
                        {/* Title */}
                        <div
                            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.3] text-left font-semibold mb-8"
                        >
                            Od izazova do <span className="text-[#da26ff]">profita!</span>
                        </div>

                        {/* Features List */}
                        <div className="flex flex-col gap-y-8">
                            {features.map((feature, index) => (
                                <MotionDiv
                                    key={index}
                                    className="flex items-center text-neutral-300"
                                    initial={{ opacity: 0, x: -75 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.8, delay: index * 0.5 }}
                                >
                                    <Image
                                        src={'/verify.svg'}
                                        alt="Custom Icon"
                                        width={40}
                                        height={40}
                                        className="rounded-md"
                                    />
                                    <p className="text-base sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl ml-4 font-normal">
                                        {feature}
                                    </p>
                                </MotionDiv>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}