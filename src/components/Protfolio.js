import React, { Component } from 'react';
import './_Protfolio.scss';
import { Link } from 'react-router-dom';
import lottegiants from '../images/lottegiants.png';
import baseball from '../images/baseball.png';
import baeminchan from '../images/baeminchan.png';

export default class Protfolio extends Component {
  static defaultProps = {
    img: [baeminchan, lottegiants, baseball],
  };

  render() {
    const { img } = this.props;

    return (
      <div className="Project">
        <section id="two">
          <h1 className="Project__title">Protfolio</h1>
          <div className="Project__img">
            {img.map((i, index) => (
              <div className="holder" key={index}>
                <Link to={`/project/${index}`}>
                  <img src={i} alt="projectImage" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}
