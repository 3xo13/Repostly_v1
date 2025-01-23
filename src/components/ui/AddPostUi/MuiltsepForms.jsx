"use client"
import Category from "@/components/common/forms/Category";
import TitlePriceDescriptionReference from "@/components/common/forms/TitleAndPrice";
import ProductDetails from "@/components/common/forms/ProductDetails";
import ProductImages from "@/components/common/forms/ProductImages";
// todo: fix react-leaflet error (window is not defined) 
import PostingLocation from "@/components/common/forms/PostingLocation";
import Link from "next/link";
import {useCallback, useReducer, useState} from "react";
import { uploadFileFrontEnd } from "@/db/storage/uploadFileFrontEnd";
import axios from "axios";

const handleFileUpload = async (files) => {
    // setLoading(true)
    try {
        const urls = []
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const url = await uploadFileFrontEnd(file, "products")
            urls.push(url)
        }
        return urls
    } catch (error) {
        console.log("🚀 ~ error:", error)
    }
    // setLoading(false)
}

// This is the initial state of the application
const initialState = {
    title: "bougeoir",
    category: "Home & Garden",
    subCategory: "Household appliances",
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
    const [currentStep, setCurrentStep] = useState(0);
    console.log("🚀 ~ MuiltsepForms ~ currentStep:", currentStep)
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

    const handleSubmit = async () => {
        try {
            const imagesUrls = await handleFileUpload(product.images)
            const newProduct = {...product, images: imagesUrls}
            const {data} = await axios.post("/api/post/put", {post: newProduct, active: false})
            if (data.success) {
                alert("post created")
            }else{
                throw new Error(data.message);
            }
            
        } catch (error) {
            console.log("🚀 ~ handleSubmit ~ error:", error)
            
        }
    }

    const steps = [
        <Category key={0} product={product} dispatch={dispatch} />,
        <TitlePriceDescriptionReference key={1} product={product} dispatch={dispatch} updateOption={updateOption}/>,
        <ProductDetails key={2} product={product} updateOption={updateOption}/>,
        <ProductImages key={3} product={product} dispatch={dispatch}/>,
        <PostingLocation key={4} product={product} updateOption={updateOption} />
    ];
    
    const handleContinue = (e) => {
        e.preventDefault()
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1)
        }
        if (currentStep == 4) {
            handleSubmit()
        }
    }

    return (
        <div
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
                <button className="w-[150px] h-[44px] rounded-md bg-[#131525] text-white" onClick={handleContinue}>
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

        </div>
    );
};

export default MuiltsepForms;
