"use client"
import SpinnerWithMessage from '@/components/common/SpinnerWithMessage ';
import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { plans } from '@/utils/helpers/static/subscriptionPlans';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const Plan = (plan, Selectedplan, Setselectedplan) => {
  return (
    <label
      key={plan.id}
      className={Selectedplan === plan.name
        ? "plan active-plan"
        : "plan"}>
      <div className="flex items-center gap-4 ">
        <input
          type="radio"
          name="plan"
          value={plan.name}
          checked={Selectedplan === plan.name}
          onChange={() => Setselectedplan(plan.name)}
          className="radio-custom" />
        <div className="flex flex-col	">
          <h3 className="font-medium text-main">{plan.name}</h3>
          <p className="text-sm text-desc  mt-2">{plan.description}</p>

        </div>

      </div>
      <p className="text-base	 font-medium	 mt-4 text-main">{plan.price}
        /mo</p>

    </label>
  )
}

const page = () => {
  const router = useRouter()
  const [Selectedplan, Setselectedplan] = useState("Advanced")
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.post('/api/auth/user/plan/put', { plan: "free" })
        if (data.success) {
          router.push("/dashboard")
        } else {
          setErrMsg(data.message)
          router.refresh()
        }
      } catch (error) {
        console.log("🚀 ~ error:", error)
        setErrMsg(error.message)
      }
    })()
  }, [])

  const planComponents = plans.map(
    (plan, index) => <Plan
      key={index}
      plan={plan}
      Selectedplan={Selectedplan}
      Setselectedplan={Setselectedplan} />
  )


  return (
    <div className='select-plan max-h-[90dvh]'>

      <div className='w-full h-2/4 col items-center justify-end px-5 gap-5'>
        <Image
          src={"/images/repostly-logo.svg"}
          alt="Leboncion"
          width={100}
          height={100} />

        <p className='text-desc text-lg	text-center lg:max-w-[80%]'>Repostly is in
          testing fase, a basic plan is automatically being selected for you</p>
      </div>

      <div className='flex center h-1/4'>
        <SpinnerWithMessage title={""} />
      </div>
      {/* <div className="flex flex-col items-center py-10 w-full">
                {planComponents}
            </div> */}
      <div
        className='wraper-btn flex items-center justify-center gap-6	 w-full h-1/4 '>
        {errMsg && <p className='text-red-500 text-xl'>{errMsg}</p>}
        {/* <Link href="/register/upload-profile" className='btn1'>skip</Link>
                <Link href="/register/upload-profile" className='btn2'>Continu</Link> */}

      </div>
    </div>
  )
}

export default page