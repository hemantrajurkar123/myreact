import React from "react";
import { useState } from "react";

const Recipients = () => {
  const [users, setUsers] = useState([
    { userId: 1, name: "Hemant", location: "Pune" },
    { userId: 2, name: "Manish", location: "Mumbai" },
  ]);

  const [selectedUsers, setSelectedUsers] = useState([]);

  const onUserClick = (name) => {
    const clickedUser = users.find((user) => user.name === name);
    setSelectedUsers([...selectedUsers, clickedUser]);
    // setSeletedUsers([users])
    console.log("clicked");
    console.log("Selected Users", selectedUsers);
  };

  const onSubmitClick = () => {
    setSelectedUsers([...users]);
  };
  return (
    <div>
      <h3>Users</h3>
      {users.map((user) => (
        <div
          type="button"
          style={{ cursor: "pointer" }}
          onClick={() => onUserClick(user.name)}
          key={user.userId}
        >
          <p>{user.name}</p>
        </div>
      ))}
      <button onClick={onSubmitClick}>Select</button>

      <h3>Selected Users</h3>
      {selectedUsers.map((selectedUser) => (
        <div key={selectedUser.userId}>
          <p>{selectedUser.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Recipients;
