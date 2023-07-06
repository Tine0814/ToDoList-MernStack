import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animation from "../../assets/lottie/hand.json";
import LoginFormContent from "./LoginFormContent";
import LoadingComponent from "../loading/LoadingComponent";
import SignupFormContent from "./SignupFormContent";

const MainContent = () => {
  const [change, setChange] = useState(null);
  const [pageTitle, setPageTitle] = useState("");
  const [form, setForm] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setForm(!form);
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      <div className="relative h-screen">
        <div className="h-full left-color flex justify-center items-center p-10">
          <div className="md:costume-box-shadow bluring md:min-h-[500px] w-[800px] flex md:flex-row flex-col">
            <div className="lg:w-[33%] w-full">
              <div className="w-full h-full flex justify-center p-5 items-center flex-col text-center text-white">
                <h1 className="text-[25px] font-bold ">
                  Welcome to {form ? "Login" : "Register"}
                </h1>
                <h2 className="text-[15px] mb-10">
                  {form ? "Don't" : "Already"} have an account?
                </h2>
                <button
                  onClick={handleLoading}
                  className="bg-white py-3 px-5 w-[200px] font-bold shadow-lg rounded-md"
                >
                  <div className="bg-gradient-to-r from-[#eebd89] to-[#d13abd] text-transparent bg-clip-text">
                    {form ? "Register" : "Login"}
                  </div>
                </button>
              </div>
            </div>
            <div className="relative flex-grow flex justify-center">
              {loading ? (
                <LoadingComponent />
              ) : form ? (
                <LoginFormContent />
              ) : (
                <SignupFormContent />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
