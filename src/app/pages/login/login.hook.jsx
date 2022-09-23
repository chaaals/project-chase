import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

import AppContext from "../../context/AppContext";

import { useInputForm, USER_TEMPLATE } from "../../hooks/useInputForm.hook";

export const useLoginHook = () => {
  const { user, setUser } = useContext(AppContext);
  const { userInfo, setUserInfo, handleUserInput } = useInputForm();

  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState({});

  const navigate = useNavigate();

  const navigateToRegister = () => navigate("/register");

  const redirectToDashboard = () => navigate("/user/project");

  const exitModal = () => navigate("/");

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
        setUser(user);
        navigate("/user/project");
      }
      return user;
    });
  };

  useEffect(() => {
    if (!loggedUser?.id) matchLoggedUser();
  }, [users, loggedUser]);

  console.log(loggedUser, users);
  return {
    user,
    userInfo,

    handleUserInput,
    submit,

    navigateToRegister,
    redirectToDashboard,
    exitModal,
  };
};
