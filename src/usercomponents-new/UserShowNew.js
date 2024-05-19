import React from "react";
import { useParams } from "react-router-dom";

const UserShowNew = ({ users }) => {
  const { id } = useParams();
  const userSingle = users.find((user) => user.id === parseInt(id));
  console.log("User Show New", userSingle);

  return (
    <>
      {userSingle && (
        <>
          <p>User Id: {userSingle.id}</p>
          <p>
            User Name: {userSingle.firstName} {userSingle.lastName}
          </p>
          <p>User Age: {userSingle.age}</p>
          <p>User Address: {userSingle.address.address}</p>
          {/* Render other user details as needed */}
        </>
      )}
    </>
  );
};

export default UserShowNew;
