import React from 'react'
import {v4 as uuidv4} from 'uuid';

import {lebonFormOptions} from '@/automation/utils/variables/lebonFormOptions'

const {"Home & Garden": homeAndGardenCategoryOptions} = lebonFormOptions;

const ProductDetails = ({product, updateOption}) => {

    const currentOptionsInputs = () => {
        const currentSubCategoryOptions = homeAndGardenCategoryOptions[product.subCategory];
        const inputList = [];
        for (const [key, value] of Object.entries(currentSubCategoryOptions)) {
            console.log(`key: ${key}, value: ${value}`);
            switch (value.type) {
                case "list":
                    const selectElement = <div key={uuidv4()}>
                        <label
                            htmlFor={key}
                            className="w-full lg:w-[20%] text-lg font-medium text-gray-700">{key}</label>
                        <select
                            className="text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                            onChange={e => updateOption(key, e.target.value)}
                            value={product.options[key] || "Select Option"}>
                            {
                                value
                                    .options
                                    .map(
                                        opt => <option key={uuidv4()} value={opt} className='text-black'>{opt}</option>
                                    )
                            }
                        </select>
                    </div>
                    inputList.push(selectElement)
                    break;
                case "dependent list":
                    if (product.options[value.dependencyKey]) {
                        const dependentList = <div key={uuidv4()}>
                            <label
                                htmlFor={key}
                                className="w-full lg:w-[20%] text-lg font-medium text-gray-700">{key}</label>
                          <select className="text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500">
                                {
                                    Object
                                        .entries(value.options)
                                        .filter(el => el[0] == product.options[value.dependencyKey])[0][1]
                                        .map(opt => <option key={uuidv4()} value={opt} className='text-black'>{opt}</option>)
                                }

                            </select>
                        </div>
                        inputList.push(dependentList)

                    } else {
                        const emptyList = <div key={uuidv4()}>
                            <label
                                htmlFor={key}
                                className="w-full lg:w-[20%] text-lg font-medium text-gray-700">{key}</label>
                            <select
                                className="text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                                disabled={true}></select>
                        </div>
                        inputList.push(emptyList)
                    }
                    break;

                default:
                    break;
            }
        }
        return inputList;
    }
    // obj
    return (
        <div className="w-full min-h-[30%]">
            <h1 className="mb-3 mt-3 p-3 text-2xl font-medium text-head">
                Provide additional details
            </h1>
            <div className="border-t border-[#D0D5DD99] w-full h-full p-8">
                {currentOptionsInputs()}
            </div>
        </div>
    )
}

export default ProductDetails
