import React, { Component } from "react";
import WriteFile from "../../functions/WriteFile.js";
import CreatePage from "../CreatePage/index";
import CreateSite from "../CreateSite/index";
import { AppProvider } from "./context";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      currentPageIndex: 1,
      currentPage: {},
      buildPage: {},
      website: {},
    };
  }

  writeFile = () => {
    WriteFile(this.state);
  };
  changeCurrentPageState = (key, value) => {
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
    return (
      <AppProvider
        value={{
          state: this.state,
          handleNewPage: this.handleNewPage,
          createSiteSubmit: this.createSiteSubmit,
          changeCurrentPageState: this.changeCurrentPageState,
          writeFile: this.writeFile
        }}
      >
        <div className="flex-row width-100vw height-100vh">
          <div className="flex-1">
            <CreatePage/>
          </div>
          <div className="flex-1">
            <CreateSite />
          </div>
        </div>
      </AppProvider>
    );
  }
}

export default App;
