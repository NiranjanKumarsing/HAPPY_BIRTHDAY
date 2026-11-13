import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronRight } from 'lucide-react';
import { LITTLE_THINGS, LittleThing } from '../data/littleThings';
import { CuteTeddy, TeddyMood } from '../components/Decorations/CuteTeddy';
import { soundEffects } from '../utils/soundEffects';

interface SceneProps {
  onNext: () => void;
}

export const Scene7LittleThings: React.FC<SceneProps> = ({ onNext }) => {
  const [activeThing, setActiveThing] = useState<LittleThing | null>(null);
  const [teddyMood, setTeddyMood] = useState<TeddyMood>('idle');
  const [openedCards, setOpenedCards] = useState<Record<string, boolean>>({});

  const handleSelectThing = (thing: LittleThing) => {
    soundEffects.playPop();
    setOpenedCards((prev) => ({ ...prev, [thing.id]: true }));

    if (activeThing?.id === thing.id) {
      setActiveThing(null);
      setTeddyMood('idle');
    } else {
      setActiveThing(thing);
      setTeddyMood(thing.bearReaction);
    }
  };

  const hasExplored = Object.keys(openedCards).length >= 3 || !!openedCards['thing-9'];

  return (
    <div className="relative min-h-[82vh] max-w-xl mx-auto py-6 px-4 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF0B3] text-[#8B264A] mb-2 border border-[#F3BE58]">
          <Heart className="w-3.5 h-3.5 fill-[#E24C68] text-[#E24C68]" />
          Reasons Why You Are My World
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B264A]">
          Little Things I Love About You 🧸
        </h2>
        <p className="font-handwriting text-xl sm:text-2xl text-[#59404D] mt-1 max-w-md mx-auto">
          "Jann, kuch baatein hain jo aapko aur bhi khaas banati hain..."
        </p>
      </div>

      {/* Reactive Teddy Companion Banner */}
      <div className="w-full bg-[#FFFDF9] rounded-2xl p-4 shadow-sm border border-[#F8C8DC] flex items-center gap-4 mb-6">
        <CuteTeddy mood={teddyMood} size={70} />
        <div className="flex-1 text-left">
          <p className="text-xs font-bold text-[#C65B82] uppercase tracking-wider">
            Teddy's Live Reaction:
          </p>
          <p className="text-sm font-medium text-[#59404D] mt-0.5">
            {activeThing
              ? activeThing.reactionMessage
              : 'Tap any card below to see why it makes my heart flutter! ✨'}
          </p>
        </div>
      </div>

      {/* 9 Interactive Floating Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 w-full mb-8">
        {LITTLE_THINGS.map((thing) => {
          const isSelected = activeThing?.id === thing.id;

          return (
            <motion.div
              key={thing.id}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelectThing(thing)}
              className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                isSelected
                  ? 'bg-gradient-to-br from-[#FFFDF8] to-[#FFF0B3]/50 border-[#EFA5B9] shadow-romantic ring-2 ring-[#F4AFC4]/50'
                  : 'bg-[#FFFDF9] border-[#F8C8DC] shadow-sm hover:border-[#EFA5B9]'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl select-none">{thing.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-[#C65B82] uppercase tracking-wider">
                      {thing.shortTag}
                    </span>
                    <span className="text-[10px] text-[#8C6C7E]">
                      {isSelected ? 'Opened' : 'Tap'}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#8B264A]">
                    {thing.title}
                  </h4>
                  <p className="text-xs text-[#59404D] mt-1.5 leading-relaxed font-sans">
                    {thing.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Next Scene Button - SHOWN WHEN SHE HAS EXPLORED THE CARDS */}
      {hasExplored ? (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full flex flex-col items-center pb-6"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              soundEffects.playPop();
              onNext();
            }}
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F4AFC4] via-[#EFA5B9] to-[#C65B82] text-white font-bold text-sm sm:text-base shadow-romantic flex items-center gap-2 cursor-pointer"
          >
            <span>There is still a little surprise wrapped for you... 🎀✨</span>
            <ChevronRight className="w-4 h-4" />
          </motion.button>
          <span className="text-[11px] text-[#8C6C7E] mt-1.5 italic">
            Tap to see your gift
          </span>
        </motion.div>
      ) : (
        <div className="pb-6 text-center text-xs text-[#8C6C7E] italic">
          Tap and read a few of the cards above to unlock what's next ✨
        </div>
      )}
    </div>
  );
};
