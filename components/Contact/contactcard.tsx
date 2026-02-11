

const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
    <div className="flex items-center gap-4 text-gray-300">
        <span className="text-cyan-400 text-xl">{icon}</span>
        <span>{text}</span>
    </div>
);


const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900/20 hover:bg-cyan-500 transition-colors cursor-pointer">
        {icon}
    </div>
);

interface InputProps {
    placeholder: string;
    name?: string; // optional, can be required if needed
}

export const Input = ({ placeholder, name }: InputProps) => {
    return (
        <input
            type="text"
            name={name}
            placeholder={placeholder}
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
        />
    );
};



interface TextareaProps {
    placeholder: string;
    name?: string;
}

export const Textarea = ({ placeholder, name }: TextareaProps) => {
    return (
        <textarea
            name={name}
            placeholder={placeholder}
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
            rows={5}
        />
    );
};

export { ContactItem, SocialIcon };
