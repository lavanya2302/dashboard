import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales"],
  ["2016", 1000],
  ["2017", 1170],
  ["2018", 660],
  ["2019", 1030],
];

const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

function Linechart() {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title text-center mb-3">Line Chart</h5>
        <Chart
          chartType="LineChart"
          data={data}
          options={options}
          width="100%"
          height="300px"
        />
      </div>
    </div>
  );
}

export default Linechart;
