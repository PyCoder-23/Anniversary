import { motion } from 'framer-motion';

const Polaroid = ({ src, caption, rotate = 0, delay = 0 }) => {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: rotate - 10 }}
            whileInView={{ scale: 1, opacity: 1, rotate: rotate }}
            transition={{ delay, duration: 0.5, type: 'spring' }}
            viewport={{ once: true }}
            className="bg-white p-3 pb-8 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300 w-full max-w-[280px] mx-auto"
        >
            <div className="aspect-square bg-gray-100 overflow-hidden mb-3 grayscale-[0.2] hover:grayscale-0 transition-all duration-500">
                {src ? (
                    <img src={src} alt={caption} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-pink-100 text-pink-300">
                        <span>Photo</span>
                    </div>
                )}

            </div>
            {caption && (
                <p className="text-center font-handwriting text-xl text-gray-600 rotate-1">
                    {caption}
                </p>
            )}
        </motion.div>
    );
};

export default Polaroid;
