import React from "react";

import EditProjectModalComponent from "./component/edit-project-modal.component";
import EditTaskComponent from "./component/edit-task-modal.component";

import useEditHook from "./edit.hook";
import AppContext from "../../context/AppContext";

import { isInPath } from "../project/project.index";

const Edit = ({ onExit, onSubmit, onTaskEdit, onTaskDelete }) => {
  const {
    updateProject,
    handleEditProjectInput,

    updateTask,
    handleEditTaskInput,
  } = useEditHook(AppContext);

  return (
    <>
      {isInPath("edit") ? (
        <EditProjectModalComponent
          project={updateProject}
          onChange={handleEditProjectInput}
          onSubmit={onSubmit}
          onExit={onExit}
        />
      ) : (
        <EditTaskComponent
          task={updateTask}
          onChange={handleEditTaskInput}
          onTaskEdit={onTaskEdit}
          onTaskDelete={onTaskDelete}
          onExit={onExit}
        />
      )}
    </>
  );
};

export default Edit;
