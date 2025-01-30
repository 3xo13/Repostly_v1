import toast from "react-hot-toast";
const LoginUser = async (email, password, signIn, router, setActive , Setloading) => {
    if (!email) {
      return toast.error("Please enter your email.");
    }
    if (!password) {
      return toast.error("Please enter your password.");
    }
    Setloading(true)
    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      });
  
      if (signInAttempt.status === "complete") {
        // Successful login
        await setActive({ session: signInAttempt.createdSessionId });
        router.push("/dashboard");
        return toast.success("Logiedin Successfuly")
      } else {
        // Handle unexpected incomplete state
        console.error("Sign-in incomplete:", JSON.stringify(signInAttempt, null, 2));
        toast.error("Unexpected error. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
  
      // Check for specific Clerk error codes
      if (error.errors) {
        const clerkError = error.errors[0]?.message || "Something went wrong.";
        toast.error(clerkError);
      } else {
        toast.error("An error occurred during login. Please try again.");
      }
    }finally{
      // hide spiner after complate login
        Setloading(false)
    }
  };
  export default LoginUser