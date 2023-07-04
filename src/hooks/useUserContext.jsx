import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useUserContext = () => {
  const { state, dispatch } = useContext(AuthContext);

  if (!state) {
    throw Error("useUserContext must be used inside an ListContextProvider");
  }

  return { lists: state.user, dispatch };
};
