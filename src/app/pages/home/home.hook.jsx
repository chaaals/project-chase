import { useContext } from "react";

const useHomeHook = (context) => {
  const { user } = useContext(context);

  return { user };
};

export default useHomeHook;
