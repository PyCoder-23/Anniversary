import { motion } from 'framer-motion';
import Section from '../components/Section';

const LoveLetter = ({ onVisible }) => {
    return (
        <Section id="letter" onVisible={onVisible}>
            <motion.div
                className="max-w-2xl w-full bg-white p-8 md:p-12 shadow-xl rotate-1 relative mx-4"
                initial={{ rotate: 1 }}
                whileHover={{ rotate: 0 }}
                style={{
                    backgroundImage: 'repeating-linear-gradient(#fff, #fff 29px, #d1d5db 30px)'
                }}
            >
                {/* Washi Tape */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-pink-200/50 -rotate-2"></div>

                <h2 className="text-4xl font-display text-pink-500 mb-8 mt-4">Dear Cee Cee,</h2>

                <div className="font-handwriting text-xl md:text-2xl text-gray-700 leading-loose space-y-6">
                    <p>
                        Can you believe it’s already been a month? It feels like just yesterday we started talking, yet somehow, it also feels like I’ve known you for ages.
                    </p>
                    <p>
                        I absolutely adore our time together, whether we're listening to music, binge-watching shows, or just chatting. Your taste in everything is just perfect, and I cherish those moments so much.
                    </p>
                    <p>
                        But what I love most is your energy. The way you tell me about your day, or when you excitedly explain something to me... you just light up everything around you. Talking to you is, without a doubt, the happiest part of my day.
                    </p>
                    <p>
                        Thank you for being you. Here’s to our first milestone, and to many, many more.
                    </p>
                </div>

                <div className="mt-8 text-right font-display text-2xl text-pink-400">
                    With all my love, <br />
                    Lee Lee
                </div>
            </motion.div>
        </Section>
    );
};

export default LoveLetter;
