import React, { Component } from 'react';
import Highlight from 'react-highlight';

import './_Skill.scss';

export default class Skill extends Component {
  render() {
    return (
      <div className="Skill">
        <section id="one">
          <h1 className="Skill__title">Skill</h1>
          <Highlight language="javascript" className="Skill__code">
            {`
          import {
                  HTMl5,
                  CSS3,
                  JavaScript,
                  React.js } from './My skill';

          import { 
                  Git,
                  GitHub,
                  Slack } from './Collaboration tool';

          import {
                  SSR,  
                  TypeScript,
                  Vue.js } from './Interested in these days';        

          `}
          </Highlight>
        </section>
      </div>
    );
  }
}
