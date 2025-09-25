import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const { msg, userData } = location.state || {};

  return (
    <div>
      <h1>About Page</h1>
      {msg && <p>Message: {msg}</p>}
      {userData && (
        <p>
          User: {userData.name} (ID: {userData.id})
        </p>
      )}
    </div>
  );
};

export default About;
