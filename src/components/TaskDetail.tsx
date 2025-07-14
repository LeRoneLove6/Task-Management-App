// src/pages/TaskDetail.tsx or src/components/TaskDetail.tsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAppContext } from './useAppContext';

const TaskDetail: React.FC = () => {
  const { id } = useParams();
  const { tasks } = useAppContext();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    navigate('/dashboard'); // or use a redirect state
    return null;
  }

  return (
    <div>
      <h1>Task Details</h1>
      <p><strong>Title:</strong> {task.title}</p>
      {task.description && <p><strong>Description:</strong> {task.description}</p>}
      {task.status && <p><strong>Status:</strong> {task.status}</p>}
      {task.dueDate && <p><strong>Due Date:</strong> {task.dueDate}</p>}

      <Link to={`/tasks/${task.id}/edit`}>Edit Task</Link>
    </div>
  );
};

export default TaskDetail;

