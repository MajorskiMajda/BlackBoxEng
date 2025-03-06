'use client';

// import Main from '../../home/components/MainView'
import Nav from '../../home/components/NavBar'
import Footer from '../../home/components/Footer'


export default function MainPage() {

    return (
        <div className="">
            <Nav />
            {/* <Main image={"/bulb.svg"} image2={"/arrowup.svg"} tex="text-left" className2="test3" hideImageOnMobile={false} textSizeClass="text-5xl" opis='Hello' subH='' showButton2={false} showButton={false} text="Reels" className='lg:order-last md:order-first'></Main> */}
            <div className="text-white  text-gray-800">
                {/* Hero Section */}
                <section className="bg-purple-600  py-20 text-center px-6">
                    <div className="max-w-8xl mx-auto">
                        <h1 className="text-5xl font-bold mb-4">About Us</h1>
                        <p className="text-lg ">
                            We are dedicated to delivering top-tier SEO and digital marketing
                            solutions that help businesses grow and thrive.
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 px-6 md:px-12 lg:px-20 max-w-8xl mx-auto">
                    <h2 className="text-3xl font-bold  text-center mb-6">Our Mission</h2>
                    <p className="text-lg  text-center">
                        Our mission is to empower businesses with data-driven marketing
                        strategies, boosting their online presence and ensuring long-term
                        success.
                    </p>
                </section>

                {/* Why Choose Us */}
                <section className="bg-gray-600 py-16 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto shadow-lg rounded-2xl">
                    <h2 className="text-3xl font-bold  text-center mb-6">Why Choose Us?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-10 bg-purple-600 p-2 text-white flex items-center justify-center rounded-full text-xl font-bold">
                                1
                            </div>
                            <p className="text-lg ">
                                Proven strategies to increase your search engine rankings.
                            </p>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-10 bg-purple-600 p-2 text-white flex items-center justify-center rounded-full text-xl font-bold">
                                2
                            </div>
                            <p className="text-lg">
                                Tailored SEO and marketing solutions to fit your needs.
                            </p>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-10 bg-purple-600 p-2 text-white flex items-center justify-center rounded-full text-xl font-bold">
                                3
                            </div>
                            <p className="text-lg ">
                                A dedicated team of experts committed to your success.
                            </p>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-10 bg-purple-600 p-2 text-white flex items-center justify-center rounded-full text-xl font-bold">
                                4
                            </div>
                            <p className="text-lg ">
                                Transparent reporting and measurable results.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 test3 px-6 md:px-12 lg:px-20 max-w-full mx-auto text-center">
                    <h2 className="text-3xl font-bold max-w-8xl mb-6">Meet Our Team</h2>
                    <p className="text-lg  mb-8">
                        Our team is made up of passionate and experienced professionals dedicated to helping your business grow.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {/* Team Member Example (Can be expanded) */}
                        <div className="w-48 text-center">
                            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-3"></div>
                            <h3 className="text-xl font-semibold">John Doe</h3>
                            <p className="text-gray-600">SEO Expert</p>
                        </div>
                        <div className="w-48 text-center">
                            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-3"></div>
                            <h3 className="text-xl font-semibold">Jane Smith</h3>
                            <p className="text-gray-600">Marketing Strategist</p>
                        </div>
                    </div>
                </section>
                
            </div>


            <Footer />
        </div>
    );

}