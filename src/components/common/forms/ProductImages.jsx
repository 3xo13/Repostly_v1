"use client"
import React, {useEffect, useState} from 'react'
import { SlCloudUpload, SlClose } from "react-icons/sl";
import Image from "next/image"
import axios from 'axios';
import {uploadFileFrontEnd} from '@/db/storage/uploadFileFrontEnd';
import MultistepFormNavigation from './formBtns/multistepFormNavigation';
import PageTitleAndClose from '@/components/ui/AddPostUi/PageTitleAndClose';

const ProductImages = ({ product, dispatch, handleForward, handleBackward }) => {
    const [images, setImages] = useState({files: [], views: []})

    const [loading, setLoading] = useState(false)

    const handelFiles = (e) => {
        const files = Array.from(e.target.files)
        const convertFiles = files.map((item) => URL.createObjectURL(item))
        setImages({
            files: [
                ...images.files,
                ...files
            ],
            views: [
                ...images.views,
                ...convertFiles
            ]
        })
        files.forEach(file => dispatch({type: "images", payload: file}))
        // handleFileUpload(files)
    }

    // const handleFileUpload = async (files) => {
    //     setLoading(true)
    //     try {
    //         for (let i = 0; i < files.length; i++) {
    //             const file = files[i];
    //             const url = await uploadFileFrontEnd(file, "products")
    //             console.log("🚀 ~ handleFileUpload ~ url:", url)
    //             dispatch({type: "images", payload: url})
    //         }
    //     } catch (error) {
    //         console.log("🚀 ~ error:", error)
    //     }
    //     setLoading(false)
    // }

    // useEffect(()=>{},[])

    return (
        <div className='full overflow-hidden'>
        <div className="w-full h-[calc(100%-100px)] ">
                <PageTitleAndClose title={"Upload product photo"} />
            <div
                className="  w-full h-[80%] flex items-center justify-center border-t border-[#D0D5DD99] ">
                <div
                    className="col center  min-h-[350] rounded-[12px] bg-[#F1F1F7] border-dashed border-[#D0D5DD] ">
                    <label
                        htmlFor="user-image"
                        className='user-image text-center items-center justify-center'>
                        {
                            images.views.length
                                ? images
                                    .views
                                    .map((item) => {
                                        return <Image key={item} width={100} height={100} src={item} alt="image-upload"/>
                                    })
                                : <SlCloudUpload className='text-[#666B71] text-6xl text-center cursor-pointer'/>
                        }

                    </label>
                    <input
                        type="file"
                        id='user-image'
                        hidden="hidden"
                        onChange={handelFiles}
                        accept="image/*"
                        multiple={true}/>

                    <p className='text-main w-[70%] mt-3 text-center'>
                        Drag and drop image or click here to import from your computer
                    </p>
                </div>

            </div>
            <p className='text-desc flex items-center justify-center w-full'>
                Please upload a clear photo of the product, Image size should not be more than
                1mb..
            </p>
        </div>
            <MultistepFormNavigation
                handleContinue={handleForward}
                handleBack={handleBackward} />
                </div>
    )
}

export default ProductImages