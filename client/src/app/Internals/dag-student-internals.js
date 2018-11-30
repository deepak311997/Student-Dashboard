import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { basePath } from '../../config/dag-config';
import LoadingContainer from "../../lib/components/loading/dag-loading-container";
import DAGHighchartComponent from "./dag-highchart-component";

const styles = () => ({

});

const colors = ['#6B5B95', '#DD4132', '#9E1030', '#FE840E', '#FF6F61', '#C62168', ' #8D9440', '#FFD662', '#00539C', '#D69C2F', '#343148', '#766F57', '#F1EA7F', '#006E6D',
'#DBB1CD', '#00A591', '#BFD641', '#EADEDB', '#2E4A62', '#DC4C46', '#9C9A40'];

class DAGInternalsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      internalMarks: {},
      loading: true,
    };
  }
  componentDidMount = () => {
    axios
      .get('/api/dashboard/')
      .then(response => {
        this.setState({ internalMarks: response.data[0].Internals, loading: false });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  getChart = () => {
    const {internalMarks} = this.state;

    this.subjects = [];
    this.content = [];
    internalMarks.theory.map((subject) => {
      this.subjects.push(subject);
    });
    internalMarks.lab.map((subject) => {
      this.subjects.push(subject);
    });
    this.subjects.forEach((subject, index) => {
      this.rand = Math.random() * 15;
      this.content.push(
          <Grid item={true} sm={4} md={4} lg={4}>
            <Paper style={{margin: 20, padding: 32}}>
            <DAGHighchartComponent
              containerId={subject.subjectName}
              internal={[subject.IA1,subject.IA2,subject.IA3]}
              maxVal={20}
              labels={['IA1','IA2','IA3']}
              colors={colors.slice(this.rand,this.rand+3)}
            />
            </Paper>
            <div className='subName'>{subject.fullSubjectName}</div>
          </Grid>
      );
    });
    return this.content;
  };

  render() {
    const {internalMarks} = this.state;

    return (
      <Grid container={true} spacing={16}>
        {Object.keys(internalMarks).length ? this.getChart() : <LoadingContainer/>}
      </Grid>
    );
  }
}

DAGInternalsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(DAGInternalsComponent));
