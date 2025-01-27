import React from 'react'

const MultistepFormNavigation = ({handleContinue, handleBack}) => {
    return (
        <div className="row justify-between items-center px-10 h-[100px]">
            {/* <Link href={'/dashboard'}> */}
                <button
                    className="w-[150px] h-[44px] rounded-md border border-[#D0D5DD99] text-main hover:bg-slate-100"
                    onClick={handleBack}>
                    Back
                </button>
            {/* </Link> */}
            <button
					className="w-[150px] h-[44px] rounded-md bg-[#131525] text-white hover:border-2 border-gray-400"
                onClick={handleContinue}>
                Continue
            </button>
        </div>
    )
}

export default MultistepFormNavigation