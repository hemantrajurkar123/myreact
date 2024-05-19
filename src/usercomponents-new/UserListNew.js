import { Link } from "react-router-dom";

const UserListNew = ({users}) => {
  
  return (
    <>
      {users &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <Link to={`/user/${user.id}`}>
                {user.firstName} {user.lastName}
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default UserListNew;
