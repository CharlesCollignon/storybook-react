import React from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type LinechartProps = {
  title: string;
  width: number;
  height: number;
  series: any;
};

const Linechart = (props: LinechartProps) => {
  const { title, width, height, series } = props;
  const options = {
    title: {
      text: title,
    },
    chart: {
      width: width,
      height: height,
    },

    series: series,
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"chart"}
      options={options}
    />
  );
};
Linechart.propTypes = {
  title: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  series: PropTypes.array,
};

export default Linechart;
