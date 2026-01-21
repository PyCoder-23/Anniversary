import { motion } from 'framer-motion';
import Section from '../components/Section';

const milestones = [
    { date: 'Dec 24, 2025', title: 'The Spark', desc: 'We met and instantly clicked. Our vibes matched perfectly, and before I knew it, we were us.' },
    { date: 'Dec 27, 2025', title: 'The Leap', desc: 'I took a step and sent my photo. You called me cute... no one had ever said that to me. You made me feel so special. <33' },
    { date: 'Jan 7, 2026', title: 'Our "Home"', desc: 'We created our space, listening to peak music on VC and playing the most fun games ever. Pure happiness.' },
    { date: 'Jan 24, 2026', title: 'One Month', desc: 'It is officially one month of bliss. I hope this marks the first of hundreds of months to come. <333' },
];

const Timeline = ({ onVisible }) => {
    return (
        <Section id="timeline" onVisible={onVisible}>
            <h2 className="text-5xl font-display text-pink-500 mb-16 drop-shadow-sm">Our Month</h2>

            <div className="relative max-w-5xl w-full px-4">
                {/* Vertical Line */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-200 via-pink-300 to-pink-200 rounded-full"></div>

                <div className="space-y-16">
                    {milestones.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className={`flex flex-col md:flex-row items-start md:items-center w-full relative pl-12 md:pl-0 group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >

                            {/* Dot */}
                            <div className="absolute left-3.5 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-pink-400 shadow-md z-10 group-hover:scale-125 transition-transform duration-300"></div>


                            {/* Content Side */}
                            <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12'}`}>
                                <div className={`bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-md border border-pink-100 relative
                                  transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                 `}>
                                    <div className="absolute top-4 right-4 text-pink-300 font-display text-2xl opacity-50">#{index + 1}</div>
                                    <span className="inline-block bg-pink-100 text-pink-500 font-bold px-3 py-1 rounded-full text-sm mb-3 shadow-sm">{item.date}</span>
                                    <h3 className="font-display text-3xl text-gray-800 mb-3">{item.title}</h3>
                                    <p className="font-handwriting text-gray-600 text-xl leading-relaxed">{item.desc}</p>
                                </div>
                            </div>

                            {/* Spacer */}
                            <div className="hidden md:block w-1/2"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Timeline;
