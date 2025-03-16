'use client';

import Nav from '../home/components/NavBar';
import Footer from '../home/components/Footer';
import Main from '../home/components/Main';
import ContactForm from '../home/components/ContactView';

export default function MainPage() {
  return (
    <div className="">
      <Nav />

      <div className="text-white text-neutral-300-800">
        {/* Hero Section */}
        <section className="bg-onama py-20 text-center px-6">
          <div className="max-w-8xl mx-auto">
            <h1 className="text-5xl bg-[#da26ff] font-bold mb-4">About Us</h1>
          </div>
        </section>
        {/* Mission Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-8xl mx-auto">
          <h2 className="text-3xl font-bold text-left mb-6">
            Your Partner for Digital Success
          </h2>
          <p className="text-lg text-neutral-300 text-left">
            We’re a team of experts passionate about digital marketing and branding, dedicated to delivering top-notch services that help you achieve your business goals. We boost your website’s visibility on search engines, drive organic traffic, and improve rankings. Our targeted Google Ads campaigns deliver fast results and increase conversions. We help you reach your audience on Facebook and Instagram with effective Meta Ads. We build strong client relationships through personalized email marketing campaigns. We create and manage your social media profiles, fostering an engaged community and strengthening your brand. We shoot and edit creative Reels videos that capture attention and expand your reach. We design and develop modern, functional, and visually stunning websites. And we craft a unique visual identity for your brand,from logos to print and web materials.
          </p>
        </section>
        <Main
          image={'/bulb.svg'}
          tex="text-left"
          className2="test3"
          hideImageOnMobile={false}
          textSizeClass="text-5xl"
          opis=""
          subH="Our mission is to help our clients unlock their full digital potential. We believe in transparency, innovation, and client dedication. Our goal is to build long-term partnerships and be a key driver of your success. Ready to elevate your digital presence and grow your business? Contact us,we’re excited to work with you!"
          text="Our Mission"
          className="lg:order-last md:order-first"
        ></Main>
        <section className="py-16 bg-black px-6 md:px-12 lg:px-20 max-w-8xl mx-auto">
          <h2 className="text-3xl font-bold text-left mb-6">Why Choose Us?</h2>
          <p className="text-lg text-neutral-300 text-left">
            Is your website lost in the sea of online content? We increase your site’s visibility on search engines, attract organic traffic, and boost rankings so your target audience finds you easily. Want fast results but unsure how to use Google Ads effectively? We create targeted Google Ads campaigns that deliver quick wins and maximize your ROI. Struggling to reach your audience on social media? We help you connect with your target market on Facebook and Instagram through efficient Meta Ads, building a powerful online presence. No time to manage your social media? We handle your profiles, creating an engaged community and strengthening your brand,freeing you to focus on your business. Craving modern, dynamic social media content? We produce and edit creative Reels videos that grab attention and grow your reach, keeping your brand relevant in the digital world. Want a standout brand identity? We craft a unique visual identity,from logos to print and web materials,ensuring your brand leaves a lasting impression. Need a modern, functional website? We design and develop stunning, user-friendly sites that make a strong first impression.
          </p>
        </section>
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}