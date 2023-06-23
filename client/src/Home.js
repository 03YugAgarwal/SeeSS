import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "./components/UI/Button";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
    <h1 className={styles.greet}> Welcome back!</h1>
    <div className={styles.homecards}>
      <div className={styles.students}><h1><Link to="/student" className="link1">student</Link></h1></div>    
      <div className={styles.facultys}><h1><Link to="/faculty">faculty</Link></h1></div> 
      <div className={styles.wardens}><h1><Link to="/warden">warden</Link></h1></div>
    </div>
    
    </>
  );
};

export default Home;
