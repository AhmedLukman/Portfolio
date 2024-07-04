import { FlipWords } from '@/components/ui/FlipWords';
import { WEB_QUALITIES } from '@/lib/constants';
import React from 'react'

const AnimatedWords = () => {
  return (
    <section className="mt-24">
      <p className=" text-slate-400 text-2xl">Let&apos;s build </p>
      <FlipWords className="text-white text-2xl" words={WEB_QUALITIES} />
    </section>
  );
}

export default AnimatedWords