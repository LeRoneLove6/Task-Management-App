// src/components/Profile.tsx
import React from "react";
import { useAppContext } from "./useAppContext";

const Profile: React.FC = () => {
  const { user, setUser } = useAppContext();

  return (
    <div>
      <h2>Profile</h2>
      <p>User: {user ?? "No user set"}</p>
      <button onClick={() => setUser("Alice")}>Set User to Alice</button>
      <button onClick={() => setUser(null)}>Clear User</button>
    </div>
  );
};

export default Profile;
