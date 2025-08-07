'use client';

import { easeInOut, motion, useScroll, useTransform } from 'motion/react';
import { site } from '~/constants';

export const Hero = () => {
  const { scrollY } = useScroll();
  const backgroundScale = useTransform(scrollY, [0, 200], [1, 0.95], { ease: easeInOut });

  return (
    <motion.div className="fixed" style={{ scale: backgroundScale }}>
      <motion.h1
        className="font-bold text-5xl text-neutral-900/80 tracking-[-0.3px] md:text-6xl"
        initial={{ opacity: 0, filter: 'blur(8px)', transform: 'translateY(6px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }}
        transition={{
          delay: 0.04,
          type: 'spring',
          bounce: 0,
          duration: 0.8,
        }}
      >
        {site.title}
      </motion.h1>
      <motion.p
        className="mt-4 font-medium text-lg text-neutral-500/80"
        initial={{ opacity: 0, filter: 'blur(8px)', transform: 'translateY(6px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }}
        transition={{
          delay: 0.04 * 6,
          type: 'spring',
          bounce: 0,
          duration: 0.8 + 0.1 * 4,
        }}
      >
        {site.description}
      </motion.p>
    </motion.div>
  );
};
