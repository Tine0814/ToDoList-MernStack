import React from "react";
import PreviewIcon from "@mui/icons-material/Preview";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { useListsContext } from "../../../hooks/useListsContext";
import { useUserContext } from "../../../hooks/useUserContext";

const ListsContent = ({ newData }) => {
  const { dispatch } = useListsContext();
  const { user } = useUserContext();
  const getRandomDarkColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 6) + 9];
    }
    return color;
  };

  const handDelete = async () => {
    if (!user) {
      return;
    }
    const response = await fetch(
      "https://to-do-list-mern-stack-backend.vercel.app/api/to-do-list/" +
        newData._id,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_LISTS", payload: json });
    }
  };
  return (
    <div
      className="relative md:w-[220px] lg:w-[320px] h-[150px] rounded-xl shadow-lg p-5"
      style={{ backgroundColor: getRandomDarkColor() }}
    >
      <div>
        <div className="flex flex-col justify-center">
          <h1 className="text-[20px] font-bold">{newData.title}</h1>
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
        <div className="absolute top-2 right-2 text-red-500">
          <button onClick={handDelete}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListsContent;
