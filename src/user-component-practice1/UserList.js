import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchquery,setSearchQuery]=useState("")
  const [filteredUsers,setFilteredUsers]=useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) {
          throw new Error("Error fetching data");
        }

        const userData = await response.json();
        setUsers(userData.users);
        setFilteredUsers(userData.users)
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(()=>{
    setFilteredUsers(
      users.filter((u)=>
        `${u.firstName} ${u.lastName}`.toLowerCase().includes(searchquery.toLocaleLowerCase())
      )
    )
  },[searchquery,users])

  console.log("Filtered Users",filteredUsers)
  //   useEffect(() => {
  //     console.log("users", users);
  //   }, [users]);

  useEffect(() => {
    console.log("selected user", selectedUser);
  }, [selectedUser]);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleUserClick = async (user) => {
    setSelectedUser(user);
    navigate(`/user/${user.id}`);
  };

  console.log("search query",searchquery)
  return (
    <>
      {selectedUser ? (
        <UserCard
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      ) : (
        <div>
          <input
            placeholder="Search User"
            value={searchquery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <br />
          <br />
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div key={user.id} onClick={() => handleUserClick(user)}>
                {user.firstName} {user.lastName}
              </div>
            ))
          ) : (
            <p>No users found</p>
          )}
        </div>
      )}
    </>
  );
};

export default UserList;
