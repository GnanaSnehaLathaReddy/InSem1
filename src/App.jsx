import React, { useState } from "react";
import "./App.css";
import UserInfo from "./UserInfo";
import RoleDisplay from "./RoleDisplay";

function App() {
  const [user, setUser] = useState({
    name: "Sneha Latha",
    role: "Viewer",
    permissions: ["Read"]
  });

  const changeRole = (newRole) => {
    let permissions = [];

    if (newRole === "Admin") permissions = ["Read", "Write", "Delete"];
    else if (newRole === "Editor") permissions = ["Read", "Write"];
    else permissions = ["Read"];

    setUser({ ...user, role: newRole, permissions });
  };

  return (
    <div className="dashboard">
      <h1 className="title">User Role Management</h1>

      <div className="content">
        <div className="info-panel">
          <UserInfo name={user.name} role={user.role} />
          <RoleDisplay permissions={user.permissions} />
        </div>

        <div className="role-panel">
          <button className="admin" onClick={() => changeRole("Admin")}>Admin</button>
          <button className="editor" onClick={() => changeRole("Editor")}>Editor</button>
          <button className="viewer" onClick={() => changeRole("Viewer")}>Viewer</button>
        </div>
      </div>
    </div>
  );
}

export default App;
