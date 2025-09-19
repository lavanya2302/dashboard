import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#b87333"],
  ["Silver", 10.49, "silver"],
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"],
];

function Columnchart() {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title text-center mb-3">Column Chart</h5>
        <Chart
          chartType="ColumnChart"
          data={data}
          width="100%"
          height="300px"
        />
      </div>
    </div>
  );
}

export default Columnchart;
