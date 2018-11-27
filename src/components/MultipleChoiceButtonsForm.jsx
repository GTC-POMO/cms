import { Form, Text, Select, Option } from "informed";
import React, { Component } from "react";
import TextField from "./TextField";
import "../App.css";

class MultipleChoiceButtonsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { changeState } = this.props;
    return (
      <React.Fragment>
        <h2>Multiple Choice Buttons Form</h2>
        <TextField
          changeState={changeState}
          labelText={"Question"}
          field={"question"}
          stateKey={"title"}
        />
        <br />
        <TextField
          labelText={"Amount of Choices"}
          field={"amount-of-choices"}
          stateKey={"amountOfChoices"}
          changeState={changeState}
        />
      </React.Fragment>
    );
  }
}

export default MultipleChoiceButtonsForm;
