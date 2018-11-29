import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import Chart from "chart.js";

const styles = () => ({});

class DAGChartComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const element = document.getElementById(this.props.chartId);

    if(this.props.chartData.type === 'line')
      this.getLineChart(element);
    else if(this.props.chartData.type === 'polarArea')
      this.getPolarChart(element);
  };

  getPolarChart = (element) => {
    const {chartData} = this.props;

    const myChart = new Chart(element, {
      type: 'polarArea',
      data: {
        datasets: [{
            data: chartData.data,
            backgroundColor: chartData.backgroundColor,
            border: [],
          }],
        labels: chartData.labels,
      },
      options: {
        responsive: true,
        legend: {
          position: 'right',
          labels: { fontColor: 'white'}
        },
        title: {
          display: true,
          position: 'left',
          text: chartData.title,
          fontColor: 'white'
        },
        scale: {
          ticks: {
            beginAtZero: true
          },
          reverse: false
        },
        animation: {
          animateRotate: false,
          animateScale: true
        }
      }
    });
  };

  getLineChart = (element) => {
    const {chartData } = this.props;

    const myChart = new Chart(element, {
      type: 'line',
      height: '100%',
      data: {
        labels: chartData.labels,
        fontColor: 'white',
        datasets: chartData.data
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: chartData.title,
          fontColor: 'white'
        },
        tooltips: {
          mode: "index",
          intersect: false
        },
        hover: {
          mode: "nearest",
          intersect: true
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: chartData.xAxisLabel,
                fontColor: 'white',
              },
              ticks:{fontColor: 'white'}
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: chartData.yAxisLabel,
                fontColor: 'white',
              },
              ticks:{fontColor: 'white'}
            }
          ]
        },
        legend: {
          boxWidth: 20,
          labels: { fontColor: 'white'}
        }
      },
    });
  };

  render() {
    const { classes, chartId } = this.props;

    return(
    <div className='chartjs-container'>
      <canvas id={chartId} />
    </div>);
  }
}

DAGChartComponent.propTypes = {
  classes: PropTypes.object,
  chartId: PropTypes.string,
  chartData: PropTypes.object
};

export default withStyles(styles)(DAGChartComponent);
