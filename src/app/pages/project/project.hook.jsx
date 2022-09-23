import { useEffect, useState, useContext, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useInputForm, PROJECT_TEMPLATE } from "../../hooks/useInputForm.hook";
import useNewTaskForm, { TASK_TEMPLATE } from "../../hooks/useNewTaskForm.hook";

import { db } from "../../../firebase-config";
import { collection, addDoc, getDocs } from "@firebase/firestore";

import { isInPath } from "./project.index";

const useProjectHook = (context) => {
  const { user, setUser, projectId, setProjectId } = useContext(context);
  const { projectInfo, setProjectInfo, handleProjectInput } = useInputForm();
  const { task, setTask, handleTaskInput } = useNewTaskForm();

  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState([]);
  const [newProject, setNewProject] = useState({});

  const navigate = useNavigate();
  const projectRef = collection(db, "users", user.id, "projects");

  // Projects
  const createProject = useCallback(() => {
    navigate(`${window.location.pathname}/create`);
  }, []);

  const onProjectCreate = async (event) => {
    event.preventDefault();
    if (!projectInfo?.project_name || !projectInfo?.project_description) return;

    await addDoc(projectRef, {
      ...projectInfo,
      date_created: new Date(Date.now()).toISOString(),
    });

    setNewProject(projectInfo);
    setProjectInfo(PROJECT_TEMPLATE);
    navigate("/user/project");
  };

  const goToProject = (e) => {
    const project_id = e.target
      .closest(".project-card")
      .getAttribute("data-projectid");

    setProjectId(project_id);
    navigate(`/user/project/preview/${project_id}`);
  };

  // Tasks
  const createTask = () => {
    console.log(projectId);
    navigate(`/user/project/preview/${projectId}/task/new`);
  };

  const onTaskCreate = async (e) => {
    e.preventDefault();
    const taskRef = collection(projectRef, projectId, "tasks");

    await addDoc(taskRef, {
      ...task,
      date_created: new Date(Date.now()).toISOString(),
    });

    setNewTask(task);
    setTask(TASK_TEMPLATE);
    navigate(`/user/project/preview/${projectId}`);
  };

  const navigateToProject = () => {
    setTask(TASK_TEMPLATE);
    navigate(`/user/project/preview/${projectId}`);
  };

  // Other actions
  const navigateToProjects = useCallback(() => {
    navigate(`/user/project`);
    setTasks([]);
    setProjectId("");
  }, []);

  const logOut = useCallback(() => {
    setUser({});
    navigate("/");
  }, []);

  const getProjects = async () => {
    const data = await getDocs(projectRef);
    setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const getTasks = async () => {
    const data = await getDocs(collection(projectRef, projectId, "tasks"));
    setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    if (user?.id !== undefined) getProjects();
    if (isInPath("preview")) getTasks();
  }, [user, newProject, projectId, newTask]);

  console.log(tasks);

  console.log(projectId);
  return {
    user,
    projects,
    projectId,

    createProject,
    goToProject,

    projectInfo,
    handleProjectInput,
    onProjectCreate,

    task,
    handleTaskInput,
    createTask,
    onTaskCreate,

    tasks,

    navigateToProjects,
    navigateToProject,
    logOut,
  };
};

export default useProjectHook;
