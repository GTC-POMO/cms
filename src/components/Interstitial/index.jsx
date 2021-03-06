import { Form, Text, Select, Option } from "informed";
import React, { Component } from "react";
import TextField from "../TextField";
import "./style.css";

class Interstitial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <h2>Interstitial Options</h2>
        <TextField labelText={"Title:"} field={"title"} stateKey={"title"} />
        <TextField
          labelText={"Timer or button to advance"}
          field={"timer-or-button"}
          stateKey={"timerOrButton"}
        />
        <br />
        <TextField
          labelText={"Background Color"}
          field={"background-color"}
          stateKey={"backgroundColor"}
        />
      </React.Fragment>
    );
  }
}

export default Interstitial;
