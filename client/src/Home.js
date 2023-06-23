import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "./components/UI/Button";

const Home = () => {
  return (
    <>
      <Link to="/">SeSS</Link>
      <Link to="/student">student</Link>
      <Link to="/faculty">faculty</Link>
      <Link to="/warden">warden</Link>
    </>
  );
};

export default Home;
