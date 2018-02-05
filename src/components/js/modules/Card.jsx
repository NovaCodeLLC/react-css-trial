import React from 'react';
import Image from './Image';
require('./../../scss/modules/_Card.scss');

export default class Card extends React.Component {
    render() {
        const {
            src,
            title,
            alt,
            series,
            pageContent
        } = this.props;

        return (
            <div className='col-3 cardContainer'>
                {this.getImage(src, title, alt)}
                {this.getSeries(series)}
                {this.getpageTitle(title)}
                {this.getContent(pageContent)}
            </div>
        );
    }

    getContent(pageContent) {

        let truncText = this.truncateText(pageContent);

        return(
          truncText ?
          <div className='cardContent'>
              {truncText}
          </div> : null
        );
    }

    getpageTitle(title) {
        return(
            title ?
                <div className ='cardTitle'>
                    {title}
                </div> : null
        );
    }

    getImage(src, title, alt) {

        return (
            src ? <Image className='cardImage' src={src} title={title} alt={alt} /> : null
        );
    };

    getSeries(series) {

        return (
            series ?
            <div className='cardSeries'>
                |&nbsp;&nbsp;&nbsp;&nbsp;
                    SERIES TAG
                &nbsp;&nbsp;&nbsp;&nbsp;|
            </div> :
            null
        );
    }

    truncateText(str) {
        let length = 250;
        let ending = '...';

        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        }

        return str;
    }
}

Card.propTypes = {
  series: React.PropTypes.string,
  title: React.PropTypes.string,
  src: React.PropTypes.string,
  alt: React.PropTypes.string,
  pageContent: React.PropTypes.string
};
