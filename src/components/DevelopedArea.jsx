import axios from "axios";
import React, { useEffect, useState } from "react";

const DevelopedAreas = () => {
  const [skills, setSkills] = useState([
    { skill: "Sport Skills", percentage: 0 },
    { skill: "Profession", percentage: 0 },
    { skill: "Leadership", percentage: 0 },
    { skill: "Personal", percentage: 0 },
  ]);

  useEffect(() => {
    axios
      .get("https://example.com/api/data") // Replace with your actual API URL
      .then((response) => {
        console.log(response.data);
        const {
          SportPercentage,
          professionPercentage,
          leadershipPercentage,
          personalPercentage,
        } = response.data;

        // Update skills state with new percentages
        setSkills([
          { skill: "Sport Skills", percentage: SportPercentage },
          { skill: "Profession", percentage: professionPercentage },
          { skill: "Leadership", percentage: leadershipPercentage },
          { skill: "Personal", percentage: personalPercentage },
        ]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to run only on mount

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold">Developed Areas</h3>
      <div className="mt-4 space-y-4">
        {skills.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm">
              <span>{item.skill}</span>
              <span>{item.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-lg mt-1">
              <div
                className={`h-full rounded-lg ${
                  item.percentage < 25
                    ? "bg-red-500"
                    : item.percentage < 50
                    ? "bg-amber-500"
                    : item.percentage < 75
                    ? "bg-blue-500"
                    : "bg-green-500"
                }`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopedAreas;
