import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

import BigCalendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dates from "react-big-calendar/lib/utils/dates";
import events from "./calender-events";
import moment from "moment";

const styles = () => ({
  bigCalender: {
    height: "84vh",
    backgroundColor: "rgba(,,,.4)"
  }
});

class DAGCalenderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  eventStyleGetter = (event, start, end, isSelected) => {
    const backgroundColor = "#28a7b7";
    const style = {
      backgroundColor: backgroundColor,
      borderRadius: "px",
      opacity: .8,
      color: "black",
      border: "px",
      display: "block"
    };
    return {
      style: style
    };
  };

  dayPropGetter = (day) => {
    const backgroundColor = "#f6f6f6b5";
    const style = {
      backgroundColor: backgroundColor,
      borderRadius: "px",
      opacity: .8,
      color: "black",
      border: "px",
      display: "block"
    };
    return {
      style: style
    };
  };

  render() {
    const { classes } = this.props;
    const localizer = BigCalendar.momentLocalizer(moment);
    let allViews = Object.keys(BigCalendar.Views).map(
      k => BigCalendar.Views[k]
    );

    return (
      <BigCalendar
        className={classes.bigCalender}
        localizer={localizer}
        events={events}
        step={60}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={this.eventStyleGetter}
        dayPropGetter={this.dayPropGetter}
      />
    );
  }
}

export default withStyles(styles)(withRouter(DAGCalenderComponent));
