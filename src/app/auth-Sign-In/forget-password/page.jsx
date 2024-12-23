import React from "react";
import Input from "@/components/common/Input";
import { MdOutlineMail } from "react-icons/md";
import Button from "@/components/common/Button";
const page = () => {
  return (
    <div className="create-acount-section h-screen">
      <div className="content">
        <span>Repostly Forget Password</span>
      </div>
      <form className="input-wrapper">
        {/* custome input style */}
        <Input
          Placeholder="Email"
          name="Email"
          type="email"
          icon={<MdOutlineMail />}
        />

        <div className="flex items-center justify-center mt-8">
          <Button type="submit" title="Send" />
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default page;
