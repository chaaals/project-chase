import { useState } from "react";

export const USER_TEMPLATE = { username: "", password: "" };

export const PROJECT_TEMPLATE = { project_name: "", project_description: "" };

export const useInputForm = () => {
  const [projectInfo, setProjectInfo] = useState(PROJECT_TEMPLATE);
  const [userInfo, setUserInfo] = useState(USER_TEMPLATE);

  const handleUserInput = (e) => {
    const { name, value } = e.target;

    setUserInfo((info) => {
      return { ...info, [name]: value };
    });
  };

  const handleProjectInput = (e) => {
    const { name, value } = e.target;

    setProjectInfo((info) => {
      return { ...info, [name]: value };
    });
  };

  return {
    userInfo,
    setUserInfo,
    handleUserInput,

    projectInfo,
    setProjectInfo,
    handleProjectInput,
  };
};
