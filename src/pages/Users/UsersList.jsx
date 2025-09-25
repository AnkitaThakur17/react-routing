import { Link, Outlet } from "react-router-dom";

const UsersList = () => {
  const users = [
    { id: 1, name: "Ankita" },
    { id: 2, name: "Rahul" },
  ];

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>

      {/* Nested child renders here */}
      <Outlet />
    </div>
  );
};

export default UsersList;
