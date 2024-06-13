import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const UserCard = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();
  

  const onPressedBack = () => {
    navigate("/");
    setSelectedUser(null);
  };

  return (
    <div>
      <p>
        User: {selectedUser.firstName} {selectedUser.lastName}
      </p>
      <p>User Id: {selectedUser.id}</p>
      <button onClick={onPressedBack}>Back</button>
    </div>
  );
};

export default UserCard;
