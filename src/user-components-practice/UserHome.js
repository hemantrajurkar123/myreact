// req- fetch the data from API call and pass it to the userCard component
// if data is not fetched, show error msg

import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { useNavigate } from "react-router-dom";
const UserHome = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

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
    console.log("Users", users);
  }, [users]);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleUserClick = (user) => {
    setSelectedUser(user)
    navigate(`/user/${user.id}`);
  };

  return (
    <div>
      {selectedUser ? (
        <UserCard user={selectedUser} setSelectedUser={setSelectedUser} />
      ) : (
        users.map((user) => (
          <div key={user.id} onClick={() => handleUserClick(user)}>
            {user.firstName} {user.lastName}
          </div>
        ))
      )}
    </div>
  );
};

export default UserHome;
