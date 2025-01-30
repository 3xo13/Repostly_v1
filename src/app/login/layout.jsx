import BrandMessagePanel from "@/components/ui/authui/BrandMessage";
export default function RootLayout({children}) {
    return (
        <div className='lg:flex bg-main flex-row'>
            <div
                style={{
                    height: "100%"
                }}
                className=' w-full  lg:w-[45%]  lg:w-auto bg-main h-full '>
                <BrandMessagePanel/>
            </div>
            {/* righth section here  */}
            <div
                className='lg:grow bg-white rounded-tl-[22px] rounded-bl-[22px] h-screen'>
                {children}
            </div>

        </div>
    );
}
