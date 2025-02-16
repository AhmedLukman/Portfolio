import { GLOBAL_WORLD_CONFIG, SAMPLE_ARCS } from "@/app/lib/data";
import SectionHeader from "../../wrappers/SectionHeader";
import { WobbleCard } from "./WobbleCard";
import { WorldWithNoSSR } from "./WorldWithNoSSR";

export default function WhyStandOut() {
  return (
    <section className="mt-14">
      <SectionHeader className="text-center">Why I stand out</SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-4">
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-slate-100">
            Up-to-Date with Evolving Technology
          </h2>
          <p className="mt-4 text-left text-base/6 text-slate-200">
            I stay current with the latest trends and advancements in
            technology, continuously enhancing my skills to bring the best
            solutions to the table.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-slate-100">
            User centric
          </h2>
          <p className="mt-4 text-left text-base/6 text-slate-200">
            I create intuitive, user-focused solutions by blending technical
            skill with a deep understanding of user behavior.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 sm:col-span-2 lg:col-span-3 bg-blue-900">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/2">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-slate-100">
                Flexible with different Time Zone
              </h2>
              <p className="mt-6 text-left text-base/6 text-slate-200">
                I am adept at accommodating various time zones, ensuring
                seamless collaboration with global teams and clients regardless
                of the hour.
              </p>
            </div>
            <div className="sm:w-1/2 relative overflow-hidden flex items-center justify-center h-[19rem] px-4">
              <div className="absolute w-full h-96 z-10">
                <WorldWithNoSSR
                  data={SAMPLE_ARCS}
                  globeConfig={GLOBAL_WORLD_CONFIG}
                />
              </div>
            </div>
          </div>
        </WobbleCard>
      </div>
    </section>
  );
}
