'use client';

import { motion } from 'motion/react';
import { site } from '~/constants';

export const Hero = () => {
  return (
    <div className="fixed">
      <motion.h1
        className="font-bold text-5xl tracking-[-0.3px] md:text-6xl"
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
        className="mt-3 font-medium text-[rgba(19,21,23,0.56)] text-lg"
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
    </div>
  );
};
