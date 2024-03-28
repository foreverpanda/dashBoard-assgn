import React from "react";
import {
  BarChart as BarGraph,
  ResponsiveContainer, Bar, Tooltip,
  XAxis,
  YAxis,
} from "recharts";
function MainChart() {
  const Data = [
    {
      month: "Jan",
      items: "0",
    },
    {
      month: "Feb",
      items: "0",
    },
    {
      month: "March",
      items: "0",
    },
    {
      month: "April",
      items: "0",
    },
    {
      month: "May",
      items: "0",
    },
    {
      month: "June",
      items: "0",
    },
    {
      month: "July",
      items: "0",
    },
    {
      month: "Aug",
      items: "0",
    },
    {
      month: "Sept",
      items: "50",
    },
    {
      month: "Oct",
      items: "10",
    },
    {
      month: "Nove",
      items: "0",
    },
    {
      month: "Dec",
      items: "0",
    },
  ];

  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={Data}
      margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
        <XAxis
          dataKey={"month"}
          tickLine={false}
          axisLine={false}
          stroke={"#050440"}
          fontSize={12}
   
          
        />
        <Tooltip />
      
        <Bar dataKey={"items"} radius={[4,4,4,4]} fill="#5a32eb"
            
        />
      </BarGraph>
    </ResponsiveContainer>
  );
}

export default MainChart;
