import { useState, useRef } from 'react';
import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MusicPlayer from './components/MusicPlayer';
import Welcome from './sections/Welcome';
import LoveLetter from './sections/LoveLetter';
import Timeline from './sections/Timeline';
import ThingsILove from './sections/ThingsILove';
import InsideJokes from './sections/InsideJokes';
import LDR from './sections/LDR';
import Promises from './sections/Promises';
import Reward from './sections/Reward';

function App() {
  const [started, setStarted] = useState(false);
  const [visitedSections, setVisitedSections] = useState(new Set());
  const audioRef = useRef(null);

  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(e => console.log("Audio play failed", e));
    }
    setStarted(true);
  };

  const handleSectionVisit = (sectionId) => {
    setVisitedSections(prev => {
      const newSet = new Set(prev);
      newSet.add(sectionId);
      return newSet;
    });
  };

  return (
    <div className="min-h-screen relative font-sans text-gray-800">
      {/* Global Audio Element */}
      <audio ref={audioRef} loop src="/music.mp3" preload="auto" />

      {/* Intro Overlay */}
      <AnimatePresence>
        {!started && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 z-[100] bg-pink-50 flex flex-col items-center justify-center cursor-pointer"
            onClick={handleStart}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-center"
            >
              <Heart className="w-24 h-24 text-pink-400 mx-auto mb-6 fill-pink-200" />
              <h1 className="font-display text-5xl text-pink-500 mb-4">For Cee Cee</h1>
              <p className="font-handwriting text-xl text-gray-500 animate-pulse">(Tap to Open 💌)</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <MusicPlayer audioRef={audioRef} />

      <main className="w-full min-h-screen bg-pink-50 shadow-2xl overflow-hidden relative">
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0 fixed"
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 space-y-0">

          <div onMouseEnter={() => handleSectionVisit('welcome')}>
            <Welcome />
          </div>

          <LoveLetter onVisible={() => handleSectionVisit('letter')} />
          <Timeline onVisible={() => handleSectionVisit('timeline')} />
          <ThingsILove onVisible={() => handleSectionVisit('things-i-love')} />
          <InsideJokes onVisible={() => handleSectionVisit('jokes')} />
          <LDR onVisible={() => handleSectionVisit('ldr')} />
          <Promises onVisible={() => handleSectionVisit('promises')} />

          <Reward />

          {/* Footer / Copyright */}
          <footer className="text-center pb-8 pt-4 text-pink-300 text-sm font-handwriting">
            Made with ❤️ for Celeste
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App
