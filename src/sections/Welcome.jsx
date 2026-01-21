import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import Section from '../components/Section';

const Welcome = () => {
    return (
        <Section className="h-screen py-0" id="welcome">
            <div className="relative text-center z-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="inline-block relative mb-6"
                >
                    <Heart className="w-32 h-32 text-pink-400 fill-pink-200 drop-shadow-lg" />
                    <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-4 -right-4"
                    >
                        <Sparkles className="w-8 h-8 text-yellow-400" />
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-6xl md:text-8xl font-display text-pink-500 mb-4 drop-shadow-sm"
                >
                    Happy 1 Month
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="text-2xl text-gray-600 font-handwriting"
                >
                    30 days of smiles, warmth, and you.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.8 }}
                    className="mt-12"
                >
                    <p className="text-gray-400 text-sm animate-bounce">↓ Scroll to explore ↓</p>
                </motion.div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-pink-200 opacity-30"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight
                        }}
                        animate={{
                            y: [0, -20, 0],
                            x: [0, 10, 0]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{ fontSize: `${Math.random() * 40 + 20}px` }}
                    >
                        ❤
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Welcome;
