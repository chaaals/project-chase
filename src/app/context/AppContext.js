import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [projectId, setProjectId] = useState("");
  return (
    <AppContext.Provider value={{ user, setUser, projectId, setProjectId }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
