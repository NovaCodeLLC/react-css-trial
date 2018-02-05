import React from 'react';
require('./../../scss/modules/_Image');

export default class Image extends React.Component {
  render() {
    const {
      src,
      title,
      alt
    } = this.props;

    return (
      src ? <img src={src} title={title} alt={alt} /> : null
    );
  }
}

Image.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string,
  title: React.PropTypes.string
};
