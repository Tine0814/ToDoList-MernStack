import React from "react";
import { motion } from "framer-motion";
import TextAreaComponent from "../../form/textField/TextAreaComponent";
import InputComponent from "../../form/textField/inputComponent";
import CloseIcon from "@mui/icons-material/Close";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  title: z.string().min(4, "title min 4 char"),
  task: z.string().min(4, "title min 4 char"),
  category: z.string().min(4, "title min 4 char"),
});

const Form = ({ onClick }) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (value) => {
    console.log(value);
    try {
      const response = await fetch("http://localhost:4000/api/to-do-list/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Handle the response data
        window.location.reload();
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.log(error); // Handle the error
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        className="relative min-w-[30vw] min-h-[60vh] flex flex-col items-center bg-[#FFFFEB] rounded-lg "
        animate={{ scale: [0, 1.5, 1] }}
        transition={{
          duration: 1.4,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-[25vh] bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-lg"></div>
        <div className="absolute right-1 top-1">
          <button onClick={onClick}>
            <CloseIcon />
          </button>
        </div>
        <form
          className="text-center p-10 flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputComponent
            label="Title"
            name="title"
            error={errors?.title}
            register={register}
          />
          <InputComponent
            label="Task"
            name="task"
            register={register}
            error={errors?.task}
          />
          <TextAreaComponent
            placeholder="Description"
            name="category"
            register={register}
            error={errors?.register}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[150px] bg-gradient-to-r  from-sky-500 to-indigo-500 px-5 py-2 rounded-full font-bold shadow-md hover:ease-in-out duration-300 hover:scale-125"
            >
              <div className="text-white">Add Task</div>
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Form;
