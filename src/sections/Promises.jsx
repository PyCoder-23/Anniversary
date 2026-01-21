import { motion } from 'framer-motion';
import Section from '../components/Section';

const promises = [
    "I promise to appreciate the little things you do.",
    "I promise to make you laugh when you need it.",
    "I promise to listen to you, always.",
    "I promise to make time for us, no matter what.",
    "I promise to be honest and open with you.",
    "I promise to work hard for our beautiful future.",
    "I promise to love you, today and every day after."
];

const Promises = ({ onVisible }) => {
    return (
        <Section id="promises" onVisible={onVisible}>
            <h2 className="text-5xl font-display text-pink-500 mb-16 drop-shadow-sm text-center">My Promises</h2>

            <div className="space-y-6 max-w-2xl w-full px-4">
                {promises.map((text, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-5 group p-4 rounded-xl hover:bg-pink-50 transition-colors duration-300"
                    >
                        <div className="w-3 h-3 rounded-full bg-pink-300 group-hover:bg-pink-500 group-hover:scale-125 transition-all duration-300 shrink-0 shadow-sm"></div>
                        <p className="font-handwriting text-2xl text-gray-700 group-hover:translate-x-2 transition-transform duration-300 leading-snug">
                            {text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Promises;
