import { Form, Text, Select, Option } from "informed";
import React, { Component } from "react";
import "../App.css";

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { changeState, labelText, field, stateKey } = this.props;
    return (
      <React.Fragment>
        <label>{labelText}</label>
        <Text
          field={field}
          id={`${field}-field`}
          onChange={e => {
            changeState(stateKey, e);
          }}
        />
      </React.Fragment>
    );
  }
}

export default TextField;
