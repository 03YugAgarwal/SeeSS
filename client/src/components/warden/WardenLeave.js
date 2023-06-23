import React, { useEffect, useState } from 'react'
import Button from '../UI/Button'
import StudentLeaveItem from '../student/Leave/StudentLeaveItem'
import styles from './WardenLeave.module.css'
const WardenLeave = () => {
    const [show, setShow] = useState(false)
    const [loading,setLoading] = useState(true)
    const [details,setDetails] = useState({})


    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch("http://localhost:8000/api/v1/warden/leave", {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
          //   console.log(data);
            setLoading(false);
            setDetails(data);
          //   setValue(details.data)
          })
          .then((error) => {
            console.error(error);
          });
    
        return () => {};
      }, []);
    
    

    const showBtn = () => {
        setShow(!show)
    }

  return (
    <div className={styles.leaveinfo}>
        <Button onClick={showBtn}>Show Leaves</Button>
        {show && <>
            {/* <li</li> */}
            <h3>Leaves:</h3>
            <ul>
                {details.data.map(e=><StudentLeaveItem e={e} />)}
            </ul>
        
        </>}
    </div>
  )
}

export default WardenLeave