import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animation from "../../assets/lottie/ddd.json";
import InputComponent from "../../components/form/textField/inputComponent";
import { motion } from "framer-motion";
import background from "../../assets/img/background2.jpg";

const LoginRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [change, setChange] = useState(null);

  useEffect(() => {
    const storedChange = localStorage.getItem("change");
    if (storedChange !== null) {
      setChange(JSON.parse(storedChange));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("change", JSON.stringify(change));
  }, [change]);

  const handleCheckboxChange = (event) => {
    setShowPassword(event.target.checked);
  };

  return (
    <>
      <div className="relative w-full h-screen flex justify-center items-center p-10 bg-img-background bg-no-repeat bg-cover">
        <div className=" w-full h-full top-0 object-fit absolute  opacity-[.4]">
          <img src={background} alt="" className="w-full h-full object-fit " />
        </div>
        <div className="absolute top-0 w-full h-full bg-[#446dc1] mix-blend-overlay "></div>
        <div className="relative h-[500px] bg-[#ededed] w-[1000px] shadow-lg rounded-md overflow-hidden p-10 flex justify-between">
          <form className="h-full">
            <div className="h-full flex justify-center items-center">
              <div className="w-[400px] flex flex-col gap-5">
                <h1 className="text-center bg-gradient-to-r  from-[#d946ef] to-[#8b5cf6] bg-clip-text text-transparent font-bold text-[30px]">
                  Your Information
                </h1>
                <InputComponent label="UserName" />
                <InputComponent
                  label="Password"
                  type={showPassword ? "text" : "password"}
                />
                <div className="flex items-center mb-4">
                  <input
                    id="login-checkbox"
                    type="checkbox"
                    value={showPassword}
                    checked={showPassword}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Show Password
                  </label>
                </div>
                <div className="flex justify-center">
                  <button className="w-[150px] bg-gradient-to-r  from-[#d946ef] to-[#8b5cf6] px-5 py-2 rounded-full font-bold shadow-md hover:ease-in-out duration-300 hover:scale-125">
                    <div className="text-white">Sign In</div>
                  </button>
                </div>
              </div>
            </div>
          </form>
          <form className="h-full">
            <div className="h-full flex justify-center items-center">
              <div className="w-[400px] flex flex-col gap-5">
                <h1 className="text-center bg-gradient-to-r  from-sky-500 to-indigo-500 bg-clip-text text-transparent font-bold text-[30px]">
                  Your Information
                </h1>
                <InputComponent label="UserName" />
                <InputComponent
                  label="Password"
                  type={showPassword ? "text" : "password"}
                />
                <InputComponent
                  label="Confirm Passowrd"
                  type={showPassword ? "text" : "password"}
                />
                <div className="flex items-center mb-4">
                  <input
                    id="register-checkbox"
                    type="checkbox"
                    value={showPassword}
                    checked={showPassword}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Show Password
                  </label>
                </div>
                <div className="flex justify-center">
                  <button className="w-[150px] bg-gradient-to-r  from-sky-500 to-indigo-500 px-5 py-2 rounded-full font-bold shadow-md hover:ease-in-out duration-300 hover:scale-125">
                    <div className="text-white">Register</div>
                  </button>
                </div>
              </div>
            </div>
          </form>
          <motion.div
            animate={
              !change
                ? {
                    right: 0,
                    background: [
                      "linear-gradient(to right, #d946ef,#8b5cf6)",
                      "linear-gradient(to right, #6366f1, #0ea5e9)",
                    ],
                  }
                : { left: 0 }
            }
            initial={{ right: 0 }}
            transition={{ duration: 0.5 }}
            className={` z-20 absolute top-0 h-[500px] w-[50%]  flex justify-center items-center flex-col gap-10 text-white`}
          >
            <h1 className="text-[25px] font-bold">
              {" "}
              {!change
                ? " Register Your Information"
                : "You Already have an Account"}
            </h1>
            <div className="w-[250px]">
              <Lottie animationData={animation} />
            </div>
            <button
              className="w-[150px] bg-white px-5 py-2 rounded-full font-bold shadow-md hover:ease-in-out duration-300 hover:scale-125"
              onClick={() => {
                if (!change) {
                  setChange(true);
                } else {
                  setChange(false);
                }
              }}
            >
              <div
                className={`${
                  change
                    ? "from-[#d946ef] to-[#8b5cf6]"
                    : "from-sky-500 to-indigo-500"
                } bg-gradient-to-r bg-clip-text text-transparent`}
              >
                {!change ? " Register" : "Sign In"}
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LoginRegister;
