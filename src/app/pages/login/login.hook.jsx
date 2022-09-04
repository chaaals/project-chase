import { useNavigate } from "react-router-dom";

export const useLoginHook = () => {
  const navigate = useNavigate();

  const navigateToRegister = () => navigate("/register");

  return {
    navigateToRegister,
  };
};
