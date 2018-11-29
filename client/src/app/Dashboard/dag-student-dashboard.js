import React from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';

import Grid from "@material-ui/core/Grid";

import LoadingContainer from "../../lib/components/loading/dag-loading-container";
import DAGChartComponent from "./dag-chart-component";

class DAGStudentDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      studentDetails: [],
    };
    this.evenCycle = ['February','March','April','May','June'];
    this.oddCycle = ['August','September','October','November','December'];
    this.color = ['red','blue','green','orange','yellow','brown','black','pink'];
    this.lightColors = ['rgba(255, 99, 132, .5)', 'rgb(255, 159, 64, .5)', 'rgb(255, 205, 86, .5)', 'rgb(75, 192, 192, .5)', 'rgb(54, 162, 235, .5)', 'rgb(153, 102, 255, .5)', 'rgb(201, 203, 207, .5)'];
  }

  componentDidMount = () => {
    axios.get('/api/dashboard/')
      .then(response => {
        this.setState({ studentDetails: response.data[0], loading: false });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  getAttendanceDataSet = (data, title) => {
    const {studentDetails} = this.state;

    this.dataSet = [];
    data.map((subject, index) =>{
      this.data = [];
      subject.Percentages.map((sub) => {
        this.data.push(sub.percentage);
      });
      this.dataSet.push({
        label: subject.subjectName,
        data: this.data,
        backgroundColor: this.color[index],
        borderColor: this.color[index],
        fill: false,
      });
    });
    this.chartData = {
      'type': 'line',
      'labels': studentDetails.Semester % 2 === 0 ? this.evenCycle : this.oddCycle,
      'data': this.dataSet,
      'xAxisLabel': 'Month',
      'yAxisLabel': 'Attendance(%)',
      'title': title,
    };
    return this.chartData;
  };

  getAttendanceCharts = () => {
    const {studentDetails} = this.state;
    const chartIds = ['Theory Attendance','Lab Attendance'];

    this.data1 = this.getAttendanceDataSet(studentDetails.Attendance.theory, chartIds[0]);
    this.data2 = this.getAttendanceDataSet(studentDetails.Attendance.lab, chartIds[1]);
    this.chartData = [this.data1,this.data2];

    this.charts = [];
      this.chartData.forEach((subjects, index) => {
        this.charts.push(
            <DAGChartComponent key={chartIds[index]} chartId={chartIds[index]} chartData={this.chartData[index]}/>
        );
    });
      return this.charts;
  };

  getAverage = (IA1, IA2, IA3) => {
    if (IA1 > IA2 && IA1 > IA3) {
      return IA2 > IA3 ? Math.round((IA1 + IA2) / 2) : Math.round((IA1 + IA3) / 2);
    } else if (IA2 > IA1 && IA2 > IA3) {
      return IA1 > IA3 ? Math.round((IA2 + IA1) / 2) : Math.round((IA2 + IA3) / 2);
    } else {
      return IA1 > IA2 ? Math.round((IA1 + IA3) / 2) : Math.round((IA2 + IA3) / 2);
    }
  };

  getInternalsDataSet = (data, title, type) => {
    const {studentDetails} = this.state;
    this.headers = [];

    if(type === 'theory')
      studentDetails.Internals.theory.map((subject) => this.headers.push(subject.subjectName));
    else
      studentDetails.Internals.lab.map((subject) => this.headers.push(subject.subjectName));

    this.internalAverages = [];
    data.map((subject, index) =>{
        this.internalAverages.push(this.getAverage(subject.IA1,subject.IA2,subject.IA3));
    });
    this.chartData = {
      'type': 'polarArea',
      'labels': this.headers,
      'data': this.internalAverages,
      'backgroundColor': this.lightColors,
      'title': title,
    };
    return this.chartData;
  };

  getInternalsCharts = () => {
    const {studentDetails} = this.state;
    const chartIds = ['Theory Assessment','Lab Assessment'];

    this.data1 = this.getInternalsDataSet(studentDetails.Internals.theory, chartIds[0], 'theory');
    this.data2 = this.getInternalsDataSet(studentDetails.Internals.lab, chartIds[1], 'lab');
    this.chartData = [this.data1,this.data2];

    this.charts = [];
    this.chartData.forEach((subjects, index) => {
      this.charts.push(
        <DAGChartComponent key={chartIds[index]} chartId={chartIds[index]} chartData={this.chartData[index]}/>
      );
    });
    return this.charts;
  };

  render() {
    const { loading } = this.state;

    return (
      <div>
        {!loading ?
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {this.getAttendanceCharts()}
            {this.getInternalsCharts()}
          </div>
         :
          <LoadingContainer />
        }
      </div>
    );
  }
}

export default withRouter(DAGStudentDashboard);
