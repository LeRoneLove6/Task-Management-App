import React from "react";
import { useAppContext } from "./AppContext"; // Use named import

const Profile: React.FC = () => {
  const { user, setUser } = useAppContext();

  return (
    <div>
      <p>User: {user ?? "No user set"}</p>
      <button onClick={() => setUser("Alice")}>Set User</button>
    </div>
  );
};

export default Profile;