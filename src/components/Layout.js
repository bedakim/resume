import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './_Layout.scss';

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
