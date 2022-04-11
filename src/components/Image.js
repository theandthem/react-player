import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <section className='image'>
        <img src={this.props.data.src} alt=''/>
      </section>
    );
  }
}
export default Image;