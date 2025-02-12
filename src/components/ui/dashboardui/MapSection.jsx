"use client"
import React, {useState} from "react";
import {MapContainer, TileLayer, GeoJSON} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import geoJsonData from "@/utils/helpers/static/citiesGeoJson.json";

const customIcon = new L.Icon({
    iconUrl: "/images/map-icon.png",
    iconSize: [40, 40]
});

const MapSection = () => {
    const [isMapVisible, setIsMapVisible] = useState(true); // Toggle map visibility
    const [selectedRegion, setSelectedRegion] = useState(null); // State to store selected region
    // const [selectedRegionZip, setSelectedRegionZip] = useState(null);
    const onEachFeature = (feature, layer) => {
        if (feature.properties && feature.properties.nom) {
            layer.bindPopup(
                `${feature.properties.nom}
                ${feature.properties.zip_code}`
            );
        }
        layer.on('click', () => {
            setSelectedRegion(feature.properties);
        });
    };

    return (
        <div
            className="w-full h-full max-h-full overflow-hidden border border-[#E5E7EB] p-6 rounded-[18px] bg-[#FFFFFF] lg:w-2/6">
            <div className="w-full h-1/6">
                <h1 className="text-[#111827] font-medium text-lg">Active posts</h1>
                {/* <p className="text-desc mt-2 mb-3">Lorem description of maps usage</p> */}
            </div>

            {
                isMapVisible && (
                    <MapContainer key="unique-map"
                        // Ensures React mounts a new instance
                        center={[46.6034, 1.8883]}
                        // Center of France
                        zoom={5} style={{ minHeight: "300px", width: "100%" }} className="rounded-[11px] relative -z-0">
                        <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'/>
                        <GeoJSON data={geoJsonData} onEachFeature={onEachFeature}/>
                    </MapContainer>
                )
            }

            {
                selectedRegion && (
                    <div className="mt-4">
                        <h2 className="text-[#111827] font-medium">Selected Region</h2>
                        <p>
                            <strong>Name:</strong>
                            {selectedRegion.nom}</p>
                        <p>
                            <strong>Code:</strong>
                            {selectedRegion.code}</p>
                    </div>
                )
            }
        </div>
    );
};

export default MapSection;

// "use client" import React, { useEffect, useState } from "react"; import {
// MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; import
// "leaflet/dist/leaflet.css"; import L from "leaflet"; const customIcon = new
// L.Icon({     iconUrl: "/images/map-icon.png",     iconSize: [40, 40] });
// const locations = [     {         lat: 43.604,         lng: 1.444,
// name: "Toulouse"     }, {         lat: 48.8566,         lng: 2.3522,
// name: "Paris"     }, {         lat: 45.764,         lng: 4.8357,
// name: "Lyon"     }, {         lat: 43.2965,         lng: 5.3698,
// name: "Marseille"     }, {         lat: 47.2184,         lng: -1.5536,
// name: "Nantes"     }, {         lat: 44.8378,         lng: -0.5792,
// name: "Bordeaux"     }, {         lat: 49.4432,         lng: 1.0993,
// name: "Rouen"     }, {         lat: 51.5074,         lng: -0.1278,
// name: "London"     }, {         lat: 40.7128,         lng: -74.006,
// name: "New York"     }, {         lat: 34.0522,         lng: -118.2437,
// name: "Los Angeles"     }, {         lat: 35.6895,         lng: 139.6917,
// name: "Tokyo"     }, {         lat: 55.7558,         lng: 37.6173,
// name: "Moscow"     }, {         lat: 28.6139,         lng: 77.209,
// name: "New Delhi"     } ]; const MapSection = () => {     const
// [isMapVisible, setIsMapVisible] = useState(true);  Toggle map visibility
// return (         <div             className="w-full border border-[#E5E7EB]
// p-6 rounded-[18px] bg-[#FFFFFF] lg:w-[40%]">             <h1
// className="text-[#111827] font-medium">Active posts map</h1>             <p
// className="text-desc mt-2 mb-3">Lorem description of maps usage</p>
// <MapContainer key="unique-map"                  Ensures React mounts a new
// instance                 center={[46.6034, 1.8883]}                  Center
// of France                 zoom={6} style={{                     minHeight:
// "500px",                     width: "100%"                 }}
// className="rounded-[11px] lg:h-[90%] relative -z-0">
// <TileLayer
// url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
// attribution='&copy; <a
// href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors
// &copy; <a href="https://carto.com/">CARTO</a>' /> {
// locations.map((location, index) => (                         <Marker
// key={index} position={[location.lat, location.lng]} icon={customIcon}>
// <Popup>                                 <div className="w-[150px] h-[150px]">
// <h2>Product</h2>                                     {location.name}
// </div>                             </Popup>                         </Marker>
// ))                 }             </MapContainer>         </div>     ); };
// export default MapSection;
