"use client";
import { FaReact, FaLayerGroup, FaLaptopCode, FaCode, FaGraduationCap } from "react-icons/fa";
import Card from "./experienececard";



const Experience = () => {
    return (
        <section id="experience" className="scroll-mt-20 text-white px-6 md:px-16 py-20">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div>
                    <h2 className="text-3xl font-bold mb-8">
                        My <span className="text-cyan-400">Experience</span>
                    </h2>

                    <div className="space-y-6" data-aos="zoom-in" data-aos-anchor-placement="top-center">

                        <Card
                            icon={<FaLaptopCode />}
                            title="Software Engineer – AI Training (Outlier)"
                            date="Jun 2024 – Aug 2024"
                            text="Designed 20+ high-quality code reviews to simulate RLHF (Reinforcement Learning from Human Feedback) workflows, contributing to AI model training and evaluation."
                        />

                        <Card
                            icon={<FaCode />}
                            title="Software Developer Intern – Mapping Skills"
                            date="Aug 2021 – Sep 2021"
                            text="Developed a Python-based movie recommendation system using ML and similarity metrics. Improved prediction accuracy through user behavior analysis and real-time feedback integration."
                        />

                        <Card
                            icon={<FaCode />}
                            title="Software Engineer Intern – Ducat Education"
                            date="Jun 2020 – Aug 2020"
                            text="Built a real-time facial recognition system using Python and OpenCV, achieving high-accuracy face detection under varied lighting conditions for security applications."
                        />
                    </div>
                </div>


                {/* EDUCATION */}
                <div>
                    <h2 className="text-3xl font-bold mb-8">
                        My <span className="text-cyan-400">Education</span>
                    </h2>

                    <div className="space-y-6" data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300">

                        <Card
                            icon={<FaGraduationCap />}
                            date="Aug 2023 – Jun 2025"
                            title="National Institute of Technology (NIT), Rourkela"
                            text="M.Tech in Computer Science & Engineering. Focused on Artificial Intelligence, Networking, and Advanced Software Engineering."
                        />

                        <Card
                            icon={<FaGraduationCap />}
                            date="Aug 2018 – Jun 2022"
                            title="College of Engineering Roorkee"
                            text="B.Tech in Computer Science & Engineering. Studied Data Structures, Algorithms, Operating Systems, DBMS, and Web Development."
                        />
                    </div>
                </div>

            </div>

        </section >
    );
};

export default Experience;

