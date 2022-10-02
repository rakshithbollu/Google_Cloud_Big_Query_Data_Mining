import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const axios = require("axios");

const Linechartcomp = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/cloud/tripgrowth");
      setdata(res.data);
    }
    fetchData();
  }, [setdata]);

  return (
    <>
      <h3>Trip Growth During 2013-2018</h3>
      <p></p>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="trip"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </>
  );
};

export default Linechartcomp;
