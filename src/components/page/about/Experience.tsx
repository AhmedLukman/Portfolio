import SectionHeader from '@/components/ui/SectionHeader'
import React from 'react'
import ExperienceList from './ExperienceList'

const Experience = () => {
  return (
    <section className='mt-14'>
      <SectionHeader className='text-center'>Experience</SectionHeader>
      <ExperienceList />
    </section>
  )
}

export default Experience