import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import TaskForm from './components/TaskForm';
import TaskDetail from './components/TaskDetail';
import ProfilePage from './components/ProfilePage';
import ProtectedPage from './components/ProtectedPage';
import CallbackPage from './components/CallbackPage';
import AuthenticationGuard from './components/AuthenticationGuard';

const App: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<AuthenticationGuard component={ProfilePage} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks/new" element={<TaskForm />} />
        <Route path="/tasks/:id/edit" element={<TaskForm />} /> {/* ✅ Added edit route */}
        <Route path="/tasks/:id" element={<TaskDetail />} />
        <Route path="/profile" element={<AuthenticationGuard component={ProfilePage} />} />
        <Route path="/protected" element={<AuthenticationGuard component={ProtectedPage} />} />
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
    </div>
  );
};

export default App;
