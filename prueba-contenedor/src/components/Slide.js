import React, {Component} from "react";

class Slide extends Component {
  render() {
    var classes = this.props.active ? "slide slide--active" : "slide";
    return (
      <div className={classes}>
        <img src={this.props.imagePath} alt={this.props.imageAlt} />
        <h2>{this.props.title}</h2>
        <h3>{this.props.subtitle}</h3>
        <p>{this.props.text}</p>
        <a href={this.props.actionHref}>{this.props.action}</a>
      </div>
    );
  }
}

export default Slide;
