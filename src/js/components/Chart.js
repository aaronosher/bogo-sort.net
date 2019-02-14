import React, { Component } from 'react'
import PropTypes from 'prop-types';
import * as d3 from "d3";

class Chart extends Component {

  constructor(props) {
    super(props);
    this.drawChart = this.drawChart.bind(this);
  }

  componentDidUpdate() {
    console.info('called');
    this.drawChart();
  }

  drawChart() {
    const { data, width, height, id } = this.props;

    const heightFactor = 1000/height;
      
    const svg = d3.select("#" + id)
      .attr("width", 2 * data.length)
      .attr("height", height);

    svg.selectAll("*").remove();
    
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 2)
      .attr("y", (d, i) => height - d / heightFactor)
      .attr("width", 1)
      .attr("height", (d, i) => d / heightFactor)
      .attr("fill", "green");

    
    // svg.selectAll("text")
    //   .data(data)
    //   .enter()
    //   .append("text")
    //   .text((d) => d)
    //   .attr("x", (d, i) => i * 70)
    //   .attr("y", (d, i) => height - (d /2) - 3);


  }

  render() {
    const { id } = this.props;

    return (
      <React.Fragment>
        <svg id={id}></svg>
      </React.Fragment>
    );
  }
}

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Chart;
