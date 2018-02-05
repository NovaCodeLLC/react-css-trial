import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Component';

window.onload = () => {
  const renderFunc = () => {
    console.log('component rendered');
  };

  ReactDOM.render(
    <Component onRender={renderFunc} />,
    document.querySelector('#container')
  );
};
