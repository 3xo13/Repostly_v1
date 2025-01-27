"use client"
import React, { useState } from 'react'
// todo: fix react-leaflet error (window is not defined)
// import {MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {CiLocationOn} from "react-icons/ci";
import "../styles/Input-style.css"
import MultistepFormNavigation from './formBtns/multistepFormNavigation';
import PageTitleAndClose from '@/components/ui/AddPostUi/PageTitleAndClose';

const PostingLocation = ({ product, updateOption, handleForward, handleBackward }) => {
    const [errMsg, setErrMsg] = useState("");
    const handleContinue = () => {
        if (!product.options.address) {
            setErrMsg("Please add a posting location")
            return;
        }
        handleForward()
    }
    return (
        <div className='full overflow-hidden'>
            <div className="w-full h-[calc(100%-100px)]">
            <PageTitleAndClose title={"Please add the product's posting location"} />
            <div className="px-12 w-full h-full mt-4 ">
                {/* <MapContainer center={[46.6034, 1.8883]}
                    // France's center
                    zoom={6} className="rounded-[11px] w-full  min-h-[330px]">
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'/>

                </MapContainer> */}
                <div
                    className='mt-5 flex items-center w-full h-[45px] rounded-lg bg-white border border-[#D0D5DD] px-[15px] py-[15px] text-[#131525] shadow-sm '>

                    <span className="text-[#667085] text-[20px]">
                        <CiLocationOn/>
                    </span>
                    <input
                        className="w-full lg:w-[90%] h-full px-[15px] py-[15px] bg-white outline-none border-none"
                        type="text"
                        name="location"
                        placeholder="location"
                        onChange={e => updateOption("address", e.target.value)}/>
                </div>
                <div className='w-full p-10 flex center'>
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

export default PostingLocation