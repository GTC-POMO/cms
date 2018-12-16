import { Form, Text, Select, Option } from "informed";
import React, { Component } from "react";
import "./style.css";
import { AppConsumer } from "../App/context";

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { labelText, field, stateKey } = this.props;
    return (
      <AppConsumer>
        {context => {
          return (
            <React.Fragment>
              <label>{labelText}</label>
              <Text
                field={field}
                id={`${field}-field`}
                onChange={e => {
                  context.changeCurrentPageState(stateKey, e);
                }}
              />
            </React.Fragment>
          );
        }}
      </AppConsumer>
    );
  }
}

export default TextField;
