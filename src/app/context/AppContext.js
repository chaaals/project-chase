import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [projectId, setProjectId] = useState("");
  const [taskId, setTaskId] = useState("");

  const [project, setProject] = useState({});
  const [selectedTask, setSelectedTask] = useState({});

  const [updateProject, setUpdateProject] = useState({});
  const [updateTask, setUpdateTask] = useState({});

  useEffect(() => {
    if (project?.id !== undefined) setUpdateProject(project);

    if (selectedTask?.id !== undefined) setUpdateTask(selectedTask);
  }, [project, selectedTask]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,

        projectId,
        setProjectId,

        project,
        setProject,

        updateProject,
        setUpdateProject,

        taskId,
        setTaskId,

        selectedTask,
        setSelectedTask,

        updateTask,
        setUpdateTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
