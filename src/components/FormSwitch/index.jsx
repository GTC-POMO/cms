import React, { Component } from "react"
import QuestionAnswerTextForm from "../QuestionAnswerTextForm/"
import MultipleChoiceButtonsForm from "../MultipleChoiceButtonsForm/"
import Interstitial from "../Interstitial"
import "./style.css"

class FormSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  formSwitch = () => {
    const { pageType, changeState } = this.props;
    switch (pageType) {
      case "textAnswer":
        return <QuestionAnswerTextForm changeState={changeState} />;
      case "multipleChoiceButtons":
        return <MultipleChoiceButtonsForm changeState={changeState} />;
      case "interstitial":
        return <Interstitial changeState={changeState} />;
      default:
        return <div>Pick a page type</div>;
    }
  };
  render() {
    return <React.Fragment>{this.formSwitch()}</React.Fragment>;
  }
}

export default FormSwitch;
