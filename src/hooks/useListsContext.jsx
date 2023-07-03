import { ListsContext } from "../context/ListContext";
import { useContext } from "react";

export const useListsContext = () => {
  const { state, dispatch } = useContext(ListsContext);

  if (!state) {
    throw Error("useListsContext must be used inside an ListContextProvider");
  }

  return { lists: state.lists, dispatch };
};
