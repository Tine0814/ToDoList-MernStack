import { createContext, useReducer } from "react";

export const ListsContext = createContext();

export const listsReducer = (state, action) => {
  switch (action.type) {
    case "SET_LISTS":
      return {
        lists: action.payload,
      };
    case "CREATE_LISTS":
      return {
        lists: [action.payload, ...state.lists],
      };
    case "DELETE_LISTS":
      return {
        lists: state.lists.filter((l) => l._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const ListsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(listsReducer, {
    lists: null,
  });
  return (
    <ListsContext.Provider value={{ state, dispatch }}>
      {children}
    </ListsContext.Provider>
  );
};
