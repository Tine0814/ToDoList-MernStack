import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { useUserContext } from "./hooks/useUserContext";
import ToDoList from "./pages/private/ToDoList";
import LoginRegister from "./pages/auth/LoginRegister";

function App() {
  const { user } = useUserContext();
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={!user ? <LoginRegister /> : <Navigate to="toDo" />}
          />
          <Route
            path="toDo"
            element={user ? <ToDoList /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
