import { AnimatedTooltip } from '@/components/ui/AnimatedTooltip';
import { TECH_STACK } from '@/lib/constants';
import React from 'react'

const TechAndTools = () => {
  return (
    <section className="mt-20 space-y-6">
      <h2 className=" text-xl text-slate-200 font-bold">
        Technologies and Tools
      </h2>
      <AnimatedTooltip items={TECH_STACK} />
    </section>
  );
}

export default TechAndTools