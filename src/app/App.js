import { Route, Routes } from "react-router-dom";

import TmpNav from "./pages/home/temporary-nav";
import Login from "./pages/login/login.index";
import Register from "./pages/register/register.index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TmpNav />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
