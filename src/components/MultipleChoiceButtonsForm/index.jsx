import { Form, Text, Select, Option } from "informed";
import React, { Component } from "react";
import TextField from "../TextField";
import "./style.css";
import { AppConsumer } from "../App/context";

class MultipleChoiceButtonsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  makeChoices = amount => {
    let a = parseInt(amount);
    let six = 6
    console.log("in make choices", a, typeof a);
    console.log(typeof six)
    let arr = new Array(six).fill(six).map(item => {
      return <div>Hello</div>;
    });

    return (arr)
  };
  render() {
    return (
      <AppConsumer>
        {context => {
          return (
            <div>
              <h2>Multiple Choice Buttons Form</h2>
              <TextField
                changeState={context.changeState}
                labelText={"Question"}
                field={"question"}
                stateKey={"title"}
              />
              <br />
              <TextField
                labelText={"Amount of Choices"}
                field={"amount-of-choices"}
                stateKey={"amountOfChoices"}
                changeState={context.changeState}
              />
              {this.makeChoices(context.state.currentPage.amountOfChoices)}
            </div>
          );
        }}
      </AppConsumer>
    );
  }
}

export default MultipleChoiceButtonsForm;
