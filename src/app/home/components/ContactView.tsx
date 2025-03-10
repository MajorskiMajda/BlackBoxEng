"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";

// Dynamically import Airplane component, disable SSR
const Airplane = dynamic(() => import("../animation/AirplaneAnim"), { ssr: false });

interface ContactFormProps {
  variant?: "home" | "services"; // Determines which layout to use
  hideAirplane?: boolean; // Prop to hide the airplane
  reverseOrder?: boolean; // Prop to reverse the order of text and form
}

const ContactForm = ({ variant = "home", reverseOrder = false }: ContactFormProps) => {
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); // Error state for validation
  const formRef = useRef<HTMLFormElement | null>(null); // Ref to access the form

  // Validate form fields
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    const form = formRef.current; // Safely get the form reference
    if (!form) return false; // Return false if the form is not available

    const name = (form.name as unknown as HTMLInputElement).value.trim();
    if (!name || !/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = "Ime je obavezno i mora sadržavati samo slova.";
    }

    const lastName = (form.lastN as HTMLInputElement).value.trim();
    if (!lastName || !/^[A-Za-z\s]+$/.test(lastName)) {
      newErrors.lastN = "Prezime je obavezno i mora sadržavati samo slova.";
    }

    const email = (form.email as HTMLInputElement).value.trim();
    if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      newErrors.email = "Molimo unesite validnu email adresu.";
    }

    const message = (form.message as HTMLTextAreaElement).value.trim();
    if (!message) {
      newErrors.message = "Poruka je obavezna.";
    }

    setErrors(newErrors); // Set errors state
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILER_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILER_TEMPLATE_ID || "",
        e.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILER_USER_ID
      )
      .then(
        () => {
          alert("Poruka uspešno poslata!");
          setIsLoading(false);

          if (formRef.current) {
            formRef.current.reset();
          }
        },
        (error) => {
          console.error(error.text);
          alert("Greška u slanju poruke. Molimo Vas pokušajte kasnije.");
          setIsLoading(false);
        }
      );
  };

  return (
    <div
      className={`flex ${variant === "services" ? "test3" : "bg-black"} flex-col px-8 z-2 items-center text-white justify-center h-fit lg:p-16 pt-12 anim`}
    >
      <div
        className={`w-full flex flex-col ${variant === "services" ? "max-w-7xl" : ""} lg:flex-row ${reverseOrder ? "lg:flex-row-reverse" : ""}`}
      >
        {/* Text and Airplane/Image Section */}
        <div
          className={`w-full flex justify-center lg:w-full lg:block ${variant === "services" ? "lg:order-last" : "lg:order-first"}`}
        >
          <div className="flex flex-col h-full">
            <div className={`flex-1 ${variant === "services" ? "hidden" : " "}`}>
              <div className="xl:text-5xl lg:text-4xl text-4xl pb-8 font-semibold">Kontaktirajte nas</div>
              <div className={`xl:text-2xl lg:text-xl text-xl text-neutral-400 w-3/3 ${variant === "services" ? "hidden" : " "} font-light`}>
                Ukoliko imate pitanja, niste sigurni koja je prva usluga za Vas ili imate specifičan zahtev kontaktirajte nas. Zajedno ćemo pronaći najbolje rešenje.
              </div>
            </div>

            <div className={`flex-2 ${variant === "services" ? "order-last" : ""}`}>
              {variant === "home" ? (
                <Airplane />
              ) : (
                <Image
                  className="rounded-md"
                  src="/puz.svg"
                  width={800}
                  height={500}
                  objectFit="contain"
                  alt="Illustration for contact form"
                />
              )}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div
          className={`w-full ${variant === "home" ? "lg:pl-24" : "order-first"} content-center lg:w-full`}
        >
          <div className={`${variant === "services" ? "" : "hidden"}`}>
            <h2 className="xl:text-5xl lg:text-4xl text-3xl font-semibold lg:text-left">
              Pošljite nam poruku
            </h2>
            <p className="xl:text-2xl mt-4 text-xl text-neutral-400 text-lg lg:text-left">
              Ukoliko imate pitanja, niste sigurni koja je prva usluga za Vas ili imate specifičan zahtev kontaktirajte nas. Zajedno ćemo pronaći najbolje rešenje.
            </p>
          </div>
          <form ref={formRef} onSubmit={sendEmail} className="mt-8 flex flex-col gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-xl font-normal text-white">
                Ime
              </label>
              <input
                autoComplete="off"
                type="text"
                id="name"
                name="name"
                className="w-full p-2 mt-2 border border-gray-400 focus:outline-none rounded"
                required
                placeholder="Ime"
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="lastN" className="block text-xl font-normal text-neutral-300-300">
                Prezime
              </label>
              <input
                autoComplete="off"
                type="text"
                id="lastN"
                name="lastN"
                className="w-full p-2 mt-2 border border-gray-400 focus:outline-none rounded"
                required
                placeholder="Prezime"
              />
              {errors.lastN && <span className="text-red-500 text-sm">{errors.lastN}</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-xl font-normal text-neutral-300-300">
                Email
              </label>
              <input
                autoComplete="off"
                type="email"
                id="email"
                name="email"
                className="w-full p-2 mt-2 border border-gray-400 focus:outline-none rounded"
                required
                placeholder="example@example.com"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-xl font-normal text-neutral-300-300">
                Vaša poruka
              </label>
              <textarea
                autoComplete="off"
                id="message"
                name="message"
                rows={5}
                className="w-full p-2 mt-2 border border-gray-400 focus:outline-none rounded"
                required
                placeholder="..."
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
            </div>

            <button
              aria-label="Send a message"
              type="submit"
              disabled={isLoading}
              className="py-2 w-2/8 text-xl cursor-pointer rounded-md shadow-md btn-col text-neutral-800 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#ff007f]/50"
            >
              {isLoading ? "Slanje..." : "Pošalji"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;