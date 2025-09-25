import { Link, Outlet, useParams } from "react-router-dom";

const UserProfile = () => {
  const { userId } = useParams();

  return (
    <div style={{ marginLeft: "20px", borderLeft: "2px solid #ccc", paddingLeft: "10px" }}>
      <h2>User Profile: {userId}</h2>
      <Link to="posts">View Posts</Link>

      {/* Nested inside user profile */}
      <Outlet />
    </div>
  );
};

export default UserProfile;
