import Kelvin from "public/assets/images/testimonials/kelvin.jpg"
import { AnimatedTestimonials } from "../../page/home-page/AnimatedTestimonials"
import SectionHeader from "../../wrappers/SectionHeader"
import SectionWrapper from "../../wrappers/SectionWrapper"

const TESTIMONIALS = [
  {
    name: "Kelvin Ndambuki",
    designation: "ML Engineer at Jacaranda Health",
    quote:
      "From the very beginning, Ahmed stood out for his exceptional curiosity, discipline, and deep understanding of programming and algorithms. His specialization in full-stack software development has been nothing short of impressive — his current work reflects the same dedication, clarity, and problem-solving mindset that made him exceptional from the start.",
    src: Kelvin,
  },
]

const Testimonials = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Testimonials</SectionHeader>
      <AnimatedTestimonials testimonials={TESTIMONIALS} />
    </SectionWrapper>
  )
}

export default Testimonials
