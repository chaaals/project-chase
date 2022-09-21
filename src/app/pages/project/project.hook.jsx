import { useEffect, useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useInputForm, PROJECT_TEMPLATE } from "../../hooks/useInputForm.hook";

import { db } from "../../../firebase-config";
import { collection, addDoc, getDocs } from "@firebase/firestore";

const useProjectHook = (context) => {
  const { user } = useContext(context);
  const { projectInfo, setProjectInfo, handleProjectInput } = useInputForm();
  const projectRef = collection(db, "users", user.id, "projects");

  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({});

  const navigate = useNavigate();

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
  };

  const navigateBack = useCallback(() => {
    navigate(`/user/project`);
  }, []);

  const getProjects = async () => {
    const data = await getDocs(projectRef);
    setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    if (user?.id !== undefined) getProjects();
  }, [user, newProject]);

  return {
    user,
    projects,
    createProject,

    projectInfo,
    handleProjectInput,
    onProjectCreate,

    navigateBack,
  };
};

export default useProjectHook;
