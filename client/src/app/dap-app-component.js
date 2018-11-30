import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import DAGStudentDashboard from "./Dashboard/dag-student-dashboard";
import DAGAttendanceComponent from "./Attendence/dag-student-attendance";
import DAGInternalsComponent from "./Internals/dag-student-internals";
import DAGUploadComponent from "./Upload/dag-upload-component";
import DAGAboutComponent from "./About/dag-aboutus-component";
import DAGCalenderComponent from "./CalenderEvents/dag-calenderEvents-component";
import DAGNotesComponent from "./Notes/dag-notes-component";
import DAGTimeTableComponent from "./ClassTimeTable/dag-timetable-component";
import config from "../config/dag-config";

const basePath = config.path.basePath;

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    if(sessionStorage.getItem("isLoggedIn") === "false") {
      this.props.history.push({pathname: `${basePath}/login`});
    }
    const url = this.props.location.href;
    switch(url) {
      case `${basePath}/dashboard`:
        this.props.history.push({pathname: url});
        break;
      case `${basePath}/attendance`:
        this.props.history.push({pathname: url});
        break;
      case `${basePath}/internals`:
        this.props.history.push({pathname: url});
        break;
      case `${basePath}/upload`:
        this.props.history.push({pathname: url});
        break;
      case `${basePath}/aboutus`:
        this.props.history.push({pathname: url});
        break;
      case `${basePath}/calofevents`:
        this.props.history.push({pathname: url});
        break;
      case `${basePath}/notes`:
        this.props.history.push({pathname: url});
        break;
      case `${basePath}/timetable`:
        this.props.history.push({pathname: url});
        break;
      default:
        this.props.history.push({pathname: `${basePath}/login`});
        break;
    }
  };

  render() {
    return(<React.Fragment/>);
  }
}

export default App;
