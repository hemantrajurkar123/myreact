// UserShow.js
import React from "react";
import { useParams } from "react-router-dom";

const UserShow = ({data}) => {
  const { id } = useParams();
  console.log("data in usershow",data)
  const user = data.find(user => user.id === parseInt(id));

  // Fetch user data based on the id and render user details
  
  return (
    <div className='user-show'>
      {/* Render user details based on the fetched data */}
      <h3>Selected {id}</h3>
      <h2>Name: {user.firstName} {user.lastName}</h2>
      {/* Render user details here */}
    </div>
  );
};

export default UserShow;
