import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserCard2 from "./UserCard2";

const UserList2 = () => {
  // add states for users,loading,error,selectedUsers, filteredUsers
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedUser,setSelectedUser]=useState([])
  const navigate=useNavigate()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const userData = await response.json();
        setUsers(userData.users);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    console.log("users", users);
  }, [users]);

  if(loading){
    return <p>Loading users...</p>
  }

  if(error){
    return <p>{error}</p>
  }

  //function to redirect to the individual card when clicked from the list of users

  const handleUserClick=(user)=>{
    setSelectedUser(user)
    navigate(`/user/${user.id}`)
  }
  return (
    <>
    {selectedUser ? (
    <UserCard2 selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
    ) :(
        users.map((user) => (
            <div key={user.id} onClick={()=>handleUserClick(user)}>
              {user.firstName} {user.lastName}
            </div>
          ))
    )}
      
    </>
  );
};

export default UserList2;
