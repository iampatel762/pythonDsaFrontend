import axios from "axios";
import React, { useEffect, useState } from "react";

const TaskList = () => {
  const [todayTaskData, setTodayTaskData] = useState([]);

  const handleTaskList = () => {
    axios
      .get("https://example.com/api/data") // Replace with your actual API URL
      .then((response) => {
        console.log(response.data);
        setTodayTaskData(response.data); // Assuming response.data is an array of tasks
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    handleTaskList(); // Fetch data when the component mounts
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold border-b">My Today Task</h3>
      <ul className="mt-4 space-y-4">
        {todayTaskData.map((item, index) => (
          <li
            key={index}
            className="flex justify-between text-sm space-x-[2px] shadow-sm rounded-sm bg-slate-200 py-1 px-4"
          >
            <span>{item.time}</span>
            <span>{item.title}</span>
            <span>{item.platform}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={handleTaskList}
        className="absolute bottom-[1px] right-[50%] left-[50%]"
      >
        <span className="h-4 w-4 hover:bg-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="34px"
            viewBox="0 -960 960 960"
            width="34px"
            fill="rgb(211, 211, 211)"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default TaskList;
