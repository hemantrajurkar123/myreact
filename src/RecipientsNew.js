import React from "react";
import { useState } from "react";
import styles from "./css/RecipientsNew.module.css";

const RecipientsNew = () => {
  const users = [
    {
      id: 1,
      name: "Hemant",
    },
    {
      id: 2,
      name: "Virat",
    },
    {
      id: 3,
      name: "Rohit",
    },
  ];
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showSelectedUsers, setShowSelectedUsers] = useState([]);
  // when clicked on the submit button show the list
  const handleSubmit = () => {
    setShowSelectedUsers([...selectedUsers]);
  };

  // When clicked on the users, add it to the selected users
  const handleUserClick = (id) => {
    const clickedUser = users.find((user) => user.id === id);
    setSelectedUsers([...selectedUsers, clickedUser]);
    console.log("Clicked");
  };

  const onDeleteUser = (id) => {
    let newUserList = selectedUsers.filter((user) => user.id !== id);
    setSelectedUsers(newUserList);
    console.log("user id removed is",id)
  };

  return (
    <div className={styles.recipient_div}>
      <div className={styles.users_list}>
        <h3>Users</h3>
        {users.map((user) => (
          <div
            key={user.id}
            type="button"
            style={{ cursor: "pointer" }}
            onClick={() => handleUserClick(user.id)}
          >
            <p>{user.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.selected_users}>
        <h3>Selected Users</h3>
        {selectedUsers.map((selectedUser) => (
          <div key={selectedUser.id}>
            <p>
              {selectedUser.name}
              <span>
                {" "}
                <button
                  type="button"
                  style={{ cursor: "pointer" }}
                  onClick={() => onDeleteUser(selectedUser.id)}
                >
                  X
                </button>
              </span>
            </p>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <div className={styles.show_selected_users}>
        <h3>Show Selected Users</h3>
        {showSelectedUsers.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipientsNew;
