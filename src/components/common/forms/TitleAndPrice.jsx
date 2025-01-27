import React, { useState } from 'react';
import MultistepFormNavigation from './formBtns/multistepFormNavigation';
import PageTitleAndClose from '@/components/ui/AddPostUi/PageTitleAndClose';

const TitlePriceDescriptionReference = (
    {product, dispatch, updateOption, handleForward, handleBackward}
) => {
    const [errMsg, setErrMsg] = useState("");
    const {title, options: {description, price}} = product;
    const handleContinue = () => {
        if (!title) {
            setErrMsg("Please add a title")
            return;
        }
        if (!description) {
            setErrMsg("Please add a description")
            return;
        }
        if (!price) {
            setErrMsg("Please add a price")
            return;
        }
        if (description.trim().length < 10) {
            console.log("🚀 ~ handleContinue ~ description.trim().length:", description.trim().length)
            setErrMsg("The description should at least contain 10 characters")
            return;
        }
        handleForward()
    }

    return (
        <div className='full'>
            <div className="w-full h-[calc(100%-100px)] overflow-y-auto">
                <PageTitleAndClose title={"Create a new post"} />
                <div className="border-t border-[#D0D5DD99] w-full h-full p-8">
                    {/* Title Field */}
                    <div
                        className="mb-6 flex flex-col lg:flex-row items-start gap-5">
                        <label
                            htmlFor="name"
                            className="w-full lg:w-[15%] text-lg font-medium text-gray-700">
                            Title
                            <span className='text-red-500'>{" *"}</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Title name..."
                            className=" text-main p-3 w-full lg:w-[80%] outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                            value={product.title}
                            onChange={e => {
                                setErrMsg("")
                                dispatch({type: "title", payload: e.target.value})}
                                }/>
                    </div>

                    {/* Description Field */}
                    <div
                        className="mb-6 flex flex-col lg:flex-row items-start gap-5">
                        <label
                            htmlFor="description"
                            className="w-full lg:w-[15%] text-lg font-medium text-gray-700">
                            Description
                            <span className='text-red-500'>{" *"}</span>
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Input description here*"
                            className="text-main p-3 min-h-[230px] w-full lg:w-[80%] outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                            onChange={e => {
                                setErrMsg("")
                                updateOption("description", e.target.value)}}/>
                    </div>
                    <div
                        className="mb-6 flex flex-col lg:flex-row items-start gap-5">
                        <label
                            htmlFor="price"
                            className="w-full w-fit text-lg font-medium text-gray-700">
                            Selling price
                            <span className='text-red-500'>{" *"}</span>
                        </label>

                        <div className="relative w-full lg:w-[80%]">
                            <input
                                type="text"
                                id="price"
                                name="price"
                                placeholder="Input new price"
                                className="text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                                onChange={e => {
                                    setErrMsg("")
                                    updateOption("price", e.target.value)}}/>
                            <span
                                className="absolute right-[1px] rounded-md rounded-t-none	 top-1/2 transform -translate-y-1/2 text-gray-400 w-[50px] h-full bg-gray-200 flex items-center justify-center">
                                $
                            </span>
                        </div>
                    </div>

                    <div
                        className="mb-6 flex flex-col lg:flex-row items-start gap-5">
                        <label
                            htmlFor="newPrice"
                            className="w-full lg:w-[15%] text-lg font-medium text-gray-700">
                            New price
                        </label>

                        <div className="relative w-full lg:w-[80%]">
                            <input
                                type="text"
                                id="newPrice"
                                name="newPrice"
                                placeholder="Input new price"
                                className="text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                                onChange={e => {
                                    setErrMsg("")
                                    updateOption("newPrice", e.target.value)}}/>
                            <span
                                className="absolute right-[1px] rounded-md rounded-t-none	 top-1/2 transform -translate-y-1/2 text-gray-400 w-[50px] h-full bg-gray-200 flex items-center justify-center">
                                $
                            </span>
                        </div>
                    </div>
                    <div
                        className="mb-6 flex flex-col lg:flex-row items-start gap-5">
                        <label
                            htmlFor="name"
                            className="w-full lg:w-[15%] text-lg font-medium text-gray-700">
                            Reference
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Title name..."
                            className=" text-main p-3 w-full lg:w-[80%] outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                            onChange={e => {
                                setErrMsg("")
                                updateOption("reference", e.target.value)}}/>
                    </div>
                    <div className='w-full px-10 flex center'>
                        {errMsg && <p className='text-red-500 text-lg'>{errMsg}</p>}
                    </div>
                </div>
            </div>
            <MultistepFormNavigation
                handleContinue={handleContinue}
                handleBack={handleBackward}/>
        </div>
    );
};

export default TitlePriceDescriptionReference;
