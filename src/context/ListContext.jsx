import { createContext, useReducer } from "react";

export const ListsContext = createContext();
const [state, dispatch] = useReducer(listsReducer, {
  lists: null,
});

dispatch({ type: "SET_LISTS", payload: [{}, {}] });

export const ListsContextProvider = ({ children }) => {
  return <ListsContext.Provider>{children}</ListsContext.Provider>;
};
