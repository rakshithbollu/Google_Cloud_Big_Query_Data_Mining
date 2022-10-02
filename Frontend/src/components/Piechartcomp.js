import React, { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import Chart from "react-apexcharts";
const axios = require("axios");

const Piechartcomp = () => {
  const [data, setdata] = useState([]);
  const [gen, setgen] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/cloud/agegroup");
      const data1 = [];
      const data2 = [];
      res.data.forEach((dt) => {
        data1.push(dt["users"]);
        data2.push(dt["generation"]);
      });
      setdata(data1);
      setgen(data2);
    }
    fetchData();
  }, [setdata, setgen]);

  return (
    <>
      <h3>NYC Bike Trips Users By Generation</h3>
      <p></p>
      <React.Fragment>
        <div className="container-fluid mb-3">
          <Chart
            type="pie"
            width={500}
            height={500}
            series={data}
            options={{
              title: { text: "Users By Age Group" },
              noData: { text: "Empty Data" },
              // colors:["#f90000","#f0f"],
              labels: gen,
            }}
          ></Chart>
        </div>
      </React.Fragment>
    </>
  );
};

export default Piechartcomp;
