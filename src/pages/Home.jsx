import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const message = "Hello from Home Page";
  const user = { id: 101, name: "Ankita" };


  return (
    <div>
      <h1>Welcome to Home</h1>
      <Link to="/about"
      state={{ msg: message, userData: user }}
      >
        Go to about page wih data
      </Link>
    </div>
  )
}

export default Home
