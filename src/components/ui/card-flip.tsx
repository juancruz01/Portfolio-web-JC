'use client';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Info, X } from 'lucide-react';
import { cn } from '../../lib/utils';

function CardFlip({
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  children: [React.ReactNode, React.ReactNode];
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [front, back] = React.Children.toArray(children);

  // Medimos la altura real de cada cara para que el contenedor se ajuste
  // a la que esté visible, en vez de heredar siempre la altura del frente
  // (eso hacía que un dorso más largo se desbordara y tapara la card de abajo).
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const [heights, setHeights] = useState<{ front?: number; back?: number }>({});

  useLayoutEffect(() => {
    const frontEl = frontRef.current;
    const backEl = backRef.current;

    const measure = () => {
      setHeights({
        front: frontEl?.offsetHeight,
        back: backEl?.offsetHeight,
      });
    };

    measure();

    const observer = new ResizeObserver(measure);
    if (frontEl) observer.observe(frontEl);
    if (backEl) observer.observe(backEl);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn('relative w-full', className)}
      style={{ perspective: '1000px' }}
      {...props}
    >
      <motion.div
        className='relative w-full'
        initial={false}
        animate={{
          rotateY: isFlipped ? -180 : 0,
          height: (isFlipped ? heights.back : heights.front) ?? 'auto',
        }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          ref={frontRef}
          className='absolute top-0 left-0 w-full'
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
          }}
        >
          <div className='relative w-full'>
            <button
              onClick={() => setIsFlipped(true)}
              className='absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors z-10'
              aria-label='Show info'
              style={{
                opacity: isFlipped ? 0 : 1,
                pointerEvents: isFlipped ? 'none' : 'auto',
                transition: 'opacity 0.3s',
              }}
            >
              <Info className='w-5 h-5 text-muted-foreground' />
            </button>
            {front}
          </div>
        </div>

        <div
          ref={backRef}
          className='absolute top-0 left-0 w-full'
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(-180deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          <div className='relative w-full h-full'>
            <button
              onClick={() => setIsFlipped(false)}
              className='absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors z-10'
              aria-label='Close'
              style={{
                opacity: isFlipped ? 1 : 0,
                pointerEvents: isFlipped ? 'auto' : 'none',
                transition: 'opacity 0.3s',
              }}
            >
              <X className='w-5 h-5 text-muted-foreground' />
            </button>
            {back}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function CardFlipFront({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card'
      className={cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-xs',
        className,
      )}
      {...props}
    />
  );
}

function CardFlipBack({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card'
      className={cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-xs',
        className,
      )}
      {...props}
    />
  );
}

function CardFlipHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-header'
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  );
}

function CardFlipTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-title'
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  );
}

function CardFlipDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-description'
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
}

function CardFlipAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-action'
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  );
}

function CardFlipContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-content'
      className={cn('px-6', className)}
      {...props}
    />
  );
}

function CardFlipFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-footer'
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  );
}

export {
  CardFlip,
  CardFlipFront,
  CardFlipBack,
  CardFlipHeader,
  CardFlipFooter,
  CardFlipTitle,
  CardFlipAction,
  CardFlipDescription,
  CardFlipContent,
};
