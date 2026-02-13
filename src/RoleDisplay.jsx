import React from "react";

function RoleDisplay({ permissions }) {
  return (
    <div className="box">
      <h3>Permissions</h3>
      <ul>
        {permissions.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default RoleDisplay;
