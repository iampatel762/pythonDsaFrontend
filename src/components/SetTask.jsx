import axios from "axios";
import React, { useState } from "react";

const SetTask = () => {
  // Initialize the state to hold form data
  const [formData, setFormData] = useState({
    time: "",
    deadline: "",
    task: "",
    priority: "",
    developedAreas: "",
    attachment: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update the corresponding field dynamically
    });
  };

  

  // Handle form submission
  const handleSubmit = async(e) => {
      e.preventDefault(); // Prevent the page from refreshing
      console.log("Form Data Submitted:", formData);
      try {
      
        const response = await axios.post('https://api.example.com/data', 
          {
            time: formData.time,
            deadline: formData.deadline,
            task: formData.task,
            priority:formData.priority,
            developedAreas:formData.developedAreas,
            attachment: formData.attachment,
          }
          , {
          headers: {
            'Content-Type': 'application/json'
        }
      });
      console.log(response.data);

    } catch (error) {
      console.error('There was an error posting the data!', error);
    }
  };

  return (
    <div className="bg-gray-100 p-2 rounded-lg shadow-lg">
      <div>
        <div className="relative">
          <div className="absolute start-1">
            <h3 className="text-lg font-semibold">Focusing</h3>
            <p className="text-sm text-gray-600">Add Task</p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="w-full h-32 bg-gray-100 rounded-lg flex">
          <form onSubmit={handleSubmit}>
            <input
              className="bg-slate-300 mx-4 p-2 my-2 rounded-md shadow-sm shadow-black"
              type="text"
              name="time"
              placeholder="Enter Time"
              value={formData.time}
              onChange={handleChange}
            />
            <input
              className="bg-slate-300 mx-4 p-2 my-2 rounded-md shadow-sm shadow-black"
              type="text"
              name="deadline"
              placeholder="Enter Date/Deadline"
              value={formData.deadline}
              onChange={handleChange}
            />
            <input
              className="bg-slate-300 mx-4 p-2 my-2 rounded-md shadow-sm shadow-black"
              type="text"
              name="task"
              placeholder="Enter Task"
              value={formData.task}
              onChange={handleChange}
            />
            <input
              className="bg-slate-300 mx-4 p-2 my-2 rounded-md shadow-sm shadow-black"
              type="text"
              name="priority"
              placeholder="Enter Priority"
              value={formData.priority}
              onChange={handleChange}
            />
            <input
              className="bg-slate-300 mx-4 p-2 my-2 rounded-md shadow-sm shadow-black"
              type="text"
              name="developedAreas"
              placeholder="Enter Developed Areas"
              value={formData.developedAreas}
              onChange={handleChange}
            />
            <input
              className="bg-slate-300 mx-4 p-2 my-2 rounded-md shadow-sm shadow-black"
              type="text"
              name="attachment"
              placeholder="Enter Attachment/Link"
              value={formData.attachment}
              onChange={handleChange}
            />
            <button
              className="bg-blue-500 mx-4 p-2 my-2 rounded-md shadow-sm shadow-black"
              type="submit"
            >
              ADD TASK
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetTask;
