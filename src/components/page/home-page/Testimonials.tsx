import { TESTIMONIALS } from "@/lib/data"
import { AnimatedTestimonials } from "../../page/home-page/AnimatedTestimonials"
import SectionHeader from "../../wrappers/SectionHeader"
import SectionWrapper from "../../wrappers/SectionWrapper"

const Testimonials = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Testimonials</SectionHeader>
      <AnimatedTestimonials testimonials={TESTIMONIALS} />
    </SectionWrapper>
  )
}

export default Testimonials
