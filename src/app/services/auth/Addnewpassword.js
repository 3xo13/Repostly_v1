import toast from "react-hot-toast";
const Addnewpassword = async (Setloading ,signIn , code  ,password,  router) => {
    if(!code) {
        return toast.error("Please enter your password reset code")
      }
      if(!password) {
        return toast.error("Please enter your New password ")
      }
      Setloading(true);
  try {
    const respones =  await signIn
       ?.attemptFirstFactor({
         strategy: 'reset_password_email_code',
         code,
         password,
       })
       if(respones.status === "complete"){
         setActive({ session: respones.createdSessionId })
         toast.success("password Reset Successfuly ")
         router.push("/auth-Sign-In")
       }
     } catch (error) {
         // Check for specific Clerk error codes
         if (error.errors) {
           const clerkError = error.errors[0]?.message || "Something went wrong.";
           toast.error(clerkError);
         } else {
           toast.error("An error occurred during login. Please try again.");
         }
     }finally{
       return Setloading(false)
     }
};
export default Addnewpassword