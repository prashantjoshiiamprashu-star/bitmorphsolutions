import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - Bitmorph Solutions",

  // other metadata
  description: "Sign in to access your Bitmorph Solutions account"
};

const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
