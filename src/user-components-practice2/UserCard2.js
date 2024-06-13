import React from "react";
import { useNavigate } from "react-router-dom";
const UserCard2 = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();
  const onPressedBack = () => {
    setSelectedUser(null);
    navigate("/");
  };
  return (
    <div>
      <p>
        {" "}
        <b>Hello</b> {selectedUser.firstName} {selectedUser.lastName}
      </p>
      <p>
        {" "}
        <b>Your address is: </b> {selectedUser.address.address}{" "}
        {selectedUser.address.city}
      </p>
      <br />
      <br />
      <button onClick={onPressedBack}>Back</button>
    </div>
  );
};

export default UserCard2;
