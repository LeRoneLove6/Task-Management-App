import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import type { Task } from '../components/TaskItem';

const TaskDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
    const found = tasks.find(t => t.id === id);
    if (found) {
      setTask(found);
    } else {
      alert('Task not found');
      navigate('/dashboard');
    }
  }, [id, navigate]);

  if (!task) return null;

  return (
    <div>
      <h1>Task Details</h1>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Due Date:</strong> {task.dueDate}</p>

      <Link to={`/tasks/${task.id}/edit`}>Edit Task</Link>
    </div>
  );
};

export default TaskDetail;
