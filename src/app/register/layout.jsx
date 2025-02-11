import BrandMessagePanel from "@/components/ui/authui/BrandMessage";
import Steps from "@/components/common/Steps";
import { Suspense } from "react";
import SpinnerWithMessage from "@/components/common/SpinnerWithMessage ";
export default function RootLayout({ children }) {
    const steps = [
        {
            label: "create-acount",
            path: "/register/"
        }, {
            label: "Select Plan",
            path: "/register/select-plan"
        }, {
            label: "Upload Profile",
            path: "/register/upload-profile"
        }, {
            label: "User Interests",
            path: "/register/user-interests"
        }, {
            label: "Verify OTP",
            path: "/register/verify-otp"
        }
    ];

    return (
        <div className='lg:flex  bg-main flex-row  vh-100'>
            <div
                style={{
                    height: "100%"
                }}
                className=' w-full  lg:w-[45%] bg-main h-full '>
                <BrandMessagePanel />
            </div>
            {/* right section here  */}
            <Suspense fallback={<SpinnerWithMessage title={""} />}>
                <div
                    className='lg:grow  bg-white  rounded-tl-[22px] rounded-bl-[22px] h-full'
                    style={{
                        height: '100%',
                        overflow: 'auto'
                    }}>
                    {children}
                    {/* steps section here  */}
                    <Steps steps={steps} />
                </div>
            </Suspense>
        </div>
    );
}
