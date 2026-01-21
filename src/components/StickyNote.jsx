import { motion } from 'framer-motion';

const StickyNote = ({ children, className = '', rotate = 0, color = 'bg-yellow-200' }) => {
    return (
        <motion.div
            initial={{ rotate: rotate - 2, scale: 0.95, opacity: 0 }}
            whileInView={{ rotate: rotate, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
            className={`relative shadow-lg ${color} transition-all duration-300 flex flex-col items-center justify-center p-6 ${className}`}
            style={{
                boxShadow: '4px 4px 15px rgba(0,0,0,0.08)'
            }}
        >
            {/* Washi Tape Effect */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-white/40 rotate-1 backdrop-blur-sm shadow-sm"></div>

            <div className="font-handwriting text-gray-800 text-2xl text-center leading-relaxed w-full">
                {children}
            </div>
        </motion.div>
    );
};

export default StickyNote;
