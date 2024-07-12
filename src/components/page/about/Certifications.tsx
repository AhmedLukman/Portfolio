import SectionHeader from '@/components/ui/SectionHeader'
import React from 'react'
import CertificationsList from './CertificationsList'

const Certifications = () => {
  return (
    <section className='mt-14'>
        <SectionHeader className='text-center'>Certifications &amp; Achievements</SectionHeader>
        <CertificationsList />
    </section>
  )
}

export default Certifications