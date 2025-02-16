import React from 'react'
import Table from '@/components/common/Table'
import Link from 'next/link'

const ProductsSection = () => {
    return (
        <div className='col gap-3 pb-10 h-full'>
            <Link href="/New-post" className='self-end'>
                <button
                    className='px-3 py-2 border-2 border-gray-500 rounded-full text-slate-600 hover:bg-slate-200 hover:border-gray-400 font-semibold '>New Product</button>
            </Link>
            <div className='col-span-1 gap-3 pb-10 px-10 overflow-y-scroll h-full py-5 '>
                <Table/>
            </div>
        </div>
    )
}

export default ProductsSection