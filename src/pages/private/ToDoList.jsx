import React, { useEffect } from "react";

import NavBarComponent from "../../components/NavBarComponent";
import MainContent from "../../components/toDoListPage/content/MainContent";

const ToDoList = () => {
  useEffect(() => {
    document.title = "Task";
  }, []);
  return (
    <div>
      <NavBarComponent />
      <MainContent />
    </div>
  );
};

export default ToDoList;
