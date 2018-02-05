import React from 'react';
import fetchEndpoint from './components/js/util/fetchEndpoint';
import Card from './components/js/modules/Card';
require('./components/scss/util/_default');

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dat: []
    };
  }

  componentDidMount() {
    this.getJsonData((dat) => this.setState({dat}));
  }

  render() {
    if (this.props.onRender) {
      this.props.onRender();
    }

    if (this.state.dat.length > 0) {
      return(
          <Card
          title={this.state.dat[0].page.title}
          src={this.state.dat[0].image.url}
          alt={this.state.dat[0].image.altText}
          series={this.state.dat[0].page.series}
          pageContent={this.state.dat[0].page.abstract}
      />
      );
    }

    return(
        <div>Loading ...</div>
      );
  }

  getJsonData(cb) {
    const url = './endpoint/promo-model.json';

    return fetchEndpoint(url, (dat) => {
      cb(dat);
    });
  }
}

Component.propTypes = {
  onRender: React.PropTypes.func
};
