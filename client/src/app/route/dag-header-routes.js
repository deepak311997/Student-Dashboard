import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";

import config from "../../config/dag-config";

import DAGStudentDashboard from "../Dashboard/dag-student-dashboard";
import DAGAttendanceComponent from "../Attendence/dag-student-attendance";
import DAGInternalsComponent from "../Internals/dag-student-internals";
import DAGUploadComponent from "../Upload/dag-upload-component";
import DAGAboutComponent from "../About/dag-aboutus-component";
import DAGLoginComponent from "../Login/dag-login-component";
import App from "../dap-app-component";
import DAGCalenderComponent from "../CalenderEvents/dag-calenderEvents-component";
import DAGNotesComponent from "../Notes/dag-notes-component";
import DAGTimeTableComponent from "../ClassTimeTable/dag-timetable-component";
import DAGMainComponent from "../Main/dag-main-component";

const basePath = config.path.basePath;

class DAGHeaderRoutes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <DAGMainComponent />
          <Switch>
            <Route
              exact={true}
              path={`${basePath}/dashboard`}
              component={DAGStudentDashboard}
            />
            <Route
              exact={true}
              path={`${basePath}/attendance`}
              component={App}
            />
            <Route
              exact={true}
              path={`${basePath}/internals`}
              component={App}
            />
            <Route exact={true} path={`${basePath}/upload`} component={App} />
            <Route exact={true} path={`${basePath}/aboutus`} component={App} />
            <Route
              exact={true}
              path={`${basePath}/login`}
              component={DAGLoginComponent}
            />
            <Route
              exact={true}
              path={`${basePath}/calofevents`}
              component={App}
            />
            <Route exact={true} path={`${basePath}/notes`} component={App} />
            <Route
              exact={true}
              path={`${basePath}/timetable`}
              component={App}
            />
            <Route
              render={() => <Redirect to={{ pathname: `${basePath}/login` }} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default DAGHeaderRoutes;
