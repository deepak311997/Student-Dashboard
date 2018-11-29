import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = () => ({
  button: {
    margin: 15
  },
});

class DAGSignupComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
  }
  render() {
    return (
      <div>
        <TextField
          hintText="Enter your First Name"
          floatingLabelText="First Name"
          onChange = {(event,newValue) => this.setState({first_name:newValue})}
        />
        <br/>
        <TextField
          hintText="Enter your Last Name"
          floatingLabelText="Last Name"
          onChange = {(event,newValue) => this.setState({last_name:newValue})}
        />
        <br/>
        <TextField
          hintText="Enter your Email"
          type="email"
          floatingLabelText="Email"
          onChange = {(event,newValue) => this.setState({email:newValue})}
        />
        <br/>
        <TextField
          type = "password"
          hintText="Enter your Password"
          floatingLabelText="Password"
          onChange = {(event,newValue) => this.setState({password:newValue})}
        />
        <br/>
        <Button label="Submit" primary={true} className={classes.button} onClick={(event) => this.handleClick(event)}/>
      </div>
    );
  }
}

export default withStyles(styles)(DAGSignupComponent);
