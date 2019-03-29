import React, { Component } from 'react';
import './_Main.scss';
import { Link } from 'react-router-dom';

export default class Logo extends Component {
  render() {
    return (
      <div>
        <nav className="Body__nav">
          <ul className="Body__ul">
            <li className="Body__li">
              <Link to="/">Main</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
