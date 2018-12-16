import React, { Component } from "react";

class CreateSiteForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      const {createSiteSubmit} = this.props
    return (
      <button
        type="submit"
        onClick={e => {
         createSiteSubmit(e);
        }}
      >
        Create Website
      </button>
    );
  }
}
export default CreateSiteForm