import { useEffect, useRef } from 'react';
import { useInView, useAnimation } from 'framer-motion';

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return [ref, controls] as const;
}

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
