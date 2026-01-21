import { motion } from 'framer-motion';

const Section = ({ children, className = '', id, onVisible }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            onViewportEnter={() => onVisible && onVisible()}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`min-h-[80vh] flex flex-col items-center justify-center p-8 relative ${className}`}
        >
            {children}
        </motion.section>
    );
};

export default Section;
