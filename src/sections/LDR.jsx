import { motion } from 'framer-motion';
import { MapPin, Plane } from 'lucide-react';
import Section from '../components/Section';

const LDR = () => {
    return (
        <Section id="ldr">
            <motion.div
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl max-w-2xl w-full border border-pink-100 text-center relative overflow-hidden"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Animated Plane */}
                <motion.div
                    animate={{ x: [0, 200, 0], y: [0, -20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-10 left-0 opacity-20"
                >
                    <Plane className="transform rotate-12 text-pink-400 w-12 h-12" />
                </motion.div>

                <h2 className="text-3xl font-display text-pink-500 mb-6">Miles Apart, Heart to Heart</h2>

                <div className="flex justify-center items-center space-x-8 mb-8 text-gray-400">
                    <div className="flex flex-col items-center">
                        <MapPin className="text-pink-400 w-8 h-8 mb-2" />
                        <span className="font-handwriting">Me</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-pink-200 border-b-2 border-dotted border-pink-400 relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs bg-white px-2 rounded-full text-pink-300">
                            Distance is nothing
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <MapPin className="text-pink-400 w-8 h-8 mb-2" />
                        <span className="font-handwriting">You</span>
                    </div>
                </div>

                <p className="font-handwriting text-xl text-gray-700 leading-relaxed">
                    I know distance is tough, but you’re worth every mile. Every VC, every text, every moment makes me feel close to you.
                </p>

            </motion.div>
        </Section>
    );
};

export default LDR;
