import React, {useState} from 'react'
import {lebonCategories} from '@/automation/utils/variables/lebonCategories'
const {"Home & Garden": homeAndGarden} = lebonCategories;
import {v4 as uuidv4} from 'uuid';
import MultistepFormNavigation from './formBtns/multistepFormNavigation';
import Link from 'next/link';
import { SlClose } from "react-icons/sl";
import PageTitleAndClose from '@/components/ui/AddPostUi/PageTitleAndClose';

const Category = ({product, dispatch, handleForward, handleBackward}) => {
    const [errMsg, setErrMsg] = useState("");
    const handleOptionChange = (e) => {
        setErrMsg("")
        dispatch({type: "subCategory", payload: e.target.value})
    };

    const handleContinue = (e) => {
        if (!product.subCategory) {
            setErrMsg("Please select a subcategory")
            return;
        }
        handleForward()
    }

    return (
        <div>
            < div className="w-full h-[calc(100%-100px)] col ">
                <PageTitleAndClose title={"Select the category"} />
                <div
                    className='w-full col pt-10 border-t-2 border-gray-200 text-gray-700 font-medium'>
                    <div className='col gap-2 px-10 '>
                        <label
                            htmlFor="category"
                            className="w-full lg:w-[15%] text-xl font-medium text-gray-700">Cateory</label>
                        <input
                            type="text"
                            name="category"
                            id="category"
                            defaultValue="Home & Garden"
                            className=" text-main p-2 w-full lg:w-[80%] outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 text-lg"
                            disabled={true}/>
                    </div>
                    <div className='p-10'>
                        <form className='col gap-3'>
                            <label className="w-full lg:w-[15%] text-xl font-medium text-gray-700">Subcategory</label>
                            <div className='col gap-2'>
                                {
                                    homeAndGarden
                                        .subCategories
                                        .map((option, index) => (
                                            <div key={uuidv4()} className='row gap-3 items-center'>
                                                <input
                                                    className='accent-[#016b81] w-5 h-5'
                                                    type="radio"
                                                    id={option.title}
                                                    name="options"
                                                    value={option.title}
                                                    checked={product.subCategory === option.title}
                                                    onChange={handleOptionChange}/>
                                                <label htmlFor={option.title} className='text-lg'>
                                                    {option.title}
                                                </label>
                                            </div>
                                        ))
                                }
                            </div>
                        </form>
                    </div>
                    <div className='w-full px-10'>
                        {errMsg && <p className='text-red-500 text-lg'>{errMsg}</p>}
                    </div>
                </div>
            </div>

            <MultistepFormNavigation
                handleContinue={handleContinue}
                handleBack={handleBackward}/>

        </div>
    )
}

export default Category