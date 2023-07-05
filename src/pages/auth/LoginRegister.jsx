import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animation from "../../assets/lottie/hand.json";
import InputComponent from "../../components/form/textField/inputComponent";
import { motion } from "framer-motion";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

const LoginRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [change, setChange] = useState(null);
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const newTitle = change ? "Register" : "Login";
    setPageTitle(newTitle);
  }, [change]);

  useEffect(() => {
    document.title = pageTitle; // Set the title when the component mounts
    return () => {
      document.title = "Default Title"; // Reset the title when the component unmounts
    };
  }, [pageTitle]);

  return (
    <>
      <div className="relative h-screen">
        <div className="h-full left-color flex justify-center items-center p-10">
          <div className="md:costume-box-shadow bluring w-[800px] flex md:flex-row flex-col">
            <div className="lg:w-[33%] w-full">
              <div className="w-full h-full flex justify-center p-5 items-center flex-col text-center text-white">
                <h1 className="text-[25px] font-bold ">Welcome to Login</h1>
                <h2 className="text-[15px] mb-10">Don't have an account?</h2>
                <button className="bg-white py-3 px-5 w-[200px] font-bold shadow-lg rounded-md">
                  <div className="bg-gradient-to-r from-[#eebd89] to-[#d13abd] text-transparent bg-clip-text">
                    Signup
                  </div>
                </button>
              </div>
            </div>
            <div className="relative flex-grow flex justify-center">
              <div className="absolute right-3">
                <div className="hidden md:flex">
                  <div className="w-[60px]">
                    <Lottie animationData={animation} />
                  </div>
                  <h1 className="py-5 text-[15px] font-semibold ">Hello!!</h1>
                </div>
              </div>
              <form action="">
                <div className="flex md:w-[500px] sm:h-[400px] md:h-[500px] flex-col justify-center items-center p-10 gap-5">
                  <h1 className="text-[15px] font-bold">Log in</h1>
                  <div className="w-full">
                    <InputComponent label="Email" />
                  </div>
                  <div className="w-full relative">
                    <InputComponent
                      label="Password"
                      type={!showPassword ? "password" : "text"}
                    />
                    {!showPassword ? (
                      <div
                        onClick={() => setShowPassword(true)}
                        className="absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer"
                      >
                        <RemoveRedEyeIcon />
                      </div>
                    ) : (
                      <div
                        onClick={() => setShowPassword(false)}
                        className="absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer"
                      >
                        <VisibilityOffIcon />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-end w-full">
                    <Link to="todo">Forgot Password?</Link>
                  </div>
                  <button className="bg-gradient-to-r from-[#eebd89] to-[#d13abd] py-3 px-5 w-full text-white shadow-lg rounded-md">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegister;
