import React, { Component } from "react";
import { Form, Text, Select, Option } from "informed";

import PageTypeDropDown from "../../PageTypeDropDown/";
import FormSwitch from "../../FormSwitch/";
class CreatePageForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const {currentPage, handleNewPage, changeState} = this.props
    return (
      <Form id="simple-form">
        <PageTypeDropDown changeState={changeState} />
        <br />
        <hr />
        <div style={{ height: "100px" }} />
        <FormSwitch
          pageType={currentPage.pageType}
          changeState={changeState}
        />
        <div style={{ height: "200px" }} />
        <button
          type="submit"
          onClick={e => {
            handleNewPage(e);
          }}
        >
          Add Page
        </button>
        <br />
      </Form>
    );
  }
}
export default CreatePageForm