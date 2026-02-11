'use client';

import Hero from "@/components/Home/Hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/experience";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";








const Home = () => {
    // useEffect(() => {
    //     const initAOS = async () => {
    //         await import('aos');
    //         AOS.init({
    //             duration: 1000,
    //             easing: 'ease',
    //             once: true,
    //             anchorPlacement: "top-bottom",
    //         });
    //     };
    //     initAOS();
    // }, []);



    return (
        <div id="home" className="scroll-mt-20 overflow-hidden">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Contact />

        </div>
    );
}
export default Home;