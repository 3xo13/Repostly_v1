import React from 'react';

const TitlePriceDescriptionReference = ({product, dispatch, updateOption}) => {
    return (
        <div className="w-full min-h-[30%]">
            <h1 className="mb-3 mt-3 p-3 text-2xl font-medium text-head">Create a new post</h1>
            <div className="border-t border-[#D0D5DD99] w-full h-full p-8">
                {/* Title Field */}
                <div
                    className="mb-6 flex flex-col lg:flex-row items-start lg:items-center gap-5">
                    <label
                        htmlFor="name"
                        className="w-full lg:w-[15%] text-lg font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Title name..."
                        className=" text-main p-3 w-full lg:w-[80%] outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                        value={product.title}
                        onChange={e => dispatch({type: "title", payload: e.target.value})} />
                </div>

                {/* Description Field */}
                <div
                    className="mb-6 flex flex-col lg:flex-row items-start lg:items-center gap-5">
                    <label
                        htmlFor="description"
                        className="w-full lg:w-[15%] text-lg font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Input description here*"
                        className="text-main p-3 min-h-[230px] w-full lg:w-[80%] outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                        onChange={e => updateOption("description", e.target.value )}/>
                </div>
                <div
                    className="mb-6 flex flex-col lg:flex-row items-start lg:items-center gap-5">
                    <label
                        htmlFor="price"
                        className="w-full lg:w-[15%] text-lg font-medium text-gray-700">
                        Selling price
                    </label>

                    <div className="relative w-full lg:w-[80%]">
                        <input
                            type="text"
                            id="price"
                            name="price"
                            placeholder="Input new price"
                            className="text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                            onChange={e => updateOption("price", e.target.value)} />
                        <span
                            className="absolute right-[1px] rounded-md rounded-t-none	 top-1/2 transform -translate-y-1/2 text-gray-400 w-[50px] h-full bg-gray-200 flex items-center justify-center">
                            $
                        </span>
                    </div>
                </div>

                <div
                    className="mb-6 flex flex-col lg:flex-row items-start lg:items-center gap-5">
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
                            onChange={e => updateOption("newPrice", e.target.value)} />
                        <span
                            className="absolute right-[1px] rounded-md rounded-t-none	 top-1/2 transform -translate-y-1/2 text-gray-400 w-[50px] h-full bg-gray-200 flex items-center justify-center">
                            $
                        </span>
                    </div>
                </div>
                <div
                    className="mb-6 flex flex-col lg:flex-row items-start lg:items-center gap-5">
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
                        onChange={e => updateOption("reference", e.target.value)} />
                </div>
            </div>
        </div>
    );
};

export default TitlePriceDescriptionReference;
