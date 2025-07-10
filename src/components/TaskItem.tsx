import React from 'react';
import { Link } from 'react-router-dom';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  dueDate: string;
}

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
      <p>Due: {task.dueDate}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>{' '}
      <Link to={`/tasks/${task.id}/edit`}>Edit</Link>
    </li>
  );
};

export default TaskItem;
