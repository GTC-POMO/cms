import React, { Component } from "react";
import "./App.css";
import WriteFile from "./components/WriteFile.js";
import PageTypeDropDown from "./components/PageTypeDropDown";
import FormSwitch from './components/FormSwitch'
import QuestionAnswerTextForm from "./components/QuestionAnswerTextForm"
import MultipleChoiceButtonsForm from "./components/MultipleChoiceButtonsForm"
import TextField from "./components/TextField";
import { Form, Text, Select, Option } from "informed";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pages: [], currentPageIndex: 1, currentPage: {} };
  }

  writeFile = () => {
    WriteFile(this.state);
  };

  changeState = (key, value) => {
    let prevObject = this.state.currentPage;
    prevObject[key] = value.target.value;

    this.setState({ currentPage: prevObject }, () => {
      console.log(this.state);
    });
  };
  handleFormSubmit = event => {
    this.writeFile(this.state);
    event.preventDefault();
  };
  handleNewPage = event => {
    let newPagesArray = this.state.pages;
    newPagesArray.push(this.state.currentPage);
    this.setState({ pages: newPagesArray, currentPage: {} }, () =>
      console.log(this.state)
    );
    event.preventDefault();
  };
  render() {
    let {currentPage} = this.state;
    return (
      <div>
        <Form id="simple-form">
          <PageTypeDropDown changeState={this.changeState} />
          <br />
          <hr/>
          <div style={{ height: "100px" }} />
          <FormSwitch pageType={currentPage.pageType}/>
          <div style={{ height: "200px" }} />
          <button
            type="submit"
            onClick={e => {
              this.handleNewPage(e);
            }}
          >
            Add Page
          </button>
          <br/>
          <button
            type="submit"
            onClick={e => {
              this.handleFormSubmit(e);
            }}
          >
            Create Website
          </button>
        </Form>
      </div>
    );
  }
}

export default App;
