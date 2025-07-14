
export type Task = {
  id: string;
  title: string;
  description?: string;
  status?: string;
  dueDate?: string;
};

export type AppContextType = {
  user: string | null;
  setUser: (user: string | null) => void;
  tasks: Task[];
  addTask: (task: Task) => void;
  editTask: (task: Task) => void;
  deleteTask: (id: string) => void;
};
