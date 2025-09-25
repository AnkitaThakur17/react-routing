import { useParams } from "react-router-dom";

const UserPosts = () => {
  const { userId } = useParams();
  return <h3>Posts of User {userId}</h3>;
};

export default UserPosts;
