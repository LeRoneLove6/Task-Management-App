import React, { createContext, useState } from "react";
import type { AppContextType, Task } from "./AppContextTypes";

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

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (task: Task) => setTasks((prev) => [...prev, task]);

  const editTask = (updatedTask: Task) =>
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );

  const deleteTask = (id: string) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  return (
    <AppContext.Provider
      value={{ user, setUser, tasks, addTask, editTask, deleteTask }}
    >
      {children}
    </AppContext.Provider>
  );
};
