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
  ResponsiveContainer,
} from "recharts";
const axios = require("axios");

const Genderbarchart = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/cloud/gender");
      setdata(res.data);
    }
    fetchData();
  }, [setdata]);

  return (
    <>
      <h3>Number of Users based on the Gender</h3>
      <p></p>
      <BarChart
        width={730}
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
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count_male" fill="#8884d8" />
        <Bar dataKey="count_female" fill="#82ca9d" />
      </BarChart>
    </>
  );
};

export default Genderbarchart;
