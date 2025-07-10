import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  dueDate: string;
}

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'pending' | 'in-progress' | 'completed'>('pending');
  const [dueDate, setDueDate] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      status,
      dueDate,
    };

    // For now: Save to localStorage (or just log it)
    const existingTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    localStorage.setItem('tasks', JSON.stringify([...existingTasks, newTask]));

    // Navigate back to dashboard
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Create New Task</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input value={title} onChange={e => setTitle(e.target.value)} required />
        </div>

        <div>
          <label>Description: </label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} required />
        </div>

        <div>
          <label>Status: </label>
          <select value={status} onChange={e => setStatus(e.target.value as Task['status'])}>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div>
          <label>Due Date: </label>
          <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} required />
        </div>

        <button type="submit">Save Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
