"use client";
import Airplane from "../animation/AirplaneAnim";
import Image from "next/image";
// import emailjs from "emailjs-com";
interface ContactFormProps {
  variant?: "home" | "services"; // Determines which layout to use
  hideAirplane?: boolean;  // Prop to hide the airplane
  reverseOrder?: boolean;  // Prop to reverse the order of text and form
}

const ContactForm = ({ variant = "home", reverseOrder = false }: ContactFormProps) => {

  //   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();

  //     emailjs
  //       .sendForm(
  //         process.env.NEXT_PUBLIC_EMAILER_SERVICE_ID || "", // Replace with your EmailJS service ID
  //         process.env.NEXT_PUBLIC_EMAILER_TEMPLATE_ID || "", // Replace with your EmailJS template ID
  //         e.target as HTMLFormElement, // Ensure the event target is cast correctly
  //         process.env.NEXT_PUBLIC_EMAILER_USER_ID || "" // Replace with your EmailJS user ID
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //           alert("Poruka uspešno poslata!");
  //         },
  //         (error) => {
  //           console.error(error.text);
  //           alert("Greška u slanju poruke. Molimo Vas pokušajte kasnije.");
  //         }
  //       );
  //   };

  return (
<div className={`flex ${variant === "services" ? "test3" : "bg-black"}  flex-col  px-8  z-2 items-center text-white justify-center h-fit lg:p-16 pt-12 anim`}>
      <div className={`w-full flex flex-col ${variant === "services" ? "max-w-7xl" : ""}  lg:flex-row ${reverseOrder ? 'lg:flex-row-reverse' : ''}`}> {/* Reverse order of text and form if reverseOrder is true */}
        {/* Text and Airplane Section */}
        <div className={`w-full flex justify-center lg:w-full lg:block  ${variant === "services" ? "lg:order-last" : "lg:order-first"}`}> {/* Change order based on reverseOrder prop */}
          <div className="flex flex-col h-full">
            <div className={`flex-1 ${variant === "services" ? "hidden" : " "}`}>
              <div className="text-5xl font-normal">Kontaktirajte nas</div>
              <div className={`text-3xl w-3/3 ${variant === "services" ? "hidden" : " "} font-light`}>
                Ukoliko imate bilo kakva pitanja. Zakažite besplatne konsultacije i dozvolite da napravimo savršen plan za vaše digitalno osvajanje.
              </div>
            </div>

            {/* Conditionally render Airplane animation or Image */}
            <div className={`flex-2 ${variant === "services" ? "order-last" : ""}`}>
              {variant === "home" ? <Airplane /> : (
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
        <div className={`w-full ${variant === "home" ? "lg:pl-24" : "order-first"} content-center  lg:w-full`}>
          <div className={`${variant === "services" ? "" : "hidden"}`}>
            <h2 className="lg:text-5xl text-3xl font-bold  text-center lg:text-left">
              Pošljite nam poruku
            </h2>
            <p className="mt-4 lg:text-xl text-lg  text-center lg:text-left">
              Imate pitanja? Napišite nam na email ili pozovite na telefon.
            </p>
          </div>
          <form className="mt-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-xl font-normal text-gray-300">
                Ime i prezime
              </label>
              <input
                autoComplete="off"
                type="text"
                id="name"
                name="name"
                className="w-full p-2 mt-2 border border-gray-600 focus:outline-none rounded"
                required
                placeholder="Ime i prezime"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-xl font-normal text-gray-300">
                Email
              </label>
              <input
                autoComplete="off"
                type="email"
                id="email"
                name="email"
                className="w-full p-2 mt-2 border border-gray-600 focus:outline-none rounded"
                required
                placeholder="example@example.com"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-xl font-normal text-gray-300">
                Predmet
              </label>
              <input
                autoComplete="off"
                type="text"
                id="subject"
                name="subject"
                className="w-full p-2 mt-2 border border-gray-600 focus:outline-none rounded"
                required
                placeholder="Predmet"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-xl font-normal text-gray-300">
                Vaša poruka
              </label>
              <textarea
                autoComplete="off"
                id="message"
                name="message"
                rows={5}
                className="w-full p-2 mt-2 border border-gray-600 focus:outline-none rounded"
                required
                placeholder="..."
              ></textarea>
            </div>

            <button aria-label="Send a message" type="submit" className="px-4 py-2 text-xl rounded-lg shadow-md btn-col text-neutral-800 font-bold transition">
              Pošalji
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
