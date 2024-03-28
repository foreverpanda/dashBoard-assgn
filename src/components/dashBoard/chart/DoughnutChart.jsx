import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React from "react";

ChartJS.register(ArcElement, Tooltip);

function DoughnutChart() {
  const data = {
    labels: ["Yes", "No", "others"],
    datasets: [
      {
        label: "Poll",
        data: [3, 6, 9],
        backgroundColor: ["#93C5FD", "#D8B4FE", "pink"]
      }
    ]
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluinOptions) {
      const { ctx, data } = chart;

      ctx.save();
      ctx.font = "bolder 30px sans-serif";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
  
      ctx.fillText(
        "65% Gain",
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    }
  };

  const options = {};
  
  const chartContainerStyle = {
    height: "400px", // Adjust this value to set the desired height
    width: "auto" // You can also adjust the width if needed
  };

  return (
    <div style={chartContainerStyle}>
      <Doughnut data={data} options={options} plugins={[textCenter]}></Doughnut>
    </div>
  );
}

export default DoughnutChart;