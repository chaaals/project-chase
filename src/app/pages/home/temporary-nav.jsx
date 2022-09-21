import React from "react";
import { useNavigate } from "react-router-dom";
const TmpNav = () => {
  const navigate = useNavigate();
  const navigateTo = (e) => {
    const { name } = e.target;
    switch (name) {
      case "login":
        navigate("/login");
        break;
      case "register":
        navigate("/register");
        break;
      case "project":
        navigate("/user/project");
        break;
      default:
        navigate("/");
        break;
    }
  };
  return (
    <>
      <button name="login" onClick={navigateTo}>
        navigate to login
      </button>
      <button name="register" onClick={navigateTo}>
        navigate to register
      </button>
      <button name="project" onClick={navigateTo}>
        navigate to project
      </button>
    </>
  );
};

export default TmpNav;
