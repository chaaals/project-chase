import { db } from "../../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

import { useInputForm, USER_TEMPLATE } from "../../hooks/useInputForm.hook";

export const useRegisterHook = () => {
  const { userInfo, setUserInfo, handleInput } = useInputForm();

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
    handleInput,
    submit,
  };
};
