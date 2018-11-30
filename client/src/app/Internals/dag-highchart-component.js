import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';
import solidGauge from 'highcharts/modules/solid-gauge';
highchartsMore(Highcharts);
solidGauge(Highcharts);

function getHighchart(containerId, data, maxVal, labels, colors) {
  Highcharts.chart(containerId, {
    chart: {
      type: 'solidgauge',
    },

    title: {
      text: containerId,
      style: {
        fontSize: '24px'
      }
    },

    tooltip: {
      borderWidth: 0,
      backgroundColor: 'none',
      shadow: false,
      style: {
        fontSize: '14px'
      },
      pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
      positioner: function (labelWidth) {
        return {
          x: (this.chart.chartWidth - labelWidth) / 2,
          y: (this.chart.plotHeight / 2) + 15
        };
      }
    },

    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [{
        outerRadius: '112%',
        innerRadius: '88%',
        backgroundColor: Highcharts.Color(colors[0])
          .setOpacity(0.3)
          .get(),
        borderWidth: 0
      }, {
        outerRadius: '87%',
        innerRadius: '63%',
        backgroundColor: Highcharts.Color(colors[1])
          .setOpacity(0.3)
          .get(),
        borderWidth: 0
      }, {
        outerRadius: '62%',
        innerRadius: '38%',
        backgroundColor: Highcharts.Color(colors[2])
          .setOpacity(0.3)
          .get(),
        borderWidth: 0
      }]
    },

    yAxis: {
      min: 0,
      max: maxVal,
      lineWidth: 0,
      tickPositions: []
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false
        },
        linecap: 'round',
        stickyTracking: false,
        rounded: true
      }
    },

    series: [{
      name: labels[0],
      data: [{
        color: colors[0],
        radius: '112%',
        innerRadius: '88%',
        y: data[0]
      }]
    }, {
      name: labels[1],
      data: [{
        color: colors[1],
        radius: '87%',
        innerRadius: '63%',
        y: data[1]
      }]
    }, {
      name: labels[2],
      data: [{
        color: colors[2],
        radius: '62%',
        innerRadius: '38%',
        y: data[2]
      }]
    }],
    credits: {
      enabled: false,
    },
  });
}

class DAGHighchartComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    const {containerId, internal, maxVal, labels, colors} = this.props;
    getHighchart(containerId, internal, maxVal, labels, colors);
  };
  render() {
    const {containerId} =this.props;

    return <div id={containerId}/>;
  }
}

DAGHighchartComponent.propTypes = {
  classes: PropTypes.object,
  containerId: PropTypes.string,
  internal: PropTypes.array,
  maxValue: PropTypes.number,
  labels: PropTypes.array,
  colors: PropTypes.array,
};

export default DAGHighchartComponent;
