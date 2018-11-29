import React from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { basePath } from '../../config/dag-config';
import DAGAttendanceHighchartComponent from './dag-attendanceHighChart-component';
import LoadingContainer from "../../lib/components/loading/dag-loading-container";

const styles = () => ({

});
const colors = [['#6B5B95', '#DD4132', '#9E1030', '#FE840E'],['#FF6F61', '#C62168', ' #8D9440', '#FFD662'],['#00539C', '#D69C2F', '#343148', '#766F57'],['#F1EA7F', '#006E6D',
  '#DBB1CD', '#00A591'],['#BFD641', '#EADEDB', '#2E4A62', '#DC4C46']];

class DAGAttendanceComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendance: {},
      loading: true,
    };
    this.evenCycle = ['February','March','April','May','June'];
    this.oddCycle = ['August','September','October','November','December'];
  }

  componentDidMount = () => {
    axios
      .get('/api/dashboard/')
      .then(response => {
        this.setState({ attendance: response.data[0].Attendance, loading: false });
      })
      .catch(function(error) {
        console.log(error);
      });
    };

  getGraphs = () => {
    const { attendance } = this.state;

    this.graph = [];
    this.subjects = [];
    this.content = [];
    attendance.theory.map((subject) => {
      this.subjects.push(subject);
    });
    attendance.lab.map((subject) => {
      this.subjects.push(subject);
    });
    this.subjects.map((type) => {
      this.graph = [];
      this.data = {};
      this.colors = colors[Math.floor(Math.random() * 5)];
      for(let i=0; i<4; i++) {
        this.dataset = [];
        type.Percentages.map((month) => {
          this.dataset.push(month.weekly[i]);
        });
        this.graph.push({
          label: `Week ${(i + 1)}`,
          backgroundColor: this.colors[i],
          borderColor: colors[this.index],
          borderWidth: 1,
          data: this.dataset,
        });
      }
      this.data = {
        labels: this.oddCycle,
        datasets: this.graph,
      };
      this.content.push(
          <Grid key={type.subjectName} item={true} sm={4} md={4} lg={4}>
            <Paper>
            <DAGAttendanceHighchartComponent dataset={this.data} title={type.fullSubjectName}/>
            </Paper>
          </Grid>
      );
      });
    return this.content;
  };

  render() {
    const { loading } = this.state;

    return (
      <Grid container={true} spacing={32}>
        {!loading ? this.getGraphs(): <LoadingContainer/>}
      </Grid>
    );
  }
}

DAGAttendanceComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(DAGAttendanceComponent));
