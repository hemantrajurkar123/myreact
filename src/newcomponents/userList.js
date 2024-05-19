import React, { useEffect } from "react";
import UserShow from "./userShow";

const UserList = ({ users, query }) => {
  const filteredUsers = users.filter(
    (user) =>
      user.firstName &&
      user.firstName.toLowerCase().includes(query.toLowerCase())
  );
  const renderedUsers =
    filteredUsers &&
    filteredUsers.map((user) => {
      return <UserShow key={user.id} user={user} />;
    });
  useEffect(() => {
    console.log("From UserList", users);
  }, []);

  useEffect(() => {
    console.log("Rendered Users",renderedUsers);
  }, [renderedUsers]);

  useEffect(() => {
    console.log("Query value:", query);
  }, [query]);

  return (
    <>{renderedUsers}</>
    );
};

export default UserList;
