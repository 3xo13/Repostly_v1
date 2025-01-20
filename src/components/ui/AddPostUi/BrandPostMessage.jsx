import React from 'react'
import Image from 'next/image'

const BrandPostMessage = () => {
    return (
        <div
            className='relative flex items-center justify-center h-full w-full md:w-[30%]'>
            <Image
                src={"/images/Group1597883001.png"}
                width={100}
                height={100}
                alt="brandmessage-addNew-post"
                className="w-auto h-[80%]"/>
            <Image
                src={"/images/add-newpost-vactor.png"}
                width={100}
                height={100}
                alt="brandmessage-addNew-post"
                className="w-auto h-auto absolute bottom-0"/>
        </div>
    )
}

export default BrandPostMessage