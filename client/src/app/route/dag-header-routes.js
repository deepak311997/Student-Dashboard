import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom';

import config from '../../config/dag-config';

import DAGStudentDashboard from "../Dashboard/dag-student-dashboard";
import DAGAttendanceComponent from '../Attendence/dag-student-attendance';
import DAGInternalsComponent from '../Internals/dag-student-internals';
import DAGUploadComponent from '../Upload/dag-upload-component'
import DAGAboutComponent from '../About/dag-aboutus-component';
import DAGLoginComponent from '../Login/dag-login-component';
import DAGCalenderComponent from '../CalenderEvents/dag-calenderEvents-component';
import DAGNotesComponent from '../Notes/dag-notes-component';

const basePath = config.path.basePath;

class DAGHeaderRoutes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact={true} path={`${basePath}/dashboard`} component={DAGStudentDashboard}/>
        <Route exact={true} path={`${basePath}/attendance`} component={DAGAttendanceComponent}/>
        <Route exact={true} path={`${basePath}/internals`} component={DAGInternalsComponent}/>
        <Route exact={true} path={`${basePath}/upload`} component={DAGUploadComponent}/>
        <Route exact={true} path={`${basePath}/aboutus`} component={DAGAboutComponent}/>
        <Route exact={true} path={`${basePath}/login`} component={DAGLoginComponent}/>
        <Route exact={true} path={`${basePath}/calofevents`} component={DAGCalenderComponent}/>
        <Route exact={true} path={`${basePath}/notes`} component={DAGNotesComponent}/>
        <Route render={() => <Redirect to={{ pathname: `${basePath}/dashboard`, }}/>}/>
      </Switch>
    );
  }
}

export default withRouter(DAGHeaderRoutes);
