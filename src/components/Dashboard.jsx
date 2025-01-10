import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import TaskCard from "./TaskCard";
import AnalyticsCard from "./AnalyticsCard";
import MeetingsList from "./TaskList";
import DevelopedAreas from "./DevelopedArea";
import SetTask from "./SetTask";
import CompletedTask from "./CompletedTask";
import axios from "axios";


const Dashboard = () => {

    const [dashboardData,setDashboardData]=useState({
      username:'',
      priorityTaskPercentage:'',
      additionalTaskPercentage:'',
      profession:''
    });

    const [activeTab,setActiveTAb]=useState("analytics");
    const handleActiveTab=(value)=>{
      setActiveTAb(value);
    }

    useEffect(()=>{
      
      axios
      .get('https://example.com/api/data') 
      .then((response) => {
        console.log(response.data);
        const { name, priorityTaskPercentage, additionalTaskPercentage,profession } = response.data;
        setDashboardData({
          username:name,
          priorityTaskPercentage:priorityTaskPercentage,
          additionalTaskPercentage:additionalTaskPercentage,
          profession:profession
        });
        console.log(dashboardData.username, dashboardData.priorityTaskPercentage, dashboardData.additionalTaskPercentage,dashboardData.profession);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    },[dashboardData])
    
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome, {dashboardData.username.split(" ")[0]}</h1>
        {/* <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        /> */}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-3 gap-6">
            <ProfileCard name={dashboardData.username} profession={dashboardData.profession} handleTab={handleActiveTab}/>           
            <TaskCard type="Prioritized tasks" percentage={dashboardData.priorityTaskPercentage} />
            <TaskCard type="Additional tasks" percentage={dashboardData.additionalTaskPercentage} />
            
          </div>
          {
            activeTab ==="analytics" && <AnalyticsCard />
          }
           {
            activeTab ==="set_task" && <SetTask />
          }
           {
            activeTab ==="completed_task" && <CompletedTask />
          }
          
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <MeetingsList />
          <DevelopedAreas />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
