import { Form, Text, Select, Option } from "informed";
import React, { Component } from "react";
import TextField from '../TextField'
import "./style.css";

class QuestionAnswerTextForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {changeState, question} = this.props
    return (
      <React.Fragment>
        <h2>Text Answer Page</h2>
        <TextField changeState={this.props.changeState} labelText={"Question"} field={"question"} stateKey={'title'}/>
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

export default QuestionAnswerTextForm;
