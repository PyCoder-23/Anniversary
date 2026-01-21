import Section from '../components/Section';
import StickyNote from '../components/StickyNote';

const jokes = [
    { text: "Our \"high\" conversations 😂", color: "bg-yellow-100", rotate: -2 },
    { text: "Planning our beautiful wedding & cute babies", color: "bg-pink-100", rotate: 2 },
    { text: "Me getting addicted to everything you suggest lol", color: "bg-blue-100", rotate: -1 },
    { text: "Your constant reassurance when I'm down <33", color: "bg-green-100", rotate: 3 },
    { text: "Meeting when you're 18! :DD", color: "bg-purple-100", rotate: -2 },
    { text: "And so many more memories... ✨", color: "bg-orange-100", rotate: 1 },
];

const InsideJokes = ({ onVisible }) => {
    return (
        <Section id="jokes" onVisible={onVisible}>
            <h2 className="text-5xl font-display text-pink-500 mb-16 text-center drop-shadow-sm">Inside Jokes & Memories</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full px-6">
                {jokes.map((joke, index) => (
                    <StickyNote
                        key={index}
                        color={joke.color}
                        rotate={joke.rotate}
                        className="w-full h-64 shadow-xl"
                    >
                        {joke.text}
                    </StickyNote>
                ))}
            </div>
        </Section>
    );
};

export default InsideJokes;
