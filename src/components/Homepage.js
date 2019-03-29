import React, { Component } from 'react';
import Layout from './Layout';
import Body from './Body';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Body />
        </Layout>
      </div>
    );
  }
}
