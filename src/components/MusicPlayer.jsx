import { useState, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = ({ audioRef }) => {
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.log("Audio play failed (interaction needed)", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Sync state with actual audio if needed (e.g. if it stops for other reasons)
    // For this simple app, assuming it stays in sync via this component is fine.

    return (
        <div className="fixed top-4 right-4 z-50">
            <button
                onClick={togglePlay}
                className={`
            p-3 rounded-full shadow-lg transition-all duration-300 
            flex items-center justify-center
            ${isPlaying ? 'bg-pink-400 text-white animate-spin-slow' : 'bg-white text-pink-400 hover:scale-110'}
        `}
            >
                {isPlaying ? <Music size={24} /> : <VolumeX size={24} />}
            </button>
        </div>
    );
};

export default MusicPlayer;
