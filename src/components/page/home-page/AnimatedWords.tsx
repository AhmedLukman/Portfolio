import { FlipWords } from '@/components/ui/FlipWords';
import { WEB_QUALITIES } from '@/lib/data';
import React from 'react'

const AnimatedWords = () => {
  return (
    <section className="mt-24">
      <p className="text-slate-400 text-2xl">
        Let&apos;s build <br />
        <FlipWords words={WEB_QUALITIES} />
      </p>
    </section>
  );
}

export default AnimatedWords