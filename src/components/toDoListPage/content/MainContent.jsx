import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Lottie from "lottie-react";
import Task from "../../../assets/lottie/task.json";
import Form from "./Form";
import { useListsContext } from "../../../hooks/useListsContext";
import ListsContent from "./ListsContent";
import noTask from "../../../assets/lottie/noLists.json";
import { useUserContext } from "../../../hooks/useUserContext";

const MainContent = () => {
  const { lists, dispatch } = useListsContext();
  const [form, setForm] = useState(false);
  const { user } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/to-do-list/", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const jsonData = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_LISTS", payload: jsonData });
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      fetchData();
    }
  }, [dispatch, user]);

  const showForm = () => {
    if (form) {
      return (
        <>
          <Form onClick={() => setForm(false)} />
        </>
      );
    }
  };

  return (
    <div className="flex px-10 py-[100px] gap-4 pr-0">
      <div className="w-[78%] flex flex-col gap-6">
        <div className="w-full flex md:h-[200px] h-[100px] overflow-hidden justify-between items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-5 text-white text-[12px] sm:text-[15px] md:text-[20px] lg:text-[30px] shadow-md">
          <div className=" w-[400px]">
            <h1 className="text-center">
              Introducing. To Do list <br /> To manage all your task <br />{" "}
              ONLINE.
            </h1>
          </div>
          <div className="relative w-[400px] h-full flex justify-center items-center ">
            <div className="lg:w-[340px] md:w-[200px]">
              <Lottie animationData={Task} />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[30px] font-semibold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
            Tasks
          </h1>
          <div className="flex md:flex-wrap md:flex-row last-child flex-col justify-center gap-5 pt-10  h-[500px] overflow-auto">
            {(lists && lists.length === 0) || lists === null ? (
              <div className="flex justify-center w-full overflow-hidden">
                <div className="w-[400px]">
                  <Lottie animationData={noTask} />
                  <h1 className="text-center mt-5 text-[30px] font-semibold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                    No List of Data
                  </h1>
                </div>
              </div>
            ) : (
              lists &&
              lists.map((newData, index) => {
                if (!newData.done) {
                  return (
                    <div key={index}>
                      <ListsContent newData={newData} />
                    </div>
                  );
                }
                return null; // Add this line to handle the case when newData.done is true
              })
            )}
          </div>
        </div>
      </div>
      <div className="fixed min-h-[400px] right-0 w-[20%] -mt-4 rounded-lg bg-white p-5">
        <div className=" ">
          {/* <h1 className="text-center text-[20px] font-semibold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
              Add Task
            </h1> */}
          <div className="flex justify-center">
            <motion.button
              onClick={() => setForm(true)}
              animate={
                form
                  ? {
                      y: 370,
                    }
                  : {}
              }
              className="w-[150px] bg-gradient-to-r  from-sky-500 to-indigo-500 px-5 py-2 rounded-full font-bold shadow-md hover:ease-in-out duration-300 hover:scale-125"
            >
              <div className="text-white flex gap-2">
                <AddBoxIcon />
                Add Task
              </div>
            </motion.button>
          </div>

          <div>{showForm()}</div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
