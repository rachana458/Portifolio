// "use client";

// import Image from "next/image";

// const About = () => {
//     return (
//         <section id="about" className="min-h-screen  scroll-mt-20 text-white pt-2 py-2 flex items-center justify-center">
//             <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

//                 {/* LEFT SIDE - About text */}
//                 <div data-aos="fade-right" data-aos-anchor-placement="top-center" className="space-y-6 text-center text-center ">
//                     <h2 className="text-4xl font-bold mb-14">
//                         Behind the <span className="text-cyan-400">Code</span>
//                     </h2>
//                     <p className="text-gray-300 text-lg leading-relaxed">
//                         Hi, I am <span className="text-white font-semibold">Rachana</span>.
//                         I am a passionate Frontend Developer and ML Programmer. I love building
//                         responsive and modern web applications using React, Next.js, and Tailwind CSS.
//                         I am constantly learning new technologies and improving my skills to deliver
//                         high-quality solutions.
//                     </p>
//                     <p className="text-gray-300 text-lg leading-relaxed">
//                         When I am not coding, I enjoy exploring AI, reading tech blogs, and working
//                         on personal projects that challenge me to think creatively and innovate.
//                     </p>
//                 </div>

//                 {/* RIGHT SIDE - Image */}
//                 <div data-aos="fade-right" data-aos-anchor-placement="top-center" className="flex justify-center md:justify-end">
//                     <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-black bg-violet-400">
//                         <Image
//                             src="/img/profile.jpg" // Replace with your actual image path
//                             alt="Rachana Yadav"
//                             fill
//                             className="object-cover"
//                         />
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default About;


"use client";

import Image from "next/image";

const About = () => {
    return (
        <section id="about" className=" text-white px-6 flex flex-col items-center gap-5">

            {/* TITLE AT TOP CENTER */}
            <h1 className="text-5xl md:text-3xl font-bold text-white mt-8 text-center leading-snug">
                Hi, I’m Rachana <br />Here’s My Story
            </h1>


            {/* MAIN CONTENT */}
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center mt-10">

                {/* LEFT SIDE - About text */}
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" className="space-y-6 text-center md:text-left">
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Hi, I am <span className="text-white font-semibold">Rachana</span>.
                        I am a passionate Frontend Developer and ML Programmer. I love building
                        responsive and modern web applications using React, Next.js, and Tailwind CSS.
                        I am constantly learning new technologies and improving my skills to deliver
                        high-quality solutions.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        When I am not coding, I enjoy exploring AI, reading tech blogs, and working
                        on personal projects that challenge me to think creatively and innovate.
                    </p>
                </div>

                {/* RIGHT SIDE - Image */}
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100" className="flex justify-center md:justify-end">
                    <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-black bg-violet-400">
                        <Image
                            src="/img/g3.jpg" // Replace with your actual image path
                            alt="Rachana Yadav"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
