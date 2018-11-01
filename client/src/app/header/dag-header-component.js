import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import config from '../../config/dag-config';

class DAGHeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    const basePath = config.basePath;
  }

  handleHomePage = () => {
      this.props.history.push({
        pathname: `${basePath}/Home`});
  }
  handlePersonalPage = () => {
      this.props.history.push({
        pathname: `${basepath}/Personal-Details`});
  }
  handleAttendencePage = () => {
      this.props.history.push({
        pathname: `${basepath}/Attendence`});
  }
  handleInternalAssessment = () => {
      this.props.history.push({
        pathname:`${basepath}/Internals`});
  }

  render() {
    const { classes } = this.props;

    return (
        <div className="header">
          <List>
            <ListItem className='listItem'>
              <ListItemText
                className="listItemText"
                primary="Student Dashboard"
              />
            </ListItem>
            <Divider />
            <Divider />
            <ListItem onClick={this.handleHomePage}>
              <img src='./img/home.svg'/>
              <ListItemText className="listItemText" primary="Home" />
            </ListItem>
            <ListItem onClick={this.handlePersonalPage}>
              <img src='./img/personal.svg'/>
              <ListItemText className="listItemText" primary="Personal Details" />
            </ListItem>
            <ListItem onClick={this.handleAttendencePage}>
              <img src='./img/attendance.svg'/>
              <ListItemText className="listItemText" primary="Attendence" />
            </ListItem>
            <ListItem onClick={this.handleInternalAssessment}>
              <img src='./img/internals.svg'/>
              <ListItemText className="listItemText" primary="Internal Assessment"/>
            </ListItem>
          </List>
        </div>
    );
  }
}

export default DAGHeaderComponent;
