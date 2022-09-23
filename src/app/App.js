import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context/AppContext";

import Navbar from "./components/navbar/navbar.index";

import Home from "./pages/home/home.index";
import Login from "./pages/login/login.index";
import Register from "./pages/register/register.index";
import Project from "./pages/project/project.index";

function App() {
  const { user } = useContext(AppContext);
  return (
    <>
      {user?.id === undefined && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <>
              <Home />
              <Login />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Home />
              <Register />
            </>
          }
        />
        <Route path="/user">
          <Route path="project" element={<Project />} />
          <Route path="project/preview/:id" element={<Project />} />
          <Route path="project/create" element={<Project />} />
          <Route path="project/preview/:id/task/new" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
