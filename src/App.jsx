import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ToDoList from "./pages/private/ToDoList";
import LoginRegister from "./pages/auth/LoginRegister";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginRegister />} />
          <Route path="toDo" element={<ToDoList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
