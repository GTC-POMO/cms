import React, { Component } from "react";
import "./App.css";
import WriteFile from "./functions/WriteFile.js";
import CreatePage from "./components/CreatePage/index";
import CreateSite from "./components/CreateSite/index";
import PageTypeDropDown from "./components/PageTypeDropDown/";
import FormSwitch from "./components/FormSwitch/";
import { Form, Text, Select, Option } from "informed";
const StateContext = React.createContext(null);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      currentPageIndex: 1,
      currentPage: {},
      buildPage: {},
      website: {}
    };
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
  createSiteSubmit = event => {
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
    let { currentPage } = this.state;
    return (
      <div>
        <div className="flex-row width-100vw height-100vh">
          <div className="flex-1">
            <CreatePage
              currentPage={currentPage}
              changeState={this.changeState}
              handleNewPage={this.handleNewPage}
            />
          </div>
          <div className="flex-1">
            <CreateSite createSiteSubmit={this.createSiteSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
