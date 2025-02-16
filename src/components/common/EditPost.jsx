"use client"
import {useDahboardContext} from '@/context/DashboardProviedr';
import Image from 'next/image';
import React, {useEffect, useReducer, useState} from 'react'
import {FaLongArrowAltLeft} from 'react-icons/fa';
import {MdOutlineEditNote} from 'react-icons/md';
import Lievpost from "../../../public/images/liev-post.png"
import SimpleInput from './forms/SimpleInput';
import axios from 'axios';
import { useAppContext } from '@/context/ContextProviedr';

const initialState = {
    title: "",
    description: '',
    address: "",
    images: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'title':
        case 'description':
        case 'address':
        case 'images':
            return {
                ...state,
                [action.type]: action.payload
            };
        case 'addImage':
            return {
                ...state,
                images: [
                    ...state.images,
                    action.payload
                ]
            }
        case 'removeImage':
            return {
                ...state,
                images: state
                    .images
                    .filter(
                        el => el == action.payload
                            ? null
                            : el
                    )
            }
        default:
            return state;
    }
};

const EditPost = ({setIsEditMode, currentProduct}) => {
    const {moduleMode, SetModulemode, currentProductId} = useDahboardContext();
		const {userGroupData, setUserGroupData} = useAppContext(false)
    const [newPost, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (Object.entries(currentProduct).length) {
            dispatch({type: "title", payload: currentProduct.data.title})
            dispatch(
                {type: "description", payload: currentProduct.data.options.description}
            )
            dispatch({type: "address", payload: currentProduct.data.options.address})
            dispatch({type: "images", payload: currentProduct.data.images})
        }
    }, [currentProduct])

    const handleEditPost = async () => {
        try {
            const newPostData = {
                    ...currentProduct.data,
                    title: newPost.title,
                    images: newPost.images,
                    options: {
                        ...currentProduct.data.options,
                        description: newPost.description,
                        address: newPost.address
                    }
               
            }

            const {data} = await axios.post("/api/post/edit", {
                post: newPostData,
                active: currentProduct.active,
                postId: currentProduct._id
            })
            if (data.success) {
							setUserGroupData({
								...userGroupData,
								posts: userGroupData.posts.map(post => post._id == currentProductId ? { ...currentProduct, data: newPostData } : post)
							})
                setIsEditMode(false)
            }
        } catch (error) {
            console.log("🚀 ~ handleEditPost ~ error:", error)

        }
    }

    return (
        <div
            className={moduleMode
                ? 'opacity-1 block'
                : 'opacity-0 hidden'}>
            {/* Background Overlay */}
            <div
                className='fixed top-0 left-0 bottom-0 w-[45%] bg-black opacity-60 z-40 '
                onClick={() => {
                    setIsEditMode(false)
                    SetModulemode(false)
                }}></div>

            {/* Modal Content */}
            <div
                className="fixed top-0 right-0 bottom-0 w-[55%] bg-white z-40 max-h-full h-full ">
                <h2
                    className="text-main flex gap-4 items-center font-medium text-xl p-4 h-[10%]">
                    <span onClick={() => setIsEditMode(false)}>
                        <FaLongArrowAltLeft/>
                    </span>
                    Product view
                </h2>
                <div
                    className="flex gap-2 items-start p-3 border-t border-[#D0D5DD66] max-h-1/2 h-[45%] ">

                    <Image
                        src={newPost.images[0] || "/images/repostly-logo.svg"}
                        width={100}
                        height={100}
                        alt="product-image"
                        className='object-contain object-center	rounded-[8px] h-full w-1/2'/>
                    <div className=" lg:w-[50%] rounded-[12px] p-3 px-5">
                        <button
                            className="text-[#131525] text-sm mt-4 w-full h-[48px] rounded-full flex items-center justify-center gap-2 border hover:bg-slate-100"
														onClick={handleEditPost}>
                            <MdOutlineEditNote className='text-xl font-bold'/>
                            Edit post
                        </button>

                    </div>
                </div>
                <div
                    className="border-b border-[#D0D5DD66] p-3 pt-10 h-[45%] col gap-3 overflow-y-auto">
                    <form className='w-full col gap-5'>
                        <SimpleInput
                            id={"title"}
                            label={"Title"}
                            value={newPost.title}
                            setValue={(val) => dispatch({type: "title", payload: val})}/>

                        <SimpleInput
                            id={"description"}
                            label={"Description"}
                            value={newPost.description}
                            setValue={(val) => dispatch({type: "description", payload: val})}/>

                        <SimpleInput
                            id={"address"}
                            label={"Address"}
                            value={newPost.address}
                            setValue={(val) => dispatch({type: "address", payload: val})}/>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default EditPost