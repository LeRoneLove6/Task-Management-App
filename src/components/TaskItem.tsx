import React from "react";
import type { Task } from "../components/AppContextTypes";
import { Link } from "react-router-dom";


interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onDelete
}) => {
  return (
    <div>
      <Link to={`/tasks/${task.id}`}>{task.title}</Link>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
