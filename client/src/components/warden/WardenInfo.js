import React,{useEffect,useState} from 'react'
import Button from '../UI/Button'
import StudentCompainItem from '../student/Compaints/StudentCompainItem'
import StudentLeaveItem from '../student/Leave/StudentLeaveItem'
import styles from './Wardeninfo.module.css';
const WardenInfo = () => {

    const [loading, setLoading] = useState(true)
    const [details, setDetails] = useState({})

    const [show,setShow] = useState(false)


    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch("http://localhost:8000/api/v1/warden/me", {
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


const showDetails = () => {

    setShow(!show)
}

  return (
    <div className={styles.info}>
        <Button onClick={showDetails}>My Details</Button>
        {show && <>
            <h1>My Details</h1>
            <ul>
                <li>Name: {details.data.name}</li>
                <li>Block: {details.data.block}</li>
                <li>Complaints:</li>
                {details.data.complaint.map((e)=>{
                    return <StudentCompainItem e={e}/>
                })}
                <li>Leave:</li>
                {details.data.leave.map((e)=>{
                    return <StudentLeaveItem e={e}/>
                })}
            </ul>
        </>}

    </div>
  )
}

export default WardenInfo