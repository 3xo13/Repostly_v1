"use client"
import {useCallback, useReducer, useState} from "react";
import Link from "next/link";

import axios from "axios";

import Category from "@/components/common/forms/Category";
import TitlePriceDescriptionReference from "@/components/common/forms/TitleAndPrice";
import ProductDetails from "@/components/common/forms/ProductDetails";
import ProductImages from "@/components/common/forms/ProductImages";
import PostingLocation from "@/components/common/forms/PostingLocation";
import {handleFileUpload} from "@/utils/helpers/functions/handleFileUpload";
import {initialState, reducer} from "@/utils/helpers/reducer/multistepForm/reducer";
import MultistepFormNavigation from "@/components/common/forms/formBtns/multistepFormNavigation";
import SpinnerWithMessage from "@/components/common/SpinnerWithMessage ";
import { useRouter } from "next/navigation";

const MuiltsepForms = () => {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    console.log("🚀 ~ MuiltsepForms ~ currentStep:", currentStep)
    const [errors, setErrors] = useState({});
    const [product, dispatch] = useReducer(reducer, initialState)
    console.log("🚀 ~ MuiltsepForms ~ product:", product)
    const [Loading, setLoading] = useState(false);

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
        setLoading(true)
        try {
            const imagesUrls = await handleFileUpload(product.images)
            const newProduct = {
                ...product,
                images: imagesUrls
            }
            const {data} = await axios.post("/api/post/put", {
                post: newProduct,
                active: false
            })
            if (data.success) {
                router.push("/dashboard")
            } else {
                throw new Error(data.message);
            }

        } catch (error) {
            console.log("🚀 ~ handleSubmit ~ error:", error)
        }
        setLoading(false)
    }

    const handleContinue = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1)
        }
        if (currentStep == 4) {
            handleSubmit()
        }
    }

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1)
        }
    }

    const steps = [
        <Category
            key={0}
            product={product}
            dispatch={dispatch}
            handleForward={handleContinue}
            handleBackward={handleBack} />,
        <TitlePriceDescriptionReference
            key={1}
            product={product}
            dispatch={dispatch}
            updateOption={updateOption}
            handleForward={handleContinue}
            handleBackward={handleBack} />,
        <ProductDetails
            key={2}
            product={product}
            updateOption={updateOption}
            handleForward={handleContinue}
            handleBackward={handleBack} />,
        <ProductImages
            key={3}
            product={product}
            dispatch={dispatch}
            handleForward={handleContinue}
            handleBackward={handleBack} />,
        <PostingLocation
            key={4}
            product={product}
            updateOption={updateOption}
            handleForward={handleContinue}
            handleBackward={handleBack} />
    ];

    if (Loading) {
        return (
            <div className="full flex center">
                <SpinnerWithMessage title={"Creating new post..."} />
            </div>
        )
    }

    return (
        <div
            className="h-screen w-full md:w-[70%] bg-white flex flex-col justify-between">
            {/* Form Section */}
            <div className="flex-grow overflow-y-auto">
                {steps[currentStep]}
            </div>
            
        </div>
    );
};

export default MuiltsepForms;
