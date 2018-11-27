import React, { Component } from "react";
import "./App.css";
import WriteFile from "./components/WriteFile.js";
import { Form, Text } from "informed";
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
    //  this.setState({page})
   let newPagesArray = this.state.pages;
   newPagesArray.push(this.state.currentPage);
   this.setState({pages:newPagesArray, currentPage:{}}, ()=> console.log(this.state))
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <Form id="simple-form">
          <label htmlFor="name-field">Title:</label>
          <Text
            field="title"
            id="title-field"
            onChange={e => {
              this.changeState("title", e);
            }}
          />
          <label htmlFor="name-field">Background Color</label>
          <Text
            field="background-color"
            id="color-field"
            onChange={e => {
              this.changeState("backgroundColor", e);
            }}
          />
          <button
            type="submit"
            onClick={e => {
              this.handleNewPage(e);
            }}
          >
            Add Page
          </button>
          <br />
          <div style={{ height: "200px" }} />
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
