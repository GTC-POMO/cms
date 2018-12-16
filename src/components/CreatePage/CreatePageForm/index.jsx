import React, { Component } from "react";
import { Form } from "informed";
import PageTypeDropDown from "../../PageTypeDropDown/";
import FormSwitch from "../../FormSwitch/";
import { AppConsumer } from "../../App/context";

class CreatePageForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppConsumer>
        {context => (
          <React.Fragment>
            <Form id="simple-form">
              <PageTypeDropDown />
              <br />
              <hr />
              <div style={{ height: "100px" }} />
              <FormSwitch/>
              <div style={{ height: "200px" }} />
              <button
                type="submit"
                onClick={e => {
                  context.handleNewPage(e);
                }}
              >
                Add Page
              </button>
              <br />
            </Form>
          </React.Fragment>
        )}
      </AppConsumer>
    );
  }
}
export default CreatePageForm;


