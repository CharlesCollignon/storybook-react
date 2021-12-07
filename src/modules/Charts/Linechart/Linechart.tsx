import React from "react";
// import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface LinechartProps {
  title: string;
  width: number;
  height: number;
  series: any;
}

const Linechart = (props: LinechartProps) => {
  const options = {
    title: {
      text: props.title,
    },
    chart: {
      width: props.width,
      height: props.height,
    },

    series: props.series,
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"chart"}
      options={options}
    />
  );
};
// Linechart.propTypes = {
//   title: PropTypes.string,
//   width: PropTypes.number,
//   height: PropTypes.number,
//   series: PropTypes.array,
// };

export default Linechart;
