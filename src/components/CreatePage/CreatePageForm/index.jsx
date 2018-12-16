import React, { Component } from "react";
import { Form, Text, Select, Option } from "informed";

import PageTypeDropDown from "../../PageTypeDropDown/";
import FormSwitch from "../../FormSwitch/";
class CreatePageForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const {currentPage} = this.props
    return (
      <Form id="simple-form">
        <PageTypeDropDown changeState={this.changeState} />
        <br />
        <hr />
        <div style={{ height: "100px" }} />
        <FormSwitch
          pageType={currentPage.pageType}
          changeState={this.changeState}
        />
        <div style={{ height: "200px" }} />
        <button
          type="submit"
          onClick={e => {
            this.handleNewPage(e);
          }}
        >
          Add Page
        </button>
        <br />
        {/* <button
          type="submit"
          onClick={e => {
            this.handleFormSubmit(e);
          }}
        >
          Create Website
        </button> */}
      </Form>
    );
  }
}
export default CreatePageForm