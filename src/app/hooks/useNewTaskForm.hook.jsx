import { useState } from "react";

export const TASK_TEMPLATE = { task_name: "", task_note: "", tags: "todos" };
const useNewTaskForm = () => {
  const [task, setTask] = useState(TASK_TEMPLATE);

  const handleTaskInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setTask((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return { task, setTask, handleTaskInput };
};

export default useNewTaskForm;
