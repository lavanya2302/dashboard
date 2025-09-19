import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
};

function Piechart() {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title text-center mb-3">Pie Chart</h5>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width="100%"
          height="300px"
        />
      </div>
    </div>
  );
}

export default Piechart;
