import toast from "react-hot-toast";
const Forgepassword = async (SetLoading ,signIn , email  , router) => {
  if (!email) {
    return toast.error("Please enter your email.");
  }

  try {
    SetLoading(true);
    await signIn?.create({
      strategy: "reset_password_email_code",
      identifier: email,
    });
    toast.success("Reset password email sent! Please check your inbox.");
    return router.push("/auth-Sign-In/New-password");
  } catch (error) {
    if (error.errors) {
      const clerkError = error.errors[0]?.message || "Something went wrong.";
      toast.error(clerkError);
    } else {
      toast.error("An error occurred during login. Please try again.");
    }
  } finally {
    SetLoading(false);
  }
};
export default Forgepassword