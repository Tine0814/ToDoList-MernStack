import { useUserContext } from "./useUserContext";

export const useLogout = () => {
  const { dispatch } = useUserContext();

  const logout = () => {
    //remove user From storage
    localStorage.removeItem("user");

    // dispatch logout Action
    dispatch({ type: "LOGOUT_USER" });
  };

  return { logout };
};
