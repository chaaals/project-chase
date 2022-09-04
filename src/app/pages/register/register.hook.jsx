import { useState } from "react";
import { db } from "../../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

const USER_TEMPLATE = { username: "", password: "" };

export const useRegisterHook = () => {
  const [userInfo, setUserInfo] = useState(USER_TEMPLATE);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo((user) => {
      return { ...user, [name]: value };
    });
  };

  const submit = (e) => {
    e.preventDefault();
    registerUser(userInfo);
    setUserInfo(USER_TEMPLATE);
  };

  const registerUser = async (payload) => {
    await addDoc(collection(db, "users"), payload);
  };

  return {
    userInfo,
    setUserInfo,
    handleInput,
    submit,
  };
};
