import React from "react";

function UserInfo({ name, role }) {
  return (
    <div className="box">
      <h3>User Info</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Role:</strong> {role}</p>
    </div>
  );
}

export default UserInfo;
