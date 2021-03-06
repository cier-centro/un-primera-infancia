import React, {Component} from "react";
import Slide from "./Slide";

class Slides extends Component {
  render() {
    var currentSlide = this.props.currentSlide;
    var slidesNodes = this.props.data.map(function(slideNode, index) {
      var isActive = currentSlide === index;
      return (
        <Slide
          active={isActive}
          key={slideNode.id}
          imagePath={slideNode.imagePath}
          imageAlt={slideNode.imageAlt}
          title={slideNode.title}
          subtitle={slideNode.subtitle}
          text={slideNode.text}
          action={slideNode.action}
          actionHref={slideNode.actionHref}
        />
      );
    });
    return <div className="slides">{slidesNodes}</div>;
  }
}

export default Slides;
