import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AppContext from "../../context/AppContext";
const useNavbarHook = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (e) => {
      const navigateType = e.target.getAttribute("data-navigatetype");

      switch (navigateType) {
        case "login":
          navigate("/login");
          break;
        case "register":
          navigate("/register");
          break;
        default:
          return "";
      }
    },
    [navigate]
  );

  return { user, handleNavigate };
};

export default useNavbarHook;
