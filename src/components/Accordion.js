import React from "react";

class Accordion extends React.Component {
  render() {
    return (
      <section className='gomo-player__accordion'>
        <h1>This is an Accordion!</h1>
        <h2>{this.props.data.title}</h2>
      </section>
    );
  }
}
export default Accordion;