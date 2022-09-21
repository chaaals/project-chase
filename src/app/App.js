import { Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

import TmpNav from "./pages/home/temporary-nav";
import Login from "./pages/login/login.index";
import Register from "./pages/register/register.index";
import Project from "./pages/project/project.index";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<TmpNav />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user">
          <Route path="project" element={<Project />} />
          <Route path="project/create" element={<Project />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
