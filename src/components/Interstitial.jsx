import { Form, Text, Select, Option } from "informed";
import React, { Component } from "react";
import TextField from './TextField'
import "../App.css";

class Interstitial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {changeState} = this.props
    return (
      <React.Fragment>
        <h2>Interstitial Options</h2>
        <TextField
          changeState={changeState}
          labelText={"Title:"}
          field={"title"}
          stateKey={"title"}
        />
        <TextField changeState={changeState} labelText={"Timer or button to advance"} field={"timer-or-button"} stateKey={'timerOrButton'}/>
        <br/>
        <TextField
            labelText={"Background Color"}
            field={"background-color"}
            stateKey={"backgroundColor"}
            changeState={changeState}
          />
      </React.Fragment>
    );
  }
}

export default Interstitial;