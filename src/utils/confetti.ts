import confetti from 'canvas-confetti';

export const triggerHeartConfetti = () => {
  const count = 35;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
      colors: ['#F8C8DC', '#F4AFC4', '#EFA5B9', '#DCCBFA', '#FFF0B3', '#C65B82'],
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 40,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.9,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

export const triggerGiftBurst = () => {
  const end = Date.now() + 1500;
  const colors = ['#F8C8DC', '#FFF0B3', '#DCCBFA', '#EFA5B9', '#FFD6C2', '#C65B82'];

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.65 },
      colors: colors,
      zIndex: 9999,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.65 },
      colors: colors,
      zIndex: 9999,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

export const triggerCandleExtinguish = () => {
  confetti({
    particleCount: 40,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#FFF0B3', '#F8C8DC', '#D4F0E2', '#DCCBFA'],
    zIndex: 9999,
  });
};

