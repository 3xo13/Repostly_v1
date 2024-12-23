import React from 'react'

const Step4 = () => {
  return (
    <div className="w-full min-h-[30%]">
      <h1 className="mb-3 mt-3 p-3 text-2xl font-medium text-head">
        Provide additional details
      </h1>
      <div className="border-t border-[#D0D5DD99] w-full h-full p-8">
        {/* Title Field */}
        <div className="mb-6 flex flex-col lg:flex-row items-start lg:items-center gap-5">
          <label
            htmlFor="name"
            className="w-full lg:w-[20%] text-lg font-medium text-gray-700"
          >
            Product type
          </label>
       <select className="text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500">
            <option>
            Select type
            </option>
            <option>
            Select type
            </option>
            <option>
            Select type
            </option>
            <option>
            Select type
            </option>
       </select>
        </div>
        <div className="mb-6 flex flex-col lg:flex-row items-start lg:items-center gap-5">
          <label
            htmlFor="name"
            className="w-full lg:w-[20%] text-lg font-medium text-gray-700"
          >
            Duration of parts

          </label>
       <select className="text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500">
            <option>
            select duration
            </option>
            <option>
            Select type
            </option>
            <option>
            Select type
            </option>
            <option>
            Select type
            </option>
       </select>
        </div>
        <div className="mb-6 flex flex-col lg:flex-row items-start lg:items-center gap-5">
          <label
            htmlFor="name"
            className="w-full lg:w-[20%] text-lg font-medium text-gray-700"
          >
            Product type
          </label>
       <select className="text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500">
            <option>
            Select type
            </option>
            <option>
            Select type
            </option>
            <option>
            Select type
            </option>
            <option>
            Select type
            </option>
       </select>
        </div>
        <div className="mb-6 flex flex-col lg:flex-row items-start lg:items-center gap-5">
          <label
            htmlFor="name"
            className="w-full lg:w-[20%] text-lg font-medium text-gray-700"
          >
            Product type
          </label>
       <select className="text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500">
            <option>
            Select type
            </option>
            <option>
            Select type
            </option>
            <option>
            Select type
            </option>
            <option>
            Select type
            </option>
       </select>
        </div>
        <div className="mb-6 flex flex-col lg:flex-row items-start lg:items-center gap-5">
            <label
                htmlFor="name"
                className="w-full lg:w-[20%] text-lg font-medium text-gray-700"
            >
               Product
            </label>
            <select className="text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500">
                    <option>
                    Select product type
                    
                    </option>
                    <option>
                    Select type
                    </option>
                    <option>
                    Select type
                    </option>
                    <option>
                    Select type
                    </option>
            </select>
        </div>
        {/* Description Field */}
        <div className="mb-6 flex flex-col lg:flex-row items-start lg:items-center gap-5">
          <label
            htmlFor="description"
            className="w-full lg:w-[20%] text-lg font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Input description here*"
            className="text-main p-3 min-h-[230px] w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
          ></textarea>
        </div>
      
      
      </div>
    </div>
  )
}

export default Step4