import { AnimatedTooltip } from '@/components/ui/AnimatedTooltip';
import SectionHeader from '@/components/ui/SectionHeader';
import { TECH_AND_TOOLS } from '@/lib/data';
import React from 'react'

const TechAndTools = () => {
  return (
    <section className="mt-24 space-y-8">
      <SectionHeader>
        Technologies & Tools
      </SectionHeader>
      <AnimatedTooltip items={TECH_AND_TOOLS} />
    </section>
  );
}

export default TechAndTools