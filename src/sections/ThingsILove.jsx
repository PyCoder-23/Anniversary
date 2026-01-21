import { motion } from 'framer-motion';
import { Heart, Star, Sun, Smile, Music, Zap, Sparkles } from 'lucide-react';
import Section from '../components/Section';

const traits = [
    { icon: Music, text: "Your immaculate taste in Music & TV", color: "text-purple-400", bg: "bg-purple-50" },
    { icon: Zap, text: "Your infectious energy", color: "text-yellow-500", bg: "bg-yellow-50" },
    { icon: Smile, text: "The way you say my name :DD", color: "text-pink-400", bg: "bg-pink-50" },
    { icon: Star, text: "Your dreams for our future", color: "text-blue-400", bg: "bg-blue-50" },
    { icon: Sparkles, text: "How helpful & independent you are", color: "text-orange-400", bg: "bg-orange-50" },
    { icon: Heart, text: "And honestly... everything else <3", color: "text-red-400", bg: "bg-red-50" },
];

const ThingsILove = ({ onVisible }) => {
    return (
        <Section id="things-i-love" onVisible={onVisible}>
            <h2 className="text-5xl font-display text-pink-500 mb-16 text-center drop-shadow-sm">Things I Love About You</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-6">
                {traits.map((trait, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, shadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                        className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 flex flex-col items-center text-center space-y-4 h-full transition-all duration-300 group"
                    >
                        <div className={`p-4 rounded-full ${trait.bg} ${trait.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                            <trait.icon size={40} />
                        </div>
                        <span className="font-handwriting text-2xl text-gray-700 leading-relaxed font-bold">
                            {trait.text}
                        </span>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default ThingsILove;
