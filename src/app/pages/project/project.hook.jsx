import { useEffect, useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useInputForm, PROJECT_TEMPLATE } from "../../hooks/useInputForm.hook";
import useNewTaskForm, { TASK_TEMPLATE } from "../../hooks/useNewTaskForm.hook";

import { db } from "../../../firebase-config";
import {
  doc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "@firebase/firestore";

import { isInPath } from "./project.index";

const useProjectHook = (context) => {
  const {
    user,
    setUser,

    projectId,
    setProjectId,

    project,
    setProject,

    updateProject,

    taskId,
    setTaskId,

    selectedTask,
    setSelectedTask,

    updateTask,
  } = useContext(context);

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
    console.log(e.target);
    const project_id = e.target
      .closest(".project-card")
      .getAttribute("data-projectid");

    setProjectId(project_id);
    navigate(`/user/project/preview/${project_id}`);
  };

  const goToEditProject = () => {
    navigate(`/user/project/preview/${projectId}/edit`);
  };

  const onProjectUpdate = async (e) => {
    e.preventDefault();
    const projectDoc = doc(projectRef, projectId);

    await updateDoc(projectDoc, { ...updateProject });

    setProject(updateProject);
    navigate(`/user/project/preview/${projectId}`);
  };

  const deleteProject = async (e) => {
    const projectDoc = doc(projectRef, projectId);

    await deleteDoc(projectDoc);

    setProjectId("");
    navigate(`/user/project`);
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

  const navigateToTask = (e) => {
    const TASK_ID = e.target.closest(".task").getAttribute("data-taskid");

    setSelectedTask(...tasks.filter(({ id }) => id === TASK_ID));
    setTaskId(TASK_ID);
    navigate(`/user/project/preview/${projectId}/selectedTask/${TASK_ID}`);
  };

  const onTaskEdit = async (e) => {
    e.preventDefault();
    const taskRef = collection(projectRef, projectId, "tasks");
    const taskDoc = doc(taskRef, taskId);

    await updateDoc(taskDoc, { ...updateTask });

    setSelectedTask(updateTask);
    navigate(`/user/project/preview/${projectId}`);
  };

  const deleteTask = async (e) => {
    const taskRef = collection(projectRef, projectId, "tasks");
    const taskDoc = doc(taskRef, taskId);

    await deleteDoc(taskDoc);

    setSelectedTask({});
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
    if (user?.id !== undefined && !isInPath("preview")) getProjects();

    if (isInPath("preview")) {
      setProject(...projects.filter(({ id }) => id === projectId));
      getTasks();
    }
  }, [user, newProject, projectId, newTask, selectedTask]);

  console.log(projects);
  console.log(project);

  console.log(selectedTask);
  return {
    user,
    project,
    projects,
    projectId,

    createProject,
    goToEditProject,
    goToProject,

    onProjectUpdate,

    projectInfo,
    handleProjectInput,
    onProjectCreate,

    tasks,
    task,
    handleTaskInput,
    createTask,
    onTaskCreate,

    selectedTask,
    setSelectedTask,
    navigateToTask,
    onTaskEdit,

    navigateToProjects,
    navigateToProject,
    logOut,

    deleteProject,
    deleteTask,
  };
};

export default useProjectHook;
