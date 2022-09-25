import { useContext } from "react";

const useEditHook = (context) => {
  const { updateProject, setUpdateProject, updateTask, setUpdateTask } =
    useContext(context);

  const handleEditProjectInput = (e) => {
    const { name, value } = e.target;

    console.log(updateProject);
    setUpdateProject((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleEditTaskInput = (e) => {
    const { name, value } = e.target;

    console.log(updateTask);
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
