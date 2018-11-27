import { Form, Text, Select, Option } from "informed";
import React, { Component } from "react";
import QuestionAnswerTextForm from "./QuestionAnswerTextForm"
import MultipleChoiceButtonsForm from "./MultipleChoiceButtonsForm"
import TextField from "./TextField";
import "../App.css";

class FormSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {pageType } = this.props;
    return (
      <React.Fragment>
        {pageType === "textAnswer" ? (
          <QuestionAnswerTextForm changeState={this.changeState} />
        ) : (
          <span />
        )}
        {pageType === "multipleChoiceButtons" ? (
          <MultipleChoiceButtonsForm changeState={this.changeState} />
        ) : (
          <span />
        )}
      </React.Fragment>
    );
  }
}

export default FormSwitch;
