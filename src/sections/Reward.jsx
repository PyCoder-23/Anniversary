import { motion } from 'framer-motion';
import Section from '../components/Section';

const Reward = () => {
    return (
        <Section id="reward" className="pb-32">
            <div className="text-center w-full flex flex-col items-center">

                <h2 className="text-pink-300 font-display text-3xl mb-12 animate-pulse">A little something for you...</h2>

                <motion.div
                    initial={{ scale: 0.9, rotate: -2 }}
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative bg-yellow-100 w-full max-w-lg mx-auto shadow-2xl cursor-pointer overflow-hidden group rounded-xl"
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
                </motion.div>

            </div>
        </Section>
    );
};

export default Reward;
