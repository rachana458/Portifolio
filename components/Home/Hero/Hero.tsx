
"use client";
import { BsArrowRight } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ParticleHero from "./Particles";
import Typewriter from 'typewriter-effect';
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const Hero = () => {
    useEffect(() => {
        const initAOS = async () => {
            await import('aos');
            AOS.init({
                duration: 1000,
                easing: 'ease',
                once: true,
                anchorPlacement: "top-bottom",
            });
        };
        initAOS();
    }, []);


    return (
        <div className=" relative h-screen scroll-mt-10 flex items-center overflow-hidden justify-center  text-white flow-col px-10">
            <ParticleHero />
            <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#0c0c48aa] shadow-lg" data-aos="fade-up">
                    <Image
                        src="/img/img-g2.jpg"
                        alt="Rachana Yadav"
                        width={144}
                        height={144}
                        className="object-cover w-full h-full"
                    />
                </div>
                <h1 data-aos="fade-up" data-aos-delay="200" className="text-2xl text-white md:text-5xl text-center font-bold">
                    Frontend Developer
                </h1>

                <h2 data-aos="fade-up" data-aos-delay="400" className="text-2xl px-2 text-gray-300">
                    A junior <span className="text-violet-400">frontend developer</span> who loves to build
                </h2>

                <h3 data-aos="fade-up" data-aos-delay="600" className="text-lg text-gray-400 flex items-center">
                    Hi, I am Rachana - A passionate
                    <span className="text-violet-400 font-semibold inline">
                        <Typewriter options={{
                            strings: ['Forntend Developer', 'ML Programmer'],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            deleteSpeed: 50,
                            wrapperClassName: "inline pl-2",
                        }}
                        />
                    </span>

                </h3>

                {/* SOCIAL ICONS */}
                <div data-aos="fade-up" data-aos-delay="900" className="flex justify-center gap-6 pt-4 text-2xl">
                    <a
                        href="https://github.com/rachana458"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-violet-400 transition-colors"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/rachana-yadav-7875762302r/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-violet-400 transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                </div>

                <a href="#experience"
                    data-aos="fade-up"
                    data-aos-delay="950"
                    className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium flex items-center justify-center">
                    <span>See my work</span>
                    <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
                </a>

            </div>
        </div >


    );
};

export default Hero;


