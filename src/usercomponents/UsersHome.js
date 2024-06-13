// UsersHome.js
import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import UsersList from "./UsersList";
import UserShow from "./UserShow";
import { Routes, Route} from "react-router-dom";


const UsersHome = () => {
  const { data, error, loading } = useFetch("https://dummyjson.com/users");
  // const navigate = useNavigate();

  if (loading) {
    return <h3>Loading Users...</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  if (!data) {
    return null; // Or any other loading indicator
  }

  return (
    <Routes>
      <Route path="/" element={<UsersList users={data.users} />} />
      <Route path="/users/:id" element={<UserShow data={data.users}/>} />
    </Routes>
  );
};

export default UsersHome;
