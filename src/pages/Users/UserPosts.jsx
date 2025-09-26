// import { useParams } from "react-router-dom";

// const UserPosts = () => {
//   const { userId } = useParams();
//   return <h3>Posts of User {userId}</h3>;
// };

// export default UserPosts;


import { useLocation } from "react-router-dom";

const UserPosts = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const tab = searchParams.get("tab"); // e.g., "liked" or "all"

  return (
    <div style={{ marginTop: "10px" }}>
      <h3>User Posts</h3>
      <p>Active Tab: {tab || "all"}</p>
      {/* Render posts based on tab */}
    </div>
  );
};

export default UserPosts;
