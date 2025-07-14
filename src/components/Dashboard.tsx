import React from "react";
import TaskList from "./TaskList";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "./useAppContext";

const Dashboard: React.FC = () => {
  const { tasks, deleteTask } = useAppContext();
  const navigate = useNavigate(); 

  const handleEdit = (taskId: string) => {
    navigate(`/tasks/${taskId}/edit`);
  };

  return (
    <div>
      <h2>Task Dashboard</h2>
      <Link to="/tasks/new">
        <button>Add New Task</button>
      </Link>
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={handleEdit} />
    </div>
  );
};

export default Dashboard;

