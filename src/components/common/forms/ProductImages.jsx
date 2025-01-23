"use client"
import React, {useEffect, useState} from 'react'
import {SlCloudUpload} from "react-icons/sl";
import Image from "next/image"
import axios from 'axios';
import {uploadFileFrontEnd} from '@/db/storage/uploadFileFrontEnd';

const ProductImages = ({product, dispatch}) => {
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
        <div className="w-full h-full ">
            <h1 className=" mt-2 p-3 text-2xl font-medium text-head">
                Upload product photo
            </h1>
            <div
                className="  w-full h-full flex items-center justify-center border-t border-[#D0D5DD99]">
                <div
                    className="col center  min-h-[350] lg:min-w-[600px] lg:min-h-[400px] rounded-[12px] bg-[#F1F1F7] border-dashed border-[#D0D5DD] ">
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

                    <p className='text-main w-[70%] lg:w-[50%] mt-3 text-center'>
                        Drag and drop image or click here to import from your computer
                    </p>
                </div>

            </div>
            <p className='text-desc  mt-[-10px] flex items-center justify-center w-full'>
                Please upload a clear photo of the product, Image size should not be more than
                1mb..
            </p>
        </div>
    )
}

export default ProductImages