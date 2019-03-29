import React, { Component } from 'react';
import './_Main.scss';
import Skill from './Skill';
import Protfolio from './Protfolio';
import EduCareer from './EduCareer';
import Nav from './Nav';

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <Nav />
        <Skill />
        <Protfolio />
        <EduCareer />
      </div>
    );
  }
}

export default Body;
