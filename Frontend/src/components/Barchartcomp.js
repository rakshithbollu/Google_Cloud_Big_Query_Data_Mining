import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from "recharts";
const axios = require("axios");

const Barchartcomp = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/cloud/topbike");
      setdata(res.data);
    }
    fetchData();
  }, [setdata]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>NYC CITI BIKE TRIPS REPORT</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3>Most Popular Bike Stations</h3>
      </div>
      <p></p>
      <BarChart
        width={950}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 50,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="start_station_name"></XAxis>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="num_trips" fill="#8884d8" />
      </BarChart>
    </>
  );
};

export default Barchartcomp;
