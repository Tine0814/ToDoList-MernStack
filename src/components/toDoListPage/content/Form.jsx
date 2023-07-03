import React, { useEffect } from "react";
import { motion } from "framer-motion";
import TextAreaComponent from "../../form/textField/TextAreaComponent";
import InputComponent from "../../form/textField/inputComponent";
import CloseIcon from "@mui/icons-material/Close";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useListsContext } from "../../../hooks/useListsContext";
import AddBoxIcon from "@mui/icons-material/AddBox";

const schema = z.object({
  title: z.string().min(4, "title min 4 char"),
  task: z.string().min(4, "title min 4 char"),
  description: z.string().min(4, "title min 4 char"),
  date: z.string().min(1, "date are needed"),
});

const Form = ({ onClick }) => {
  const { dispatch } = useListsContext();
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
        const json = await response.json();
        // console.log(json); // Handle the response json
        // window.location.reload();
        console.log(json);
        dispatch({ type: "CREATE_LISTS", payload: json });
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.log(error); // Handle the error
    }
  };

  //
  return (
    <div>
      <motion.div
        className="-mt-10 relative flex flex-col items-center bg-white "
        animate={{ scale: [0, 1] }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        <div className="absolute right-2 top-1">
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
            name="description"
            register={register}
            error={errors?.register}
          />
          <div className="flex flex-col text-start gap-3">
            <label htmlFor="date" className=" font-semibold">
              Date
            </label>
            <InputComponent
              name="date"
              error={errors?.date}
              register={register}
              type="date"
            />
          </div>
          <div className="flex justify-center">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              type="submit"
              className="w-[150px] bg-gradient-to-r  from-sky-500 to-indigo-500 px-5 py-2 rounded-full font-bold shadow-md hover:ease-in-out duration-300 hover:scale-125"
            >
              <div className="text-white flex gap-2">
                <AddBoxIcon />
                Add Task
              </div>
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Form;
