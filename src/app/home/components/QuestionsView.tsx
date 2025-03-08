"use client";
import { useState } from 'react';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';  // Importing from framer-motion


// Sample FAQ data
const faqData = [
    {
        question: "What is Next.js?",
        answer: "Next.js is a React framework that enables server-side rendering, static site generation, and building optimized web applications."
    },
    {
        question: "How does React work?",
        answer: "React is a JavaScript library for building user interfaces. It works by updating the UI based on changes in the state of your application."
    },
    {
        question: "What is Tailwind CSS?",
        answer: "Tailwind CSS is a utility-first CSS framework for creating custom designs without writing custom CSS."
    },
    {
        question: "What is Tailwind CSS?",
        answer: "Tailwind CSS is a utility-first CSS framework for creating custom designs without writing custom CSS."
    },
    {
        question: "What is Tailwind CSS?",
        answer: "Tailwind CSS is a utility-first CSS framework for creating custom designs without writing custom CSS."
    },
    {
        question: "What is Tailwind CSS?",
        answer: "Tailwind CSS is a utility-first CSS framework for creating custom designs without writing custom CSS."
    }
];

export default function Questions() {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleAnswer = (index: number) => {
        setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <div className="flex test3 flex-col z-1000  items-center  justify-center h-fit p-8 pt-0 pt-12 pb-12 lg:pb-24">
            <h1 className="lg:text-5xl text-3xl  font-normal mb-12  text-center">Česta pitanja</h1>

            {/* FAQ List */}
            <div className="w-full md:w-2/3 lg:w-1/2 flex   flex-col gap-8">
                {faqData.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div
                            className="flex justify-between items-center  cursor-pointer mb-2"
                            onClick={() => toggleAnswer(index)}
                        >
                            <h2 className="text-xl md:text-2xl font-normal">{faq.question}</h2>
                            <div className="flex items-center  gap-2">
                                {openIndexes.includes(index) ? (
                                    <MinusCircleIcon className="h-6 w-6 text-neutral-300-300" />
                                ) : (
                                    <PlusCircleIcon className="h-6 w-6 text-[#da26ff]" />
                                )}
                            </div>
                        </div>

                        {/* Answer Section with Smooth Animation */}
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={openIndexes.includes(index) ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden border-b-1 border-gray-600 pb-6"
                        >
                            <p>{faq.answer}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
