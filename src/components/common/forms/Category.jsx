import React, {useState} from 'react'
import {lebonCategories} from '@/automation/utils/variables/lebonCategories'
const {"Home & Garden": homeAndGarden} = lebonCategories;
import {v4 as uuidv4} from 'uuid';

const Category = ({product, dispatch}) => {
	
    const handleOptionChange = (e) => {
			dispatch({ type: "subCategory", payload: e.target.value})
    };

    return (
        <div className="w-full h-full col ">
            <h1 className="p-3 text-2xl font-medium text-head">
                Select the category
            </h1>
            <div
                className='w-full col pt-10 border-t-2 border-gray-200 text-gray-700 font-medium'>
                <div className='col gap-2 px-10 '>
                    <label
                        htmlFor="category"
                        className="w-full lg:w-[15%] text-lg font-medium text-gray-700">Cateory</label>
                    <input
                        type="text"
                        name="category"
                        id="category"
                        defaultValue="Home & Garden"
                        className=" text-main p-3 w-full lg:w-[80%] outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                        disabled={true}/>
                </div>
                <div className='p-10'>
						<form className='col gap-3'>
                        <label className="w-full lg:w-[15%] text-lg font-medium text-gray-700">Subcategory</label>
												<div>
                        {
                            homeAndGarden
                                .subCategories
                                .map((option, index) => (
                                    <div key={uuidv4()} className='row gap-2'>
                                        <input
                                            type="radio"
                                            id={option.title}
                                            name="options"
                                            value={option.title}
																					checked={product.subCategory === option.title}
                                            onChange={handleOptionChange}/>
                                        <label htmlFor={option.title}>{option.title}</label>
                                    </div>
                                ))
                        }
												</div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Category