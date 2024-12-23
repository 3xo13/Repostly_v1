import BrandMessagePanel from "@/components/ui/authui/BrandMessage";
export default function RootLayout({ children }) {
  return (
    <div className='lg:flex  bg-main flex-row  vh-100'>
         <div style={{width:"45%" , height:"100%"}} className=' w-full lg:w-auto bg-main h-full '>
        <BrandMessagePanel />
        </div>
         {/* righth section here  */}
        <div className='lg:grow  bg-white  rounded-tl-[22px] rounded-bl-[22px] h-full'  style={{ height: '100%', overflow: 'auto' }}>
        {children}
       
       
    </div>
       
      
    </div>
  );
}
