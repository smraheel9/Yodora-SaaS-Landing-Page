import React from 'react'
import dashboardImage from "../../assets/dashboard.webp"

export default function Dashboard() {
  return (
    <section className='relative'>
      <div className='absolute bottom-0 bg-primary500 w-full h-1/2 -z-10' />
      <div className="mx-auto max-w-[90rem] px-4 py-0 sm:px-16 sm:py-16 md:px-24 grid justify-items-center">
        <img src={dashboardImage} alt="Dashboard Image" className='block w-full'/>
      </div>
    </section>
  )
}
