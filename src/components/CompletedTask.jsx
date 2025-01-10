import axios from "axios";
import React, { useEffect, useState } from "react";

const CompletedTask = () => {
  const [taskData, setCompleteTaskData] = useState([]);

  useEffect(() => {
    axios
      .get("https://example.com/api/data") // Replace with your actual API URL
      .then((response) => {
        console.log(response.data);
        setCompleteTaskData(response.data); // Assuming response.data is an array of tasks
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures it runs only on mount

  const handleMark = async (key) => {
    try {
      const task = taskData[key];
      const response = await axios.post(
        "url", // Replace with your API endpoint
        {
          expireTime: task.expireTime,
          title: task.title,
          profession: task.profession,
          seriousness: task.seriousness,
          link: task.link,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error("There was an error posting the data!", error);
    }
  };

  return (
    <div className="bg-gray-100 p-2 rounded-lg shadow-lg">
      <div className="ms-2">
        <h3 className="text-lg font-semibold">Focusing</h3>
        <p className="text-sm text-gray-600">Completed Task</p>
      </div>

      <div className="pb-5 h-40">
        <div className="bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="w-full overflow-y-scroll h-40 scrollbar-hide">
            {taskData.map((item, key) => (
              <div
                key={key}
                className="bg-slate-300 mx-4 p-2 my-2 rounded-md shadow-sm shadow-black flex flex-row justify-around"
              >
                <div className="">{item.expireTime}</div>
                <div>{item.title}</div>
                <div>{item.profession}</div>
                <div
                  className={`${
                    item.seriousness === "emergency" && "text-red-500"
                  } ${item.seriousness === "medium" && "text-yellow-500"} ${
                    item.seriousness === "ease" && "text-green-500"
                  }`}
                >
                  {item.seriousness}
                </div>
                <div>{item.link}</div>
                <button
                  onClick={() => handleMark(key)}
                  className="px-3 py-[1px] bg-amber-300 rounded-md"
                >
                  mark ✔
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedTask;
