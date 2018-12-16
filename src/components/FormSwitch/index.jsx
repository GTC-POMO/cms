import React, { Component } from "react";
import QuestionAnswerTextForm from "../QuestionAnswerTextForm/";
import MultipleChoiceButtonsForm from "../MultipleChoiceButtonsForm/";
import Interstitial from "../Interstitial";
import "./style.css";
import { AppConsumer } from "../App/context";

class FormSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  formSwitch = pageType => {
    switch (pageType) {
      case "textAnswer":
        return <QuestionAnswerTextForm />;
      case "multipleChoiceButtons":
        return <MultipleChoiceButtonsForm />;
      case "interstitial":
        return <Interstitial />;
      default:
        return <div>Pick a page type</div>;
    }
  };
  render() {
    return (
      <AppConsumer>
        {context => (
          <div>
            hello
            <br />
            {this.formSwitch(context.state.currentPage.pageType)}
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default FormSwitch;
