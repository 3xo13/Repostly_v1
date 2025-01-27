import React from 'react'
import Calendar from '@/components/ui/dashboardui/Calendar'
import Image from 'next/image'
const page = () => {
  return(
    <div className='full col gap-10 center min-h-[calc(100dvh-200px)]'>
      <Image src={"/images/repostly-logo.svg"} width={100} height={100} alt='repostly logo' />
      <p className='text-slate-800 text-3xl font-bold'>Coming soon...</p>
    </div>
  )
  return (
    <div className='mt-20 p-5 shadow-custom text-main bg-[#FFFFFF] border border-[#E5E7EB] rounded-[10px]'>
      <Calendar />
    </div>
  )
}

export default page