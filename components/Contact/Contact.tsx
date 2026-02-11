"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { ContactItem, SocialIcon, Input, Textarea } from "./contactcard";


const Contact = () => {




    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const mobile = formData.get("mobile");
        const message = formData.get("message");


        console.log({ name, email, mobile, message });


        alert("Message sent successfully!");
    };
    return (
        <section id="contact" className="scroll-mt-20 in-h-screen text-white px-6 md:px-16 py-30">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                {/* LEFT CONTENT */}
                <div className="space-y-6">
                    <h2 className="text-5xl font-bold leading-tight">
                        Schedule a call <br /> with me to see if I can help
                    </h2>

                    <p className="text-gray-400 max-w-md">
                        Reach out to me today and let’s discuss how I can help you achieve your goals.
                    </p>

                    <div className="space-y-4 pt-4 text-2xl">
                        <ContactItem icon={<FaPhoneAlt />} text="+9843582345" />
                        <ContactItem icon={<FaEnvelope />} text="hello@example.com" />
                        <ContactItem icon={<FaMapMarkerAlt />} text="Dhaka, Bangladesh" />
                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-4 pt-6">
                        <SocialIcon icon={<FaFacebookF />} />
                        <SocialIcon icon={<FaYoutube />} />
                        <SocialIcon icon={<FaTwitter />} />
                        <SocialIcon icon={<FaInstagram />} />
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className="bg-[#0f153d]/80 border border-white/10 rounded-2xl p-8">
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <Input name="name" placeholder="Name" />
                        <Input name="email" placeholder="Email Address" />
                        <Input name="mobile" placeholder="Mobile Number" />
                        <Textarea name="message" placeholder="Your Message" />

                        <button
                            type="submit"
                            className="w-full mt-4 bg-blue-700 hover:bg-blue-800 transition-colors py-3 rounded-full text-lg font-medium"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
