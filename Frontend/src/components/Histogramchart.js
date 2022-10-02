import * as agCharts from "ag-charts-community";
import { AgChartsReact } from "ag-charts-react";
import React, { useEffect, useState } from "react";
const axios = require("axios");

const Histogramchart = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/cloud/tripduration");
      setdata(res.data);
    }
    fetchData();
  }, [setdata]);
  const options = {
    title: {
      text: "Race demographics",
    },
    subtitle: {
      text: "Number of participants by age",
    },
    data: data,
    series: [
      {
        type: "histogram",
        xKey: "tripminutes",
        xName: "Participant Age",
      },
    ],
    legend: {
      enabled: false,
    },
    axes: [
      {
        position: "bottom",
      },
      {
        position: "left",
      },
    ],
  };
  return (
    <>
      <AgChartsReact options={options} />;
    </>
  );
};

export default Histogramchart;
