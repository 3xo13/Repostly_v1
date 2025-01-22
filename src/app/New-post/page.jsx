import React from 'react'
import MuiltsepForms from '@/components/ui/AddPostUi/MuiltsepForms'
import BrandPostMessage from '@/components/ui/AddPostUi/BrandPostMessage'

const NewPost = () => {
    return (
        <div
            className="w-full h-screen bg-[#016B81] flex flex-col md:flex-row items-start gap-5 ">
            <BrandPostMessage/>
            <MuiltsepForms/>
        </div>
    )
}

export default NewPost