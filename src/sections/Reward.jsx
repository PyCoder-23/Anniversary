import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wand2, Mail } from 'lucide-react';
import Section from '../components/Section';

const Reward = () => {
    const [stage, setStage] = useState('initial'); // initial, magic, letter, coupon

    const handleMagicStart = () => {
        setStage('magic');
        // Magic animation lasts 4 seconds
        setTimeout(() => {
            setStage('letter');
        }, 4000);
    };

    return (
        <Section id="reward" className="pb-40 overflow-hidden relative min-h-[600px]">
            <AnimatePresence mode="wait">

                {/* STAGE 1: INITIAL BUTTON */}
                {stage === 'initial' && (
                    <motion.div
                        key="button"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0, rotate: 180 }}
                        className="text-center"
                    >
                        <h2 className="text-pink-400 font-display text-4xl mb-8 animate-bounce">One Final Surprise...</h2>
                        <button
                            onClick={handleMagicStart}
                            className="bg-gradient-to-r from-pink-400 to-purple-400 text-white font-display text-2xl px-12 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                            <span className="flex items-center gap-3">
                                <Sparkles className="w-6 h-6 animate-pulse" />
                                Reveal My Gift
                                <Sparkles className="w-6 h-6 animate-pulse" />
                            </span>
                        </button>
                    </motion.div>
                )}

                {/* STAGE 2: FAIRY MAGIC ANIMATION */}
                {stage === 'magic' && (
                    <motion.div
                        key="magic"
                        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Magic Text */}
                        <motion.div
                            className="font-handwriting text-3xl text-pink-400 font-bold mb-8 z-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
                            transition={{ duration: 3.5, times: [0, 0.2, 0.8, 1] }}
                        >
                            Waving the wand, woosh!! ✨
                        </motion.div>

                        {/* Fairy 1 (Left) */}
                        <motion.div
                            initial={{ x: -250, y: 100, opacity: 0 }}
                            animate={{ x: [-250, -60, -60], y: [100, -20, 20], opacity: [0, 1, 0] }}
                            transition={{ duration: 4, times: [0, 0.5, 1] }}
                            className="absolute text-pink-300"
                        >
                            <Wand2 size={64} className="transform -scale-x-100" />
                            <motion.div
                                animate={{ scale: [1, 2, 0], opacity: [0, 1, 0] }}
                                transition={{ duration: 0.5, repeat: 6 }}
                                className="absolute top-0 right-0 text-yellow-400"
                            >
                                <Sparkles size={32} />
                            </motion.div>
                        </motion.div>

                        {/* Fairy 2 (Right) */}
                        <motion.div
                            initial={{ x: 250, y: -100, opacity: 0 }}
                            animate={{ x: [250, 60, 60], y: [-100, 20, -20], opacity: [0, 1, 0] }}
                            transition={{ duration: 4, delay: 0.5, times: [0, 0.5, 1] }}
                            className="absolute text-purple-300"
                        >
                            <Wand2 size={64} />
                            <motion.div
                                animate={{ scale: [1, 2, 0], opacity: [0, 1, 0] }}
                                transition={{ duration: 0.5, repeat: 6 }}
                                className="absolute top-0 -left-4 text-yellow-400"
                            >
                                <Sparkles size={32} />
                            </motion.div>
                        </motion.div>

                        {/* Magical Dust Particles */}
                        {[...Array(30)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                                initial={{ x: 0, y: 0, opacity: 0 }}
                                animate={{
                                    x: (Math.random() - 0.5) * 500,
                                    y: (Math.random() - 0.5) * 500,
                                    opacity: [0, 1, 0],
                                    scale: [0, 1.5, 0]
                                }}
                                transition={{ duration: 2.5, delay: Math.random() * 1.5, repeat: Infinity }}
                            />
                        ))}
                    </motion.div>
                )}

                {/* STAGE 3: THE LETTER */}
                {stage === 'letter' && (
                    <motion.div
                        key="letter"
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 1.5, opacity: 0 }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        onClick={() => setStage('coupon')}
                        className="cursor-pointer relative max-w-md mx-auto w-full group"
                    >
                        {/* Envelope Body */}
                        <div className="bg-pink-100 h-64 w-full rounded-lg shadow-xl relative z-0 flex flex-col items-center justify-end border-2 border-pink-200 overflow-hidden">
                            {/* Flap Triangles for Envelope Look */}
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-pink-200 opacity-50 clip-path-polygon-[0_0,50%_100%,100%_0] z-10" style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }}></div>

                            {/* Letter Content - Pushed to bottom */}
                            <div className="z-20 text-center mb-8 bg-white/80 px-8 py-3 rounded-xl backdrop-blur-sm border border-pink-100 shadow-sm transform hover:scale-105 transition-transform">
                                <h3 className="font-handwriting text-3xl text-pink-500 mb-1 font-bold">For my Fairy Princess</h3>
                                <p className="text-gray-400 text-xs font-sans uppercase tracking-widest">(Tap to open)</p>
                            </div>
                        </div>

                        {/* Wax Seal - Positioned on the flap point */}
                        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 z-30 group-hover:scale-110 transition-transform duration-300">
                            <div className="w-full h-full bg-red-700 rounded-full border-4 border-red-800 shadow-lg flex items-center justify-center relative">
                                <HeartIcon size={24} />
                                {/* Shine effect */}
                                <div className="absolute top-2 left-3 w-4 h-3 bg-white/20 rounded-full blur-[2px]"></div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* STAGE 4: THE COUPON */}
                {stage === 'coupon' && (
                    <motion.div
                        key="coupon"
                        initial={{ scale: 0.5, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        className="text-center w-full flex flex-col items-center"
                    >
                        <div className="relative bg-yellow-100 w-full max-w-lg mx-auto shadow-2xl cursor-pointer overflow-hidden group rounded-xl transform transition-transform hover:scale-105"
                            onClick={() => alert("Screenshot this and send it to me! 📸")}
                        >
                            {/* Ticket Shape Cutouts */}
                            <div className="absolute top-1/2 -left-6 w-12 h-12 bg-pink-50 rounded-full transform -translate-y-1/2 z-10 box-decoration-clone shadow-inner border-r border-yellow-300"></div>
                            <div className="absolute top-1/2 -right-6 w-12 h-12 bg-pink-50 rounded-full transform -translate-y-1/2 z-10 shadow-inner border-l border-yellow-300"></div>

                            <div className="p-8 border-4 border-yellow-300 border-dashed m-2 rounded-lg relative bg-yellow-50">

                                {/* Badge */}
                                <div className="absolute -top-3 -right-3 bg-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold transform rotate-12 shadow-md z-20">
                                    VALID FOREVER
                                </div>

                                {/* Header */}
                                <div className="border-b-2 border-dashed border-yellow-200 pb-6 mb-6">
                                    <h3 className="text-4xl font-display text-yellow-600 mb-2">Virtual Date Coupon</h3>
                                    <p className="text-yellow-500 text-sm uppercase tracking-[0.3em] font-bold">Admit One • VIP Access</p>
                                </div>

                                {/* Content */}
                                <div className="py-2 mb-8">
                                    <p className="font-handwriting text-3xl text-gray-700 leading-snug">
                                        Redeem this for one cozy virtual date with me 💗
                                    </p>
                                    <p className="text-base text-gray-500 mt-3 font-handwriting">(Movies, games, or just talking!)</p>
                                </div>

                                {/* Footer / Barcode area */}
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="bg-yellow-400 text-yellow-900 px-8 py-3 rounded-full font-bold shadow-sm hover:bg-yellow-300 transition-colors uppercase tracking-wider text-sm">
                                        Redeem Now
                                    </div>

                                    {/* Fake Barcode */}
                                    <div className="h-12 w-48 flex items-stretch justify-center opacity-60">
                                        {[...Array(20)].map((_, i) => (
                                            <div key={i} className={`h-full ${Math.random() > 0.5 ? 'w-1 bg-gray-800' : 'w-2 bg-transparent'} mx-[1px]`}></div>
                                        ))}
                                        <div className="w-1 bg-gray-800 mx-1"></div>
                                        <div className="w-3 bg-gray-800 mx-1"></div>
                                        <div className="w-1 bg-gray-800 mx-1"></div>
                                    </div>
                                    <p className="text-[10px] text-gray-400 font-mono tracking-widest">NO. 122425-ILOVEYOU</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
};

const HeartIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
    </svg>
);

export default Reward;
