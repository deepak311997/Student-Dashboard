import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  button: {
    margin: 15
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class DAGLoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleClick = event => {
    var apiBaseUrl = "http://localhost:4000/api/";
    const payload = {
      email: this.state.username,
      password: this.state.password
    };
    axios
      .post("/api/login", payload)
      .then(function(response) {
        console.log(response);
        if (response.data.code === 200) {
          console.log("Login Successfull !!!");
          this.props.history.push({
            pathname: `${basePath}/dashboard`
          });
        } else if (response.data.code === 204) {
          console.log("Username and Password do not match");
          alert("Username and Password do not match");
        } else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const {classes} = this.props;

    return (
          <div>
            <TextField
              label='UserName'
              className={classes.textField}
              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
              margin="normal"
              variant="outlined"
            />
            <br />
            <TextField
              label='Password'
              type="password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
              margin="normal"
              variant="outlined"
            />
            <br />
            <Button
              label="Submit"
              color='primary'
              className={classes.button}
              onClick={event => this.handleClick(event)}
            />
        </div>
    );
  }
}

export default withStyles(styles)(DAGLoginComponent);
