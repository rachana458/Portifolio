"use client";

import {
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiTailwindcss,
    SiTypescript,
    SiExpress,
    SiMongodb,
    SiPython,
    SiCplusplus,
    SiTensorflow,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiGit,
    SiGithub
} from "react-icons/si";


const skills = [
    { icon: <SiJavascript />, name: "JavaScript", percent: "89%" },
    { icon: <SiReact />, name: "React.js", percent: "92%" },
    { icon: <SiNextdotjs />, name: "Next.js", percent: "90%" },
    { icon: <SiNodedotjs />, name: "Node.js", percent: "88%" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", percent: "94%" },
    { icon: <SiTypescript />, name: "TypeScript", percent: "86%" },
    { icon: <SiPython />, name: "Python", percent: "90%" },
    { icon: <SiTensorflow />, name: "AI / Machine Learning", percent: "80%" },
    { icon: <SiCplusplus />, name: "C++", percent: "80%" },
    { icon: <SiScikitlearn />, name: "Scikit-Learn", percent: "85%" },
    { icon: <SiPandas />, name: "Pandas", percent: "88%" },
    { icon: <SiNumpy />, name: "NumPy", percent: "87%" },
    { icon: <SiTensorflow />, name: "TensorFlow", percent: "75%" },
    { icon: <SiMongodb />, name: "MongoDB", percent: "80%" },
    { icon: <SiGit />, name: "Git", percent: "88%" },
    { icon: <SiGithub />, name: "GitHub", percent: "90%" },

];

const Skills = () => {
    return (
        <section id="skills" className="flex flex-col items-center justify-center py-10">

            {/* TITLE */}
            <h2 className="text-4xl text-white font-bold mb-14">
                My <span className="text-cyan-400">Skills</span>
            </h2>

            {/* SKILLS GRID */}
            <div className="grid text-white grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-6xl w-full">
                {skills.map((skill, index) => (
                    <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={index * 100}
                        key={index}
                        className="bg-blue-900/20 border border-white/10 
                       rounded-2xl py-8 flex flex-col items-center 
                       hover:scale-105 transition-transform duration-300"
                    >
                        <div className="text-4xl text-white mb-4">
                            {skill.icon}
                        </div>

                        <p className="text-xl font-semibold mb-1">
                            {skill.percent}
                        </p>

                        <p className="text-purple-400 text-sm">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
