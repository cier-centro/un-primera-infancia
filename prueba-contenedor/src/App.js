import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

import Slides from "./components/Slides";
import Controls from "./components/Controls";
import {slidesInfo} from "./slidesinfo.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      slidesInfo,
      currentSlide: 0
    };
    this.setNextSlide = this.setNextSlide.bind(this);
    this.setPreviousSlide = this.setPreviousSlide.bind(this);
  }
  setNextSlide() {
    var next = this.state.currentSlide + 1;
    if (next > this.state.slidesInfo.length - 1) {
      next = 0;
    }
    this.setState({currentSlide: next});
  }
  setPreviousSlide() {
    var prev = this.state.currentSlide - 1;
    if (prev < 0) {
      prev = this.state.slidesInfo.length - 1;
    }
    this.setState({currentSlide: prev});
  }
  render() {
    return (
      <div className="App">
        <div className="slideshow">
          <Slides
            data={this.state.slidesInfo}
            currentSlide={this.state.currentSlide}
          />
          <Controls
            setNextSlide={this.setNextSlide}
            setPreviousSlide={this.setPreviousSlide}
          />
        </div>{" "}
      </div>
    );
  }
}

export default App;
