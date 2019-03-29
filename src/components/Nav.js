import React, { Component } from 'react';
import './_Main.scss';
import { Link } from 'react-router-dom';
export default class Nav extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <nav className="Body__nav">
          <ul className="Body__ul">
            <li className="Body__li">
              <a href="#one" className="Body__a">
                Skill
              </a>
            </li>
            <li>
              <a href="#two" className="Body__a">
                Protfolio
              </a>
            </li>
            <li>
              <a href="#three" className="Body__a">
                Edu & Career
              </a>
            </li>
            <li>
              <Link to="/">Main</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
