import React from "react";
import { useNavigate } from "react-router-dom";

const boxCSS =
  "flex flex-col justify-center items-center w-64 h-64 border-solid border-white border-2 rounded-xl hover:w-72 hover:h-72 transition-all delay-150 cursor-pointer";

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="w-full h-full">
        <h1 className="text-white text-5xl font-bold text-center my-20">
          {" "}
          Welcome back!
        </h1>
        <div className="flex justify-around flex-wrap">
          <button onClick={()=> navigate('/studentLogin')} className={boxCSS}>
            <svg
              class="w-20 h-20 my-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 17V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M5 15V1m8 18v-4"
              />
            </svg>
            <h1 className="text-xl font-bold">Student</h1>
          </button>
          <button className={boxCSS} onClick={()=> navigate('/faculty')}>
            <svg
              class="w-20 h-20 my-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 11 14H9a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 10 19Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <h1 className="text-xl font-bold"> Faculty</h1>
          </button>
          <button className={boxCSS} onClick={()=> navigate('/warden')}>
            <svg
              class="w-20 h-20 my-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 1h12M3 1v16M3 1H2m13 0v16m0-16h1m-1 16H3m12 0h2M3 17H1M6 4h1v1H6V4Zm5 0h1v1h-1V4ZM6 8h1v1H6V8Zm5 0h1v1h-1V8Zm-3 4h2a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1Z"
              />
            </svg>
            <h1 className="text-xl font-bold">Warden</h1>
          </button>
        </div>
        <p className="italic fixed bottom-1 right-1">made by team SeeSS</p>
      </div>
    </>
  );
};

export default Home;
