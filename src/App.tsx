import React from 'react';
import "./App.css";
import HomePage from './components/HomePage';
import CallbackPage from "./components/CallbackPage";
import ProtectedPage from "./components/ProtectedPage";
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import TaskForm from './components/TaskForm';
import { Auth0Provider } from "@auth0/auth0-react";
import TaskItem from './components/TaskItem';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import LoginButton from "./components/LoginButton";
import UserContext from "./components/UserContext";
import AuthenticationGuard from "./components/AuthenticationGuard";
import NavBarButtons from './components/NavBarButtons';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return (<div>Loading...</div>);

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* having trouble with the HomePage component, so using Dashboard for now */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
          <Route
            path="/profile"
            element={<AuthenticationGuard component={ProfilePage} />}
          />
          <Route 
            path="/protected"
            element={<AuthenticationGuard component={ProtectedPage} />}
          />
          <Route path="/callback" element={<CallbackPage />} />
          {/* You can add edit page later like: */}
          {/* <Route path="/tasks/:id/edit" element={<TaskForm editMode />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;