import React from "react";
import img from '../staticfile/file.jpg'
const ProfileCard = ({handleTab}) => {

  const handleStat=(value)=>{

    handleTab(value)
  }


  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center relative">

      {/* Profile Picture */}
      <div className="relative w-24 h-24 mx-auto">
        <img
          src={img}
          alt="Kristin Watson"
          className="w-24 h-24 rounded-full object-cover border-2 border-green-200 shadow-md"
        />
        <div className="absolute bottom-2 right-2 bg-gray-600 rounded-full p-[1px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            viewBox="0 0 24 24"
            className="w-4 h-4"
          >
            <circle cx="12" cy="12" r="12" />
          </svg>
        </div>
      </div>

      {/* User Info */}
      <h3 className="mt-4 text-lg font-semibold">Suraj Babu Patel</h3>
      <p className="text-sm text-gray-500">Computer Engineer</p>

      {/* Stats */}
      <div className="flex justify-around mt-6">
        {/* Stat 1 */}
        <div onClick={()=>handleStat("set_task")} className="cursor-pointer flex flex-col items-center">
          <div className="bg-orange-100 text-orange-600 p-2 rounded-full shadow-md">
           
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="24px" 
              viewBox="0 -960 960 960" 
              width="24px" fill="rgb(255, 165, 0)">
                <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/>
                </svg>
          </div>
          <p className="mt-2 text-sm font-medium">set task</p>
        </div>

        {/* Stat 2 */}
        <div onClick={()=>handleStat("completed_task")} className="cursor-pointer flex flex-col items-center">
          <div className="bg-red-100 text-red-600 p-2 rounded-full shadow-md">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="24px" 
            viewBox="0 -960 960 960" 
            width="24px" 
            fill="rgb(255, 165, 0)">
              <path d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z"/>
          </svg>
          </div>
          <p className="mt-2 text-sm font-medium">mark task</p>
        </div>

        {/* Stat 3 */}
        <div onClick={()=>handleStat("analytics")} className=" cursor-pointer flex flex-col items-center">
          <div className="bg-yellow-100 text-yellow-600 p-2 rounded-full shadow-md">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="24px" viewBox="0 -960 960 960" 
            width="24px" fill="rgb(255, 165, 0)">
              <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z"/>
          </svg>
          </div>
          <p className="mt-2 text-sm font-medium">analysis</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
