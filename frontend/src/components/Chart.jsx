import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const Chart = () => {
  const dates = ["24 Aug", "31 Aug", "07 Sep", "14 Sep", "21 Sep"];

  // Cost data for the given dates
  const costs = [4, 4.5, 4.25, 5, 5.2, 5.7, 6, 6.7, 6.3, 7];

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Daily Costs",
        data: costs,
        fill: false,
        backgroundColor: "rgb(191,178,147)",
        borderColor: "rgb(0,0,0)",
        borderWidth: 2,
        pointRadius: 6,
        pointBackgroundColor: costs.map((cost) =>
          cost === 4.25 ? "red" : "rgba(75, 192, 192, 1)"
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Daily Costs from Aug 24 to Sep 21",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Cost",
        },
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <>
      <div className="flex-row md:flex justify-between items-center px-5 mt-10 w-[92%]">
        <div className="bg-[#bfb293] w-full md:w-[45%]  rounded-3xl">
          <div className=" mx-auto">
            <Line data={data} options={options} />
          </div>
        </div>
        <div className="bg-[#c4c3aa] w-full mx-auto mt-5 md:w-[45%]  rounded-3xl">
          <div className="mx-auto">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </>
  );
};
