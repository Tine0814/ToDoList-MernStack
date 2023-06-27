import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import student from "../.../../../assets/images/student.png";
// import studying from "../.../../../assets/images/studying.png";
// import analysis from "../.../../../assets/images/analysis.png";
// import knowledge from "../.../../../assets/images/knowledge.png";
import { AnimatePresence, motion } from "framer-motion";
import { Avatar } from "@mui/material";
import useToggle from "../../hooks/useToggle";

const ToDoList = () => {
  const { value, toggleValue } = useToggle(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/to-do-list/");
        const jsonData = await response.json();

        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <header className="relative w-full flex justify-between px-5 py-2 items-center shadow-xl">
        <div className="text-[20px]">
          <button onClick={() => toggleValue(!value)}>
            <GiHamburgerMenu />
          </button>
        </div>
        <Avatar alt="Remy Sharp" src="" />
      </header>
      {value && (
        <AnimatePresence>
          <motion.div
            className={`bg-secondary  w-[200px] absolute z-20 left-5 rounded-xl top-10 p-5`}
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-50%", transition: { duration: 1 } }}
            transition={{ type: "spring", stiffness: 100, duration: 0.75 }}
          >
            <motion.ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "-50%", transition: { duration: 1 } }}
              transition={{ type: "spring", stiffness: 100, duration: 1 }}
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      )}
      <div className="flex px-10 py-6 gap-4 pr-0">
        <div className="w-[80%] flex flex-col gap-6">
          <div className="w-full flex h-[200px]  overflow-hidden justify-between items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-5 text-white text-[30px] shadow-md">
            <div className=" w-[400px]">
              <h1>
                Introducing. To Do list <br /> To manage your task
              </h1>
            </div>
            <div className="relative w-[400px] h-full flex justify-center items-center ">
              {/* <img src={student} alt="" className="w-[100px] z-[2]" /> */}
              <motion.div
                className="absolute top-0 left-0 glow-container rounded-full"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                {/* <img src={studying} alt="" className="w-[50px]" /> */}
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-[4rem] "
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                {/* <img src={knowledge} alt="" className="w-[50px] z-[2]" /> */}
              </motion.div>
              <motion.div
                className="absolute top-1 right-10"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                {/* <img src={analysis} alt="" className="w-[50px]" /> */}
              </motion.div>
              <motion.div
                className="bg-red-200 rounded-full  w-[160px] h-[160px]  absolute bg-gradient-to-r from-[#E8AA42] to-purple-500 shadow-xl"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              ></motion.div>
            </div>
          </div>
          <div>
            <h1 className="text-[30px] font-semibold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
              Category
            </h1>
            <div className="grid grid-cols-3 gap-5 mt-5">
              <div className="w-[320px] bg-red-200 h-[150px] rounded-xl shadow-lg">
                <div>
                  <div>icon</div>
                  <div></div>
                </div>
              </div>
              <div className="w-[320px] bg-red-200 h-[150px] rounded-xl shadow-lg">
                <div>
                  <div>icon</div>
                  <div></div>
                </div>
              </div>
              <div className="w-[320px] bg-red-200 h-[150px] rounded-xl shadow-lg">
                <div>
                  <div>icon</div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[20%] -mt-4 rounded-lg h-[600px] border shadow-left p-5">
          <div className="">
            <h1 className="text-center text-[20px] font-semibold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
              Watch List
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
