import { useUserContext } from "./useUserContext";
import { useListsContext } from "../hooks/useListsContext";

export const useLogout = () => {
  const { dispatch } = useUserContext();
  const { dispatch: listDispatch } = useListsContext();

  const logout = () => {
    //remove user From storage
    localStorage.removeItem("user");

    // dispatch logout Action
    dispatch({ type: "LOGOUT_USER" });
    listDispatch({ type: "SET_LISTS", payload: null });
  };

  return { logout };
};
