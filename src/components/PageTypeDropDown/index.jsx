import { Form, Text, Select, Option } from "informed";
import React, { Component } from "react";
import "./style.css";
import { AppConsumer } from "../App/context";

class PageTypeDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <AppConsumer>
        {context => (
          <React.Fragment>
            <label htmlFor="page-type-field">Page Type</label>
            <Select
              onChange={e => {
                context.changeCurrentPageState("pageType", e);
              }}
              field="status"
              id="select-status"
            >
              <Option value="" disabled>
                Select One...
              </Option>
              <Option value="textAnswer">Text Answer</Option>
              <Option value="multipleChoiceButtons">
                Multiple Choice Buttons
              </Option>
              <Option value="interstitial">Interstitial</Option>
            </Select>
          </React.Fragment>
        )}
      </AppConsumer>
    );
  }
}

export default PageTypeDropDown;
