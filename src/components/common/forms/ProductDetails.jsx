import React, {useEffect, useState} from 'react'
import {v4 as uuidv4} from 'uuid';

import {lebonFormOptions} from '@/automation/utils/variables/lebonFormOptions'
import MultistepFormNavigation from './formBtns/multistepFormNavigation';
import {camelCaseToSpaces} from '@/utils/helpers/functions/camelCaseToSpaces';
import Link from 'next/link';
import { SlClose } from 'react-icons/sl';
import PageTitleAndClose from '@/components/ui/AddPostUi/PageTitleAndClose';

const { 
    "Home & Garden": homeAndGardenCategoryOptions,
     generalOptions: { 
        newItemType: newStateItemType, 
        refurbishedCondition 
    }} = lebonFormOptions;

const ProductDetails = ({product, updateOption, handleForward, handleBackward}) => {
    const [errMsg, setErrMsg] = useState("");
    const {title, options: {description, price}} = product;
    const [requiredFields, setRequiredFields] = useState([]);

    useEffect(()=>{
        const currentSubCategoryOptions = homeAndGardenCategoryOptions[product.subCategory];
        for (const [key, value] of Object.entries(currentSubCategoryOptions)) {
            if (value.required) {
                setRequiredFields(prev => [...prev, key])
            }
        }
    },[])

    // todo: the function doesn't check if generalOptions's list is required 
    const handleContinue = () => {
        // check for requierd fields before and alert
        for (let i = 0; i < requiredFields.length; i++) {
            const element = requiredFields[i];
            if (!product.options[element]) {
                setErrMsg(`Please add a ${camelCaseToSpaces(element)}`)
                return;
            }
        }
        handleForward()
    }

    const currentOptionsInputs = () => {
        const currentSubCategoryOptions = homeAndGardenCategoryOptions[product.subCategory];
        const inputList = [];
        for (const [key, value] of Object.entries(currentSubCategoryOptions)) {
            switch (value.type) {
                case "list":
                    const selectElement = <div key={uuidv4()}>
                        <label
                            htmlFor={key}
                            className="w-full lg:w-[20%] text-lg font-medium text-gray-700">{camelCaseToSpaces(key)}
                            <span className='text-red-500'>{
                                    value.required
                                        ? " *"
                                        : ""
                                }</span>
                        </label>
                        <select
                            className="text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                            onChange={e => updateOption(key, e.target.value)}
                            value={product.options[key] || "Select Option"}>
                            <option value="">Select Option</option>
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
                                className="w-full lg:w-[20%] text-lg font-medium text-gray-700">{camelCaseToSpaces(key)}
                                <span className='text-red-500'>{
                                        value.required
                                            ? " *"
                                            : ""
                                    }</span>
                            </label>
                            <select
                                className="text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                                value={product.options[key] || "Select Option"}
                                onChange={e => updateOption(key, e.target.value)}>
                                <option value="">Select Option</option>
                                {
                                    Object
                                        .entries(value.options)
                                        .filter(el => el[0] == product.options[value.dependencyKey])[0][1]
                                        .map(
                                            opt => <option key={uuidv4()} value={opt} className='text-black'>{opt}</option>
                                        )
                                }

                            </select>
                        </div>
                        inputList.push(dependentList)

                    } else {
                        const emptyList = <div key={uuidv4()}>
                            <label
                                htmlFor={key}
                                className="w-full lg:w-[20%] text-lg font-medium text-gray-700">{camelCaseToSpaces(key)}
                                <span className='text-red-500'>{
                                        value.required
                                            ? " *"
                                            : ""
                                    }</span>
                            </label>
                            <select
                                className="text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                                disabled={true}>
                                <option value="">Select Option</option>
                            </select>
                        </div>
                        inputList.push(emptyList)
                    }
                    break;

                default:
                    break;
            }
        }
        if (product.options.state == "New condition") {
            const newItemTypeElement = <div key={uuidv4()}>
                <label
                    htmlFor={"newProductType"}
                    className="w-full lg:w-[20%] text-lg font-medium text-gray-700">
                    {"New product type"}
                    <span className='text-red-500'>{" *"}</span>
                </label>
                <select
                    className="text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                    id='newProductType'
                    onChange={e => updateOption("newProductType", e.target.value)}
                    value={product.options.newProductType || "Select Option"}>
                    <option value="">Select Option</option>
                    {
                        newStateItemType
                            .options
                            .map(
                                opt => <option key={uuidv4()} value={opt} className='text-black'>{opt}</option>

                            )
                    }
                </select>
            </div>
            inputList.push(newItemTypeElement)
        }
        if (product.options.state == "Refurbished") {
            const newItemTypeElement = <div key={uuidv4()}>
                <label
                    htmlFor={"refurbishedItemType"}
                    className="w-full lg:w-[20%] text-lg font-medium text-gray-700">
                    {"Refurbished type"}
                    <span className='text-red-500'>{" *"}</span>
                </label>
                <select
                    className="text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                    id='refurbishedItemType'
                    onChange={e => updateOption("refurbishedItemType", e.target.value)}
                    value={product.options.refurbishedItemType || "Select Option"}>
                    <option value="">Select Option</option>
                    {
                        refurbishedCondition
                            .options
                            .map(
                                opt => <option key={uuidv4()} value={opt} className='text-black'>{opt}</option>

                            )
                    }
                </select>
            </div>
            inputList.push(newItemTypeElement)
        }
        return inputList;
    }

    return (
        <div className='full'>
            <div className="w-full  h-[calc(100%-100px)] overflow-auto">
                <PageTitleAndClose title={"Product details"} />
                <div className="border-t border-[#D0D5DD99] w-full col gap-3 p-8">
                    {currentOptionsInputs()}
                </div>
                <div className='w-full px-10 flex center'>
                    {errMsg && <p className='text-red-500 text-lg'>{errMsg}</p>}
                </div>
            </div>
            <MultistepFormNavigation
                handleContinue={handleContinue}
                handleBack={handleBackward}/>
        </div>
    )
}

export default ProductDetails
