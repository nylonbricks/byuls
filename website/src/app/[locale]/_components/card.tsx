'use client';

import { motion } from 'motion/react';
import type { PropsWithChildren } from 'react';

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      className="z-card mt-[150px] flex w-full flex-col gap-6 border border-[rgba(0,0,0,0.05)] bg-white bg-clip-padding p-5 shadow-[0_28px_56px_rgba(0,0,0,0.12)]"
      initial={{ opacity: 0, filter: 'blur(8px)', transform: 'translateY(6px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }}
      transition={{
        delay: 0.04 * 12,
        type: 'spring',
        bounce: 0,
        duration: 0.8 + 0.1 * 8,
      }}
    >
      {children}
    </motion.div>
  );
};
