import React from "react";

const TaskCard = ({ type, percentage }) => {
  return (
    
    <div className="relative bg-gradient-to-r bg-gray-300 p-6 rounded-lg">
        <div className="absolute top-5 flex flex-col">
            <h3 className="text-lg font-semibold">{type}</h3>
            
        </div>
        <div className="absolute bottom-5">
            <p className="text-2xl font-bold">{percentage}%</p>
            <p className="text-sm">Avg. Completed</p>
        </div>
    </div>
  );
};

export default TaskCard;
