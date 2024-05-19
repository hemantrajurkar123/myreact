import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import UserListNew from "./UserListNew";
import UserShowNew from "./UserShowNew";
import useFetch from "../hooks/useFetch";

const UserHomeNew = () => {
  const [users, setUsers] = useState([]);
  const { data, loading, error } = useFetch("https://dummyjson.com/users");

  useEffect(() => {
    if (data) {
      setUsers(data.users);
    }
  }, [data]);

  useEffect(() => {
    console.log("users data", users);
  }, [users]);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (error) {
    return <h4>Error loading data</h4>;
  }

  return (
    <>
      <h3>User Home</h3>
      <Routes>
        <Route path="/" element={<UserListNew users={users} />} />
        <Route path="/user/:id" element={<UserShowNew users={users} />} />
      </Routes>
    </>
  );
};

export default UserHomeNew;
