import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Chart from "chart.js";

function getChart(dataset, title) {
  const myChart = new Chart(title, {
    type: 'bar',
    data: dataset,
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: title,
      }
    }
  });
}

class DAGAttendanceHighchartComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    const { dataset, title} = this.props;
    getChart(dataset,title);
  };
  render() {
    const {title} =this.props;

    return <canvas id={title}/>;
  }
}

DAGAttendanceHighchartComponent.propTypes = {
  classes: PropTypes.object,
  dataset: PropTypes.object,
  title: PropTypes.string,
};

export default DAGAttendanceHighchartComponent;
