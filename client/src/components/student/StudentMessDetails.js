import React,{useEffect, useState} from 'react'
import Button from '../UI/Button';
import Input from '../UI/Input';

const StudentMessDetails = () => {

    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState({
        data: ""
    });
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      fetch("http://localhost:8000/api/v1/student/mess-details", {
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
    

    const handleMessChange= (e) => {
        setDetails({data: e.target.value})
    }
    const handleBtn = () => {
        const token = localStorage.getItem('token')
        fetch('http://localhost:8000/api/v1/student/mess-details/', {
            method: 'PUT',
            headers: {
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messType: details.data
            })
          })
            .then(response => {
              if (!response.ok) {
                throw new Error('Error: ' + response.status);
              }
              // Handle successful response
              console.log('PUT request successful');
            })
            .catch(error => {
              console.error('Error:', error);
            });
    }

  return (
    <div>
        <h3>Mess Details</h3>
        {!loading && <h5>Type: {details.data}</h5>}
        <Input onChange={handleMessChange} value={details.data} />
        <Button onClick={handleBtn}>Edit</Button>
    </div>
  )
}

export default StudentMessDetails