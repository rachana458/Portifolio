type CardProps = {
    icon: React.ReactNode;
    title: string;
    text: string;
    date?: string;
};

const Card = ({ icon, title, text, date }: CardProps) => {
    return (
        <div className="bg-blue-900/20 border border-white/10 rounded-2xl p-6 flex gap-4 hover:scale-[1.02] transition-transform duration-300">

            <div className="w-12 h-12 min-w-[56px] flex items-center justify-center rounded-full bg-[#1b235a] text-white text-cyan-400 text-xl">
                {icon}
            </div>

            <div>
                {date && (
                    <span className="inline-block mb-2 px-4 py-1 text-sm bg-white rounded-full text-gray-700">
                        {date}
                    </span>
                )}

                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
            </div>

        </div>
    );
};
export default Card;