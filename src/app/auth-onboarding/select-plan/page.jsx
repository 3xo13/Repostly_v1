"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [Selectedplan , Setselectedplan] = useState("Advanced")
  
    const plans = [
      {
        id: "start",
        name: "Start",
        price: "€19.99",
        description: "MÊME ANNONCE MAX 5 FOIS PAR REGION",
      },
      {
        id: "advanced",
        name: "Advanced",
        price: "€59.90",
        description: "CRÉER NOUVELLE ANNONCE GRÂCE AI",
      },
      {
        id: "pro",
        name: "Pro",
        price: "€89.00",
        description: "CRÉER NOUVELLE ANNONCE GRÂCE AI",
      },
    ];
  return (
    <div className='select-plan'>
    <div className="content mb-6 flex-col text-center	text=[#666B71] justify-center items-center mt-7">
    <span className='mb-7'>Repostly</span>
    <p className='text-desc text-lg	'>Let’s Know more about you, please tell us your industry</p>
  </div>
<div className="flex flex-col items-center py-10 w-full" >
{plans.map((plan) => (
  <label
    key={plan.id}
    className={Selectedplan === plan.name ? "plan active-plan" : "plan"}
  >
    <div className="flex items-center gap-4 ">
      <input
        type="radio"
        name="plan"
        value={plan.name}
        checked={Selectedplan === plan.name}
        onChange={() => Setselectedplan(plan.name)}
        className="radio-custom"
      />
      <div className="flex flex-col	">
      <h3 className="font-medium text-main">{plan.name}</h3>
      <p className="text-sm text-desc  mt-2">{plan.description}</p>

      </div>
    
    </div>
    <p className="text-base	 font-medium	 mt-4 text-main">{plan.price} /mo</p>
   
  </label>
))}
</div>
<div className='wraper-btn flex items-center justify-center gap-6	 w-full'>
<Link href="/auth-onboarding/upload-profile" className='btn1'>skip</Link>
<Link href="/auth-onboarding/upload-profile" className='btn2'>Continu</Link>

</div>
</div>
  )
}

export default page