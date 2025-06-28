import SectionHeader from "../../wrappers/SectionHeader"
import { WobbleCard } from "./WobbleCard"
import HeatMap from "./HeatMap"
import SectionWrapper from "../../wrappers/SectionWrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGlobeAfrica,
  faRocket,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons"

export default function WhyStandOut() {
  return (
    <SectionWrapper>
      <SectionHeader className="text-center">Why I stand out</SectionHeader>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800">
          <h3 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-slate-100 md:text-xl lg:text-3xl">
            <FontAwesomeIcon aria-hidden icon={faRocket} className="mr-4" />
            Up-to-Date with Evolving Technology
          </h3>
          <p className="mt-4 text-left text-base/6">
            I stay current with the latest trends and advancements in
            technology, continuously enhancing my skills to bring the best
            solutions to the table.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1">
          <h3 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-slate-100 md:text-xl lg:text-3xl">
            <FontAwesomeIcon aria-hidden icon={faUserTie} className="mr-4" />
            User centric
          </h3>
          <p className="mt-4 text-left text-base/6">
            I create intuitive, user-focused solutions by blending technical
            skill with a deep understanding of user behavior.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 sm:col-span-2 lg:col-span-3 bg-blue-900">
          <div className="sm:w-1/2">
            <h3 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-slate-100 md:text-xl lg:text-3xl">
              <FontAwesomeIcon
                aria-hidden
                icon={faGlobeAfrica}
                className="mr-4"
              />
              Flexible with different Time Zone
            </h3>
            <p className="mb-20 mt-6 text-left text-base/6">
              I am adept at accommodating various time zones, ensuring seamless
              collaboration with global teams and clients regardless of the
              hour.
            </p>
          </div>
          <div className="absolute inset-0 z-10">
            <HeatMap />
          </div>
        </WobbleCard>
      </div>
    </SectionWrapper>
  )
}
