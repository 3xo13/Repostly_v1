"use client"
import React from 'react'
import Cards from "@/components/ui/dashboardui/cards/Cards"
import ProductsSection from '@/components/ui/dashboardui/ProductsSection'
import ProductsGrid from '@/components/ui/dashboardui/ProductsGrid'
// import Modulepopup from '@/components/common/Modulepopup'
import dynamic from 'next/dynamic';

// Dynamically import the MapSection component
const MapSection = dynamic(
    () => import ('@/components/ui/dashboardui/MapSection'),
    {ssr: false}
);
const page = () => {

    return (
        <div className='full col gap-5 h-full'>
            <div className='h-2/6 w-full '>
                <Cards/>
            </div>
            <div className="h-4/6 flex flex-col gap-3 lg:flex-row pb-5">
                <ProductsGrid/>
                <MapSection/>
            </div>
            
        </div>
    )
}

export default page