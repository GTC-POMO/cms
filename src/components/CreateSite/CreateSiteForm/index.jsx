import React, { Component } from "react";
import { AppConsumer } from "../../App/context";

class CreateSiteForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AppConsumer>
        {context => {
          <button
            type="submit"
            onClick={e => {
              context.createSiteSubmit(e);
            }}
          >
            Create Website
          </button>;
        }}
      </AppConsumer>
    );
  }
}
export default CreateSiteForm;
