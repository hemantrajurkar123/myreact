// here we will have an api call and will send the result as a props to the UsersList component
// we can call the api on click of the search bar button
// we will map the result in the userList and an individual user will send to the UserShow component and render the card

import React from "react";
import { useState, useEffect } from "react";
import UserList from "./userList";

const UsersMain = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const fetchData = () => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  const handleSubmit = () => {
    setSearchClicked(true);

    fetchData();
    // setQuery("");
  };

//   useEffect(() => {
//     setSearchClicked(false);
//   }, [searchClicked]);

 

  useEffect(() => {
    console.log("Users",users);
  }, [users]);

  useEffect(() => {
    console.log("Query",query);
  }, [query]);

  useEffect(() => {
    console.log("Searched Clicked", searchClicked);
  }, [searchClicked]);

  return (
    <>
      <div>
        <h3>Search Bar...</h3>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </div>
      {searchClicked && users.length > 0 && (
        <UserList query={query} users={users} searchClicked={searchClicked} />
      )}{" "}
    </>
  );
};

export default UsersMain;
