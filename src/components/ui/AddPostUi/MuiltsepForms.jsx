"use client"
import Step1 from "@/components/common/forms/Step1";
import Step2 from "@/components/common/forms/Step2";
import Step3 from "@/components/common/forms/Step3";
import Step4 from "@/components/common/forms/Step4";
import { useState } from "react";
const MuiltsepForms = () => {
  const steps = [1, 2, 3, 4]; // Example steps
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    location: "",
    sellingPrice: "",
    newPrice: "",
    ProductType:"",
    ProductDuration:"",


  })
  return (
    <form className="h-screen w-full md:w-[70%] bg-white flex flex-col justify-between">
      {/* Form Section */}
      <div className="flex-grow overflow-y-auto">
        <Step1 />
      </div>
      {/* Buttons */}
      <div className="flex justify-between px-10 pb-4">
        <button className="w-[150px] h-[44px] rounded-md border border-[#D0D5DD99] text-main">
          Cancel
        </button>
        <button className="w-[150px] h-[44px] rounded-md bg-[#131525] text-white">
          Continue
        </button>
      </div>
      {/* Steps Navigation */}
      <div className="w-full flex justify-center items-center gap-4 py-4 ">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`w-[150px] h-[8px] rounded-full ${currentStep === step ? "bg-main" :"bg-gray-300"} `}
          ></div>
        ))}
      </div>


    </form>
  );
};

export default MuiltsepForms;
