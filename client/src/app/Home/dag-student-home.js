import React from 'react';
import axios from 'axios';
import Grid from '@material-ui/core';

class DAGStudentHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentDetails: '',
    };
  }

  componentDidMount = () => {
    axios.get('/api/Home/').then( res => {
      this.setState({ studentDetails: res.data });
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  handleAttendance = () => {
    const {studentDetails} = this.state;
    this.attendance = 0;

    for(let i=0;i<8;i++) {
      this.attendence = this.attendence + studentDetails[0].attendence[i].Percentage;
    }
    return this.attendance/8;
  };

  getAverage = (IA1,IA2,IA3) => {
    if(IA1>IA2 && IA1>IA3) {
      return IA2>IA3 ? (IA1+IA2)/2 : (IA1+IA3)/2;
    }
    else if(IA2>IA1 && IA2>IA3) {
      return IA1>IA3 ? (IA2+IA1)/2 : (IA2+IA3)/2;
    }
    else {
      return IA1>IA2 ? (IA1+IA3)/2 : (IA2+IA3)/2;
    }
  };

  handleInternals = (IA) => {
    const {studentDetails} = this.state;

    this.content = [];
    studentDetails[0].Internals[0].map( (subject) => {
      this.content.push(
        <Grid item={true} sm={2} md={2} lg={2} xl={2}>
          <h2>subject.SubjectName</h2>
          <h3>{this.getAverage(subject.IA1,subject.IA2,subject.IA3)}</h3>
        </Grid>
      );
    });
    return this.content;
  };

  render() {
    return(
      <div>Home</div>
  );
  }
}

export default DAGStudentHome;
