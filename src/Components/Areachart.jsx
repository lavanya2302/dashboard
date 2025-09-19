import React from 'react'
import { Chart } from "react-google-charts";

function Areachart() {
    const data = ([
          ['Year', 'Sales', 'Expenses'],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

        const options = {
          title: 'Company Performance',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title text-center mb-3">Area Chart</h5>
        <Chart
          chartType="AreaChart"
          width="100%"
          height="300px"
          data={data}
          options={options}
        />
      </div>
    </div>
  )
}

export default Areachart