// src/components/TaskForm.tsx
import React, { useState, useEffect } from "react";
import { useAppContext } from "./useAppContext";
import { useNavigate, useParams } from "react-router-dom";
import type { Task } from "./AppContextTypes";

const TaskForm: React.FC = () => {
  const { id } = useParams(); // <- task ID from route
  const navigate = useNavigate();
  const { tasks, addTask, editTask } = useAppContext();

  const editingTask = id ? tasks.find((t) => t.id === id) : undefined;

  const [title, setTitle] = useState(editingTask?.title || "");
  const [description, setDescription] = useState(editingTask?.description || "");
  const [status, setStatus] = useState<Task["status"]>(editingTask?.status || "pending");
  const [dueDate, setDueDate] = useState(editingTask?.dueDate || "");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description || "");
      setStatus(editingTask.status || "pending");
      setDueDate(editingTask.dueDate || "");
    }
  }, [editingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: editingTask?.id || Date.now().toString(),
      title,
      description,
      status,
      dueDate,
    };

    if (editingTask) {
      editTask(newTask);
    } else {
      addTask(newTask);
    }

    navigate("/dashboard"); // redirect after save
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingTask ? "Edit Task" : "New Task"}</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />

      <select value={status} onChange={(e) => setStatus(e.target.value as Task["status"])}>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button type="submit">{editingTask ? "Update" : "Add"} Task</button>
    </form>
  );
};

export default TaskForm;
