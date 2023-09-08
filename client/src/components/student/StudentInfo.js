import React, { useEffect, useState } from "react";

const StudentInfo = () => {
  const [details, setDetails] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8000/api/v1/student/me", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setLoading(false);
        setDetails(data);
      })
      .catch((error) => console.error(error));
  }, []);

  // const handleWarden = () => {};

  return (
    <div>
      {!loading && (
        <div className="flex justify-center flex-col items-center border-solid border-white border-2 rounded-xl lg:w-1/3 mx-auto w-3/4 md:w-1/2 my-32">
          <h1 className="my-4 text-4xl font-bold">My Info</h1>
          <p className="mb-2 text-lg text-cyan-200">
            Name: <span className="text-white">{details.data?.name}</span>
          </p>
          <p className="mb-2 text-lg text-cyan-200">
            RegNo: <span className="text-white">{details.data?.regNo}</span>{" "}
          </p>
          <p className="mb-2 text-lg text-cyan-200">
            Block: <span className="text-white">{details.data?.block}</span>{" "}
          </p>
          <p className="mb-2 text-lg text-cyan-200">
            RoomNo: <span className="text-white">{details.data?.roomNo}</span>{" "}
          </p>
          <p className="mb-2 text-lg text-cyan-200">
            Mess: <span className="text-white">{details.data?.messType}</span>
          </p>
        </div>
      )}
      {loading && (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      )}

      {/* <Button onClick={handleWarden}>Warden Info</Button> */}
    </div>
  );
};

export default StudentInfo;
