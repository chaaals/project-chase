import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

import { useInputForm, USER_TEMPLATE } from "../../hooks/useInputForm.hook";

export const useLoginHook = () => {
  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState({});
  const { userInfo, setUserInfo, handleInput } = useInputForm();
  const navigate = useNavigate();

  const navigateToRegister = () => navigate("/register");

  const submit = (e) => {
    e.preventDefault();
    getUsers();
    setLoggedUser(userInfo);
    setUserInfo(USER_TEMPLATE);
  };

  const getUsers = async () => {
    const data = await getDocs(collection(db, "users"));
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const matchLoggedUser = () => {
    console.log("I was ran");
    users.map((user) => {
      if (
        user.username === loggedUser.username &&
        user.password === loggedUser.password
      ) {
        console.log("account matched, setting up new logged user");
        setLoggedUser(user);
      }
      return user;
    });
  };

  useEffect(() => {
    if (!loggedUser?.id) matchLoggedUser();
  }, [users, loggedUser]);

  console.log(loggedUser, users);
  return {
    loggedUser,
    getUsers,
    userInfo,
    handleInput,
    submit,
    navigateToRegister,
  };
};
