// UsersList.js
import React from "react";
import { Link } from "react-router-dom";
const UsersList = ({ users }) => {
  return (
    <>
      <h3>Users List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.firstName} {user.lastName}</Link>
        </li>
        ))}
      </ul>
    </>
  );
};

export default UsersList;
