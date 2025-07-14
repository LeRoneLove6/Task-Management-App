import React from "react";
import { Link } from "react-router-dom";  // removed useNavigate
import { useAuth0 } from "@auth0/auth0-react";
import { useAppContext } from "./useAppContext";

const Navbar: React.FC = () => {
  const { user: authUser, logout, loginWithRedirect, isAuthenticated } = useAuth0();
  const { tasks, user: appUser, setUser, addTask, editTask, deleteTask } = useAppContext();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/tasks/new">Add Task</Link>
      </div>

      <div className="nav-right">
        {isAuthenticated && (authUser || appUser) && (
          <span className="nav-user">
            👤 {appUser?.name || authUser?.name || "user"}
          </span>
        )}
        {isAuthenticated ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={() => loginWithRedirect()}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
