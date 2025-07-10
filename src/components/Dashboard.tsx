import React, { useState } from "react";
import TaskList from "./TaskList";
import type { Task } from "./TaskItem";
import { Link } from "react-router-dom";

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Sample Task 1",
    description: "Description for task 1",
    status: "pending",
    dueDate: "2025-07-10"
  },
  {
    id: "2",
    title: "Sample Task 2",
    description: "Description for task 2",
    status: "in-progress",
    dueDate: "2025-07-12"
  }
];

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleDelete = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h2>Task Dashboard</h2>
      <Link to="/tasks/new">
        <button>Add New Task</button>
      </Link>
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;