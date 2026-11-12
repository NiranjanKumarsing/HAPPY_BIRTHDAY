import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingHearts } from './components/BackgroundEffects/FloatingHearts';
import { TwinklingStars } from './components/BackgroundEffects/TwinklingStars';
import { NavBar } from './components/Navigation/NavBar';

// 10 Scenes
import { Scene1Welcome } from './scenes/Scene1Welcome';
import { Scene2Envelope } from './scenes/Scene2Envelope';
import { Scene3BirthdayCascade } from './scenes/Scene3BirthdayCascade';
import { Scene4Scrapbook } from './scenes/Scene4Scrapbook';
import { Scene5LoveLetters } from './scenes/Scene5LoveLetters';
import { Scene6Shayari } from './scenes/Scene6Shayari';
import { Scene7LittleThings } from './scenes/Scene7LittleThings';
import { Scene8Gift } from './scenes/Scene8Gift';
import { Scene9FinalRomantic } from './scenes/Scene9FinalRomantic';
import { Scene10Apology } from './scenes/Scene10Apology';

export const App: React.FC = () => {
  const [currentScene, setCurrentScene] = useState<number>(1);
  const totalScenes = 10;

  // Scroll to top automatically when changing scene on mobile
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScene]);

  const handleNext = () => {
    if (currentScene < totalScenes) {
      setCurrentScene((prev) => prev + 1);
    }
  };

  const handleSelectScene = (sceneNum: number) => {
    setCurrentScene(sceneNum);
  };

  const handleReset = () => {
    setCurrentScene(1);
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#FFF7F0] via-[#F8C8DC] to-[#F4AFC4] text-[#59404D] overflow-x-hidden flex flex-col justify-between">
      {/* Background Animated Atmosphere */}
      <FloatingHearts count={currentScene === 10 ? 10 : 18} />
      <TwinklingStars count={currentScene >= 6 && currentScene <= 9 ? 30 : 16} />

      {/* Top Floating Navigation Bar */}
      <NavBar
        currentScene={currentScene}
        totalScenes={totalScenes}
        onSelectScene={handleSelectScene}
        onReset={handleReset}
      />

      {/* Main Content Area - padded to avoid overlap with floating navbar */}
      <main className="relative z-10 w-full flex-1 pt-18 sm:pt-20 pb-12 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene}
            initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -18, filter: 'blur(4px)' }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="w-full flex-1 flex flex-col justify-center"
          >
            {currentScene === 1 && <Scene1Welcome onNext={handleNext} />}
            {currentScene === 2 && <Scene2Envelope onNext={handleNext} />}
            {currentScene === 3 && <Scene3BirthdayCascade onNext={handleNext} />}
            {currentScene === 4 && <Scene4Scrapbook onNext={handleNext} />}
            {currentScene === 5 && <Scene5LoveLetters onNext={handleNext} />}
            {currentScene === 6 && <Scene6Shayari onNext={handleNext} />}
            {currentScene === 7 && <Scene7LittleThings onNext={handleNext} />}
            {currentScene === 8 && <Scene8Gift onNext={handleNext} />}
            {currentScene === 9 && <Scene9FinalRomantic onNext={handleNext} />}
            {currentScene === 10 && <Scene10Apology onRestart={handleReset} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Subtle Footer Watermark */}
      <footer className="relative z-10 py-3 text-center text-[11px] text-[#8C6C7E] font-medium pointer-events-none select-none">
        <span>A Little World Made With Love by Niranjan For Chhavi ❤️</span>
      </footer>
    </div>
  );
};

export default App;

