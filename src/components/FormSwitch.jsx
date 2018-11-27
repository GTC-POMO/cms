import React, { Component } from "react";
import QuestionAnswerTextForm from "./QuestionAnswerTextForm"
import MultipleChoiceButtonsForm from "./MultipleChoiceButtonsForm"
import Interstitial from "./Interstitial"
import "../App.css";

class FormSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {pageType, changeState } = this.props;
    return (
      <React.Fragment>
        {pageType === "textAnswer" ? (
          <QuestionAnswerTextForm changeState={changeState} />
        ) : (
          <span />
        )}
        {pageType === "multipleChoiceButtons" ? (
          <MultipleChoiceButtonsForm changeState={changeState} />
        ) : (
          <span />
        )}
         {pageType === "interstitial" ? (
          <Interstitial changeState={changeState} />
        ) : (
          <span />
        )}
      </React.Fragment>
    );
  }
}

export default FormSwitch;
