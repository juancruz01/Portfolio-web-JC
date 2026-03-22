'use client';

import { useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';

interface DotWaveProps {
  dotGap?: number;
  dotRadiusMax?: number;
  expansionSpeed?: number;
  repeatAnimation?: boolean;
  lightIntensity?: number;
  className?: string;
  children?: React.ReactNode;
  bgColor?: string;
  dotColor?: string;
}

export function DotWave({
  dotGap = 20,
  dotRadiusMax = 3,
  expansionSpeed = 150,
  repeatAnimation = true,
  lightIntensity = 0.5,
  className,
  children,
  bgColor = '#000000',
  dotColor = '#ffffff',
}: DotWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    animationId: 0,
    startTime: 0,
    windowSize: { w: 0, h: 0 },
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const state = stateRef.current;
    state.startTime = Date.now();

    const handleResize = () => {
      state.windowSize = { w: window.innerWidth, h: window.innerHeight };
      canvas.width = state.windowSize.w;
      canvas.height = state.windowSize.h;
    };

    const drawDots = () => {
      // Limpiamos y pintamos el fondo
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const elapsed = Date.now() - state.startTime;
      const expansionRadius = (elapsed / 1000) * expansionSpeed;
      const maxScreenRadius = Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2;

      if (repeatAnimation && expansionRadius > maxScreenRadius + 100) {
        state.startTime = Date.now();
      }

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Dibujamos los puntos
      for (let x = 0; x < canvas.width + dotGap; x += dotGap) {
        for (let y = 0; y < canvas.height + dotGap; y += dotGap) {
          const dx = x - centerX;
          const dy = y - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance <= expansionRadius) {
            const diff = expansionRadius - distance;
            const waveWidth = 100;

            if (diff < waveWidth) {
              const opacity = (1 - diff / waveWidth) * lightIntensity;
              ctx.globalAlpha = opacity;
              ctx.beginPath();
              ctx.fillStyle = dotColor;
              ctx.arc(x, y, dotRadiusMax, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }
    };

    const draw = () => {
      state.animationId = requestAnimationFrame(draw);
      drawDots();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(state.animationId);
    };
  }, [dotGap, dotRadiusMax, expansionSpeed, repeatAnimation, lightIntensity, bgColor, dotColor]);

  return (
  <div className={cn('relative w-full h-full bg-black', className)}>
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
    {children && (
      <div className='relative z-10 w-full h-full flex items-center justify-center'>
        {children}
      </div>
    )}
  </div>
);
}