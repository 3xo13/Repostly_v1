import toast from "react-hot-toast";
const Createuser = async (setLoading , setVerifying , signUp , email , password , termsAccepted , username) => {
   // vaildions
    if(!email) {
        return toast.error("Please enter your email")
      }
      if(!password) {
        return toast.error("Please enter your  password ")
      }
      if(!username) {
        return toast.error("Please enter your  username ")
      }
      if(!termsAccepted){
        return toast.error("Please Accept the Terms")
      }
      // setLoading spiner
      setLoading(true);
      try {
        // Step 1: Create the sign-up
        const signUpResponse = await signUp.create({
          emailAddress: email,
          password:password,
        });
  
        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });
        // direct to verify code commponent
        setVerifying(true);
      } catch (error) {
        console.log("🚀 ~ Createuser ~ error:", error)
        // Check for specific Clerk error codes
        if (error.errors) {
          console.log("🚀 ~ Createuser ~ error.errors:", error.errors)
          const clerkError = error.errors[0]?.message || "Something went wrong.";
          toast.error(clerkError);
        } else {
          toast.error("An error occurred during login. Please try again.");
        }
      } finally {
        setLoading(false);
      }
};
export default Createuser