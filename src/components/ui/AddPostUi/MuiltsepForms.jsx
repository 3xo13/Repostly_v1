"use client"
import TitlePriceDescriptionReference from "@/components/common/forms/TitleAndPrice";
import ProductDetails from "@/components/common/forms/ProductDetails";
import ProductImages from "@/components/common/forms/ProductImages";
// todo: fix react-leaflet error (window is not defined) import PostingLocation
// from "@/components/common/forms/PostingLocation";
import Link from "next/link";
import {useCallback, useReducer, useState} from "react";

// This is the initial state of the application
const initialState = {
    title: "bougeoir",
    category: "Home & Garden",
    subCategory: "Decoration",
    postType: "offer",
    images: [],
    options: {
        
    }
};

// This is the reducer function, which manages state changes
function reducer(state, action) {
    switch (action.type) {
        case 'title':
            return {
                ...state,
                title: action.payload
            };
        case 'category':
            return {
                ...state,
                category: action.payload
            };
        case 'subCategory':
            return {
                ...state,
                subCategory: action.payload
            };
        case 'images':
            return {
                ...state,
                images: [
                    ...state.images,
                    action.payload
                ]
            };
        case 'updateOption':
            return {
                ...state,
                options: {
                    ...state.options,
                    [action.payload.key]: action.payload.value
                }
            };
        default:
            throw new Error('Unknown action type');
    }
}

const MuiltsepForms = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState({});
    const [product, dispatch] = useReducer(reducer, initialState)
    console.log("🚀 ~ MuiltsepForms ~ product:", product)

    // a second dispatch function that manages the state of options inside the main
    // state (product)
    const updateOption = useCallback((key, value) => {
        dispatch({
            type: 'updateOption',
            payload: {
                key,
                value
            }
        });
    }, [])

    const steps = [
        <TitlePriceDescriptionReference key={0} product={product} dispatch={dispatch} updateOption={updateOption}/>,
        <ProductDetails key={1} product={product} updateOption={updateOption}/>,
        <ProductImages key={2} product={product} dispatch={dispatch}/>,
        // <PostingLocation key={3}/>
    ];
    // Example steps

    return (
        <form
            className="h-screen w-full md:w-[70%] bg-white flex flex-col justify-between">
            {/* Form Section */}
            <div className="flex-grow overflow-y-auto">
                {steps[currentStep]}
            </div>
            {/* Buttons */}
            <div className="flex justify-between px-10 pb-4">
                <Link href={'/dashboard'}>
                    <button
                        className="w-[150px] h-[44px] rounded-md border border-[#D0D5DD99] text-main">
                        Cancel
                    </button>
                </Link>
                <button className="w-[150px] h-[44px] rounded-md bg-[#131525] text-white">
                    Continue
                </button>
            </div>
            {/* Steps Navigation */}
            <div className="w-full flex justify-center items-center gap-4 py-4 ">
                {/* {
                    steps.map((step, index) => (
                        <div
                            key={index}
                            className={`w-[150px] h-[8px] rounded-full ${currentStep === step
                                ? "bg-main"
                                : "bg-gray-300"} `}></div>
                    ))
                } */
                }
            </div>

        </form>
    );
};

export default MuiltsepForms;
