import React from "react";

class Text extends React.Component {
  render() {
    return (
      <section className='gomo-player__text'>
        <h2>{this.props.data.title}</h2>
      </section>
    );
  }
}
export default Text;