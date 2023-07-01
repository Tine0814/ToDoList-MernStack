import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { Avatar } from "@mui/material";
import useToggle from "../../hooks/useToggle";
import Form from "../../components/toDoListPage/content/Form";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Lottie from "lottie-react";
import Task from "../../assets/lottie/task.json";
import PreviewIcon from "@mui/icons-material/Preview";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const ToDoList = () => {
  const { value, toggleValue } = useToggle(false);
  const [data, setData] = useState([]);
  const [form, setForm] = useState(false);

  const getRandomDarkColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 6) + 9];
    }
    // console.log(color);
    return color;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/to-do-list/");
        const jsonData = await response.json();

        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const showForm = () => {
    if (form) {
      document.body.style.overflow = "hidden";
      return (
        <>
          <Form onClick={() => setForm(false)} />
        </>
      );
    } else {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <div className="">
      {showForm()}
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
              <h1 className="text-center">
                Introducing. To Do list <br /> To manage all your task <br />{" "}
                ONLINE.
              </h1>
            </div>
            <div className="relative w-[400px] h-full flex justify-center items-center ">
              <div className="w-[340px]">
                <Lottie animationData={Task} />
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-10">
              <h1 className="text-[30px] font-semibold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                Tasks
              </h1>
              <div>
                <button
                  onClick={() => setForm(true)}
                  className="w-[150px] bg-gradient-to-r  from-sky-500 to-indigo-500 px-5 py-2 rounded-full font-bold shadow-md hover:ease-in-out duration-300 hover:scale-125"
                >
                  <div className="text-white flex gap-2">
                    <AddBoxIcon />
                    Add Task
                  </div>
                </button>
              </div>
            </div>
            <div className="flex lg:flex-wrap lg:flex-row last-child sm:flex-col sm:h-full justify-center gap-5 mt-5 pt-10 lg:h-[500px] overflow-auto">
              {data.map((newData) => {
                if (!newData.done) {
                  return (
                    <div
                      key={newData._id}
                      className="relative md:w-[220px] lg:w-[320px] h-[150px] rounded-xl shadow-lg p-5"
                      style={{ backgroundColor: getRandomDarkColor() }}
                    >
                      <div>
                        <div className="flex flex-col justify-center">
                          <h1 className="text-[20px] font-bold">
                            {newData.title}
                          </h1>
                          <h1>{newData.task}</h1>
                          <h1>{newData.date}</h1>
                        </div>
                        <div className="absolute right-2 bottom-2">
                          <button>
                            <PreviewIcon />
                          </button>
                          <button>
                            <CheckCircleIcon />
                          </button>
                          <button>
                            <BorderColorIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className=" w-[20%] -mt-4 rounded-lg h-[500px] bg-white  border shadow-left overflow-auto ">
          <div className=" ">
            <h1 className="text-center text-[20px] font-semibold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
              Done
            </h1>
            <div className="flex flex-col gap-5 mt-5 pt-10 h-full p-5">
              {data.map((newData) => {
                if (newData.done) {
                  return (
                    <div
                      key={newData._id}
                      className="md:w-[220px] lg:w-[220px] rounded-xl shadow-lg p-5 "
                      style={{ backgroundColor: getRandomDarkColor() }}
                    >
                      <div>
                        <div className="flex flex-col justify-center ">
                          <h1 className="text-[15px] font-bold">
                            {newData.title}
                          </h1>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
