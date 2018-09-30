import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const styles = () => {

};

class DAGHeaderComponent extends React.Component {
  constructor(props) {
    super(props);
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
            <ListItem>
              <ListItemText className="listItemText" primary="Home" />
            </ListItem>
            <ListItem>
              <ListItemText className="listItemText" primary="Personal Details" />
            </ListItem>
            <ListItem>
              <ListItemText className="listItemText" primary="Attendence" />
            </ListItem>
            <ListItem>
              <ListItemText className="listItemText" primary="Internal Assessment"/>
            </ListItem>
          </List>
        </div>
    );
  }
}

export default DAGHeaderComponent;
