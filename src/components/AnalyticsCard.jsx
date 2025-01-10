import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "chart.js/auto"; // Auto-importing and registering all chart components

const AnalyticsCard = () => {
  const [dates, setDates] = useState({ date1: "", date2: "" });
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const handleCalendar = (e) => {
    const { name, value } = e.target;
    setDates((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("https://example.com/api/analytics", {
        params: {
          startDate: dates.date1,
          endDate: dates.date2,
        },
      });

      const { labels, accomplished, progress, failed } = response.data;

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Accomplished",
            data: accomplished,
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            tension: 0.4,
          },
          {
            label: "Progress",
            data: progress,
            borderColor: "rgb(255, 206, 86)",
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            tension: 0.4,
          },
          {
            label: "Failed",
            data: failed,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            tension: 0.4,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching analytics data:", error);
    }
  };

  useEffect(() => {
    if (dates.date1 && dates.date2) {
      fetchData();
    }
  }, [dates]);

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Productivity in %",
        position: "left",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
        },
      },
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 0,
        },
      },
    },
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
      <div className="relative mb-8">
        <div className="absolute start-1">
          <h3 className="text-lg font-semibold">Focusing</h3>
          <p className="text-sm text-gray-600">Productivity analytics</p>
        </div>
        <div className="bg-gray-300 p-2 rounded-md shadow-sm shadow-black cursor-pointer absolute end-3">
          Date:{" "}
          <input
            name="date1"
            type="date"
            value={dates.date1}
            onChange={handleCalendar}
            className="p-1 rounded-md"
          />
          to{" "}
          <input
            name="date2"
            type="date"
            value={dates.date2}
            onChange={handleCalendar}
            className="p-1 rounded-md"
          />
        </div>
      </div>

      {/* Line Chart Section */}
      <div className="w-full h-60 bg-white p-4 rounded-lg flex items-center">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default AnalyticsCard;
