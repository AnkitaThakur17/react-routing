import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import UsersList from "./pages/Users/UsersList";
import UserProfile from "./pages/Users/Userprofile";
import NotFound from "./pages/NotFound";
import UserPosts from "./pages/Users/UserPosts";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/about" element={<About />} />

          {/* Users Group */}
          <Route path="/users" element={<UsersList />}>
            {/* Nested route inside a user */}
            <Route path=":userId" element={<UserProfile />}>
              <Route path="posts" element={<UserPosts/>} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
