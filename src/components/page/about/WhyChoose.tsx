import React from 'react'
import { WobbleCard } from "@/components/ui/WobbleCard";
import { World } from '@/components/ui/Globe';
import SectionHeader from '@/components/ui/SectionHeader';
import { GLOBAL_WORLD_CONFIG, SAMPLE_ARCS } from '@/lib/data';

const WhyChoose = () => {
  return (
    <section className="mt-14">
      <SectionHeader className="text-center">Why i am fit</SectionHeader>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="m ">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Up-to-Date with Evolving Technology
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              I stay current with the latest trends and advancements in
              technology, continuously enhancing my skills to bring the best
              solutions to the table.
            </p>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            User centric
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            I create intuitive, user-focused solutions by blending technical
            skill with a deep understanding of user behavior.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex">
            <div className="w-1/2">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Flexible with different Time Zone
              </h2>
              <p className="mt-6 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                I am adept at accommodating various time zones, ensuring
                seamless collaboration with global teams and clients regardless
                of the hour.
              </p>
            </div>
            <div className="w-1/2 relative overflow-hidden flex items-center justify-center  h-[19rem] px-4">
              <div className="absolute w-full h-96 z-10">
                <World data={SAMPLE_ARCS} globeConfig={GLOBAL_WORLD_CONFIG} />
              </div>
            </div>
          </div>
        </WobbleCard>
      </div>
    </section>
  );
}

export default WhyChoose