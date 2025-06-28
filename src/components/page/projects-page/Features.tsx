import ItemWrapper from "@/components/wrappers/ItemWrapper"
import SectionHeader from "@/components/wrappers/SectionHeader"
import { Project } from "@/lib/types"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BorderContainer } from "./BorderContainer"

const Features = ({ project: { features } }: { project: Project }) => {
  return (
    <section className="mt-20">
      <SectionHeader className="text-center">Features</SectionHeader>
      <ul className="mt-10 grid grid-cols-1 gap-5 text-slate-300 md:grid-cols-2">
        {features.map((feature, index) => (
          <ItemWrapper key={index} index={index}>
            <BorderContainer
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.5rem"
              className="rounded-[calc(1.5rem* 0.96)] min-h-20 flex-1 border-slate-800 bg-gradient-to-r from-slate-800 via-purple-900/50 to-slate-800"
            >
              <div className="flex w-full items-center gap-3 p-5">
                <FontAwesomeIcon size="xl" icon={faCircleCheck} />
                <p className="text-white">{feature}</p>
              </div>
            </BorderContainer>
          </ItemWrapper>
        ))}
      </ul>
    </section>
  )
}

export default Features
