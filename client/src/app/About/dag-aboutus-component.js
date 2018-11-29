import React from 'react';
import { withRouter } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class DAGAboutComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Grid container={true} style={{justifyContent: 'center'}}>
          <Grid item={true} sm={6} md={6} lg={4}>
            <Paper className='Paper center-align'>
            <div className='center-align'>
                <h3 style={{fontFamily: 'Osb', fontSize: 25, color: '#3131b4'}}>DAG Student Dashboard</h3>
                <h5>Developed by: </h5>
                <h5 style={{color:'#f2f2f2', fontSize: 17, marginTop: -15}}> Deepak V</h5>
                <h5 style={{color:'#f2f2f2', fontSize: 17, marginTop: -15}}> Gautham N</h5>
                <h5 style={{color:'#f2f2f2', fontSize: 17, marginTop: -15}}> Ayesha Misbah</h5>
                <h5 style={{color:'#f2f2f2', fontSize: 17}}>Atria Institute of Technology</h5>
              <h5 style={{color:'#f2f2f2', fontSize: 17,marginTop: -15}}>Department of Computer Science &amp; Engineering</h5>
              </div>
              <div className='center-align' style={{padding: 10}}>
                <p style={{fontFamily: 'Ossb', fontSize: 17}}>Ayesha: +91 83475 78946</p>
                <p><a style={{color:'#f2f2f2'}} href="mailto:ayeshamisbah1296@gmail.com">ayeshamisbah1296@gmail.com</a></p>
              </div>
                <div className='center-align' style={{padding: 10}}>
                  <p style={{fontFamily: 'Ossb', fontSize: 17}}>Gautham: +91 96547 09863</p>
                  <p><a style={{color:'#f2f2f2'}} href="mailto:gauthamn46@gmail.com">gauthamn46@gmail.com</a></p>
                </div>
              <div className='center-align' style={{padding: 10}}>
                <p style={{fontFamily: 'Ossb', fontSize: 17}}>Deepak: +91 8147 900416</p>
                <p><a style={{color:'#f2f2f2'}} href="mailto:deepak311997@gmail.com">deepak3111997@gmail.com</a></p>
              </div>
            </Paper>
          </Grid>
      </Grid>
    );
  }
}

export default withRouter(DAGAboutComponent);

