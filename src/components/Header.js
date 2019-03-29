import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './_Layout.scss';
import 'font-awesome/css/font-awesome.min.css';
import profile from '../images/profile.jpg';

export default class Header extends Component {
  static defaultProps = {
    profile: profile,
  };
  render() {
    return (
      <>
        <div className="Header">
          <div className="Header__header" />
          <div className="Header__description">
            <img className="proimg" src={profile} alt="#" />
            <div className="description">
              <h1>김 민 엽</h1>
              <h2>Kim Min Yeob</h2>
              <h3>Junior Front End Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, esse aut? Similique fugiat optio praesentium dolorem,
                consequatur eligendi! Soluta provident consectetur eligendi
                nobis quos error, voluptatum tenetur excepturi at nesciunt.
              </p>
            </div>
          </div>
          <div className="Header__info">
            <ul className="icon">
              <li>
                <a href="mailto:stankim0525@gmail.com">
                  <i className="fa fa-google fa-2x" />
                  <br />
                  stankim0525@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/bedakim">
                  <i className="fa fa-github fa-2x" />
                  <br />
                  github.com/bedakim
                </a>
              </li>
              <li>
                <a href="tel:010-6689-6811">
                  <i className="fa fa-phone fa-2x" />
                  <br />
                  010.6689.6811
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
