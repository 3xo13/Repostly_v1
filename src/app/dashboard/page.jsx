"use client"
import React from 'react'
import Cards from "@/components/ui/dashboardui/cards/Cards"
import ProductsSection from '@/components/ui/dashboardui/ProductsSection'
import ProductsGrid from '@/components/ui/dashboardui/ProductsGrid'
import Modulepopup from '@/components/common/Modulepopup'
import dynamic from 'next/dynamic';

// Dynamically import the MapSection component
const MapSection = dynamic(() => import('@/components/ui/dashboardui/MapSection'), { ssr: false });
const page = () => {
  
  return (
    <div className='h-full '>
     <Cards />
   
        <div className="flex flex-col gap-3 mt-10 lg:gap-3 lg:flex-row min-h-scree">
           <ProductsGrid />
            <MapSection />
        </div>
        <Modulepopup />
        </div>
  )
}

export default page