"use client"
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CiLocationOn } from "react-icons/ci";
import "../styles/Input-style.css"
const Step3 = () => {
  return (
    <div className="w-full h-full">
          <h1 className=" mt-2 p-4 text-2xl font-medium text-head border-b border-[#D0D5DD99] w-full">
          Where is your property located?         
          </h1>
          <div className="px-12 w-full h-full mt-4 ">
          <MapContainer
       
        center={[46.6034, 1.8883]} // France's center
        zoom={6}
        
        className="rounded-[11px] w-full  min-h-[330px]"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        />
 
      </MapContainer>
      <div className='mt-5 flex items-center w-full h-[45px] rounded-lg bg-white border border-[#D0D5DD] px-[15px] py-[15px] text-[#131525] shadow-sm '>
      
      <span className="text-[#667085] text-[20px]">
        <CiLocationOn />
      </span>
        <input className="w-full lg:w-[90%] h-full px-[15px] py-[15px] bg-white outline-none border-none" type="text" name ="location" placeholder="location" />
      </div>
          </div>
    </div>
  )
}

export default Step3