import React from "react";
import styled from "styled-components";

import AppContext from "../../context/AppContext";
import useProjectHook from "./project.hook";

import CreateProjectComponent from "./components/create-project.component";
import ProjectCard from "./components/project-card.component";
import ProjectSidebar from "./components/project-sidebar.component";
import ProjectPreview from "./components/project-preview.component";
import NewTaskComponent from "./components/new-task.component";

import Edit from "../edit/edit.index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectContainer = styled.main`
  display: grid;
  grid-template-columns: 300px 1fr;

  width: 100vw;
  height: 100vh;

  background-color: rgba(238, 238, 238, 0.5);
  overflow: hidden;
`;

const ProjectContent = styled.section`
  ${({ column }) => {
    switch (column) {
      case 1:
        return `grid-column: ${column};`;
      case 2:
        return;
      default:
        return `grid-column: ${column};`;
    }
  }}
`;

const ProjectCreateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  padding: 1.25rem 2rem;
`;

const ProjectCreate = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: "Oxygen Bold";
  font-size: 1rem;

  background-color: transparent;
  color: var(--secondary-color);
  border: none;

  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }
`;

const ProjectCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 1.25rem 2rem;
  width: 100%;
  height: 90vh;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }
`;

export const isInPath = (pathname) =>
  window.location.pathname.split("/").includes(pathname);

const Project = () => {
  const {
    user,
    project,
    projects,

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
    navigateToTask,

    onTaskEdit,

    navigateToProjects,
    navigateToProject,
    logOut,

    deleteProject,
    deleteTask,
  } = useProjectHook(AppContext);
  return (
    <ProjectContainer>
      {isInPath("create") && (
        <CreateProjectComponent
          projectInfo={projectInfo}
          handleInput={handleProjectInput}
          onProjectCreate={onProjectCreate}
          onExit={navigateToProjects}
        />
      )}

      {isInPath("new") && (
        <NewTaskComponent
          task={task}
          handleTaskInput={handleTaskInput}
          onExit={navigateToProject}
          onTaskCreate={onTaskCreate}
        />
      )}

      {(isInPath("edit") || isInPath("selectedTask")) && (
        <Edit
          onExit={navigateToProject}
          onSubmit={onProjectUpdate}
          onTaskEdit={onTaskEdit}
          onTaskDelete={deleteTask}
        />
      )}

      <ProjectContent column={1}>
        <ProjectSidebar {...user} onLogOut={logOut} />
      </ProjectContent>

      <ProjectContent column={2}>
        {isInPath("preview") ? (
          <ProjectPreview
            project={project}
            tasks={tasks}
            createTask={createTask}
            goToProjects={navigateToProjects}
            goToEditProject={goToEditProject}
            navigateToTask={navigateToTask}
            deleteProject={deleteProject}
          />
        ) : (
          <ProjectsDashboard
            projects={projects}
            createProject={createProject}
            goToProject={goToProject}
          />
        )}
      </ProjectContent>
    </ProjectContainer>
  );
};

const ProjectsDashboard = ({ projects, createProject, goToProject }) => {
  return (
    <>
      <ProjectCreateContainer>
        <ProjectCreate onClick={createProject}>
          <FontAwesomeIcon icon={faPenToSquare} />
          New Project
        </ProjectCreate>
      </ProjectCreateContainer>
      <ProjectCardsContainer>
        {projects.length !== 0 &&
          projects.map((props) => {
            return (
              <ProjectCard key={props.id} {...props} onClick={goToProject} />
            );
          })}
      </ProjectCardsContainer>
    </>
  );
};

// const ProjectPreview = ({ projects, projectId }) => {
//   return (
//     <h1>
//       {JSON.stringify(projects.filter((project) => project.id === projectId))}
//     </h1>
//   );
// };

export default Project;
