import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const axios = require("axios");

const Histogramchart1 = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/cloud/tripduration");
      setdata(res.data);
    }
    fetchData();
  }, [setdata]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>NYC CITI BIKE TRIPS REPORT</h1>
      </div>
      <h3>Most hourly trip duration</h3>
      <p></p>
      <BarChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={30}
      >
        <XAxis
          dataKey="start_hour"
          scale="band"
          padding={{ left: 10, right: 10 }}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          dataKey="start_hours"
          fill="#8884d8"
          background={{ fill: "#eee" }}
        />
      </BarChart>
    </>
  );
};

export default Histogramchart1;
