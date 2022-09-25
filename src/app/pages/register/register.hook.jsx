import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

import { useInputForm, USER_TEMPLATE } from "../../hooks/useInputForm.hook";

const NEW_PROJECT_TEMPLATE = {
  project_name: "Get started",
  project_description:
    "Welcome to Chase! I am an auto generated project for every user! I exists so that I can show you the ropes :>",
  date_created: new Date(Date.now()).toISOString(),
};

export const useRegisterHook = () => {
  const { userInfo, setUserInfo, handleUserInput } = useInputForm();
  const navigate = useNavigate();

  const exitModal = () => navigate("/");

  const submit = (e) => {
    e.preventDefault();
    registerUser(userInfo);
    setUserInfo(USER_TEMPLATE);

    navigate("/login");
  };

  const registerUser = async (payload) => {
    const NEW_USER_ID = await (
      await addDoc(collection(db, "users"), payload)
    ).id;
    setUpSubCollections(NEW_USER_ID);
  };

  const setUpSubCollections = async (USER_ID) => {
    const projectRef = collection(db, "users", USER_ID, "projects");
    await addDoc(projectRef, NEW_PROJECT_TEMPLATE);
  };

  return {
    userInfo,
    handleUserInput,
    submit,

    exitModal,
  };
};
