import React, {Component} from "react";

class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <div
          className="toggle toggle--prev"
          onClick={this.props.setPreviousSlide}
        >
          Prev
        </div>
        <div className="toggle toggle--next" onClick={this.props.setNextSlide}>
          Next
        </div>
      </div>
    );
  }
}

export default Controls;
