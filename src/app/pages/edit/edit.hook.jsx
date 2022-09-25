import { useContext } from "react";

const useEditHook = (context) => {
  const { updateProject, setUpdateProject, updateTask, setUpdateTask } =
    useContext(context);

  const handleEditProjectInput = (e) => {
    const { name, value } = e.target;

    setUpdateProject((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleEditTaskInput = (e) => {
    const { name, value } = e.target;

    setUpdateTask((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  return {
    updateProject,
    handleEditProjectInput,

    updateTask,
    handleEditTaskInput,
  };
};

export default useEditHook;
