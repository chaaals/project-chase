import { useState } from "react";

export const USER_TEMPLATE = { username: "", password: "" };

export const useInputForm = () => {
  const [userInfo, setUserInfo] = useState(USER_TEMPLATE);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo((user) => {
      return { ...user, [name]: value };
    });
  };

  return { userInfo, setUserInfo, handleInput };
};
