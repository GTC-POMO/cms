import React, { Component } from "react";
import CreatePageForm from "./CreatePageForm/";
class CreatePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <CreatePageForm
          currentPage={this.props.currentPage}
          changeState={this.props.changeState}
          handleNewPage={this.props.handleNewPage}
        />
      </React.Fragment>
    );
  }
}
export default CreatePage;
