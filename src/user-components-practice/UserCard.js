import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserHome from "./UserHome";

const UserCard = ({ user, setSelectedUser }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
    setSelectedUser(null);
  };

  return (
    <div>
      <p> UserName:{user.firstName}</p>
      <p> Address: {user.address.address}</p>
      <p> City: {user.address.city}</p> <br />
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default UserCard;
