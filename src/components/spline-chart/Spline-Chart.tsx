import * as React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options: Highcharts.Options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      type: "spline",
      data: [1, 2, 1, 4, 3, 6],
    },
  ],
};

const SplineChart = (): JSX.Element => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default SplineChart;
