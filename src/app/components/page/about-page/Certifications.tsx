import React from 'react'
import SectionHeader from '../../wrappers/SectionHeader'
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