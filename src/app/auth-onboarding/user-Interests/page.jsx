"use client"
import React from 'react'
import Button from '@/components/common/Button'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();
    const handelSubmit = (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);
    const statuts = 200
            const data = Object.fromEntries(formData);
            if(statuts === 200) {
                router.push("/auth-onboarding/select-plan")
              
            }
    
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div className='user-inerset'>
    <div className="content mb-6 flex-col text-center	text=[#666B71] justify-center items-center mt-7">
   <span className='mb-7'>Repostly</span>
   <p>Let’s Know more about you, please tell us your industry</p>
 </div>
 <form onSubmit={handelSubmit}>
    <div className="grid grid-rows-3 justify-center items-center	 grid-flow-col gap-4">
    <div className='card'>01</div>
   <div className='card'>01</div>
   <div className='card'>01</div>
   <div className='card'>01</div>
   <div className='card'>01</div>
   <div className='card'>01</div>
   <div className='card'>01</div>
   <div className='card'>01</div>
    </div>

   <div className='grid justify-center items-center mt-7 mb-4 pb-3'>
 <Button type={"submit"}  title="Continue" />
 </div>
 </form>


</div>
  )
}

export default page