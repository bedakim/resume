import React, { Component } from 'react';
// import facebook from './images/sns_facebook.png';
// import instagram from './images/sns_instagram.png';
import './_Layout.scss';
export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="Footer">
          <div className="footer-div">
            <div className="footer-container">
              <p>감사합니다.</p>
              <footer>© 2019 Kim Min Yeob</footer>
            </div>
            {/* <div className="sns-container">
              <a href="https://www.instagram.com/baeminchan_official/">
                <img src={instagram} alt="배민찬인스타그램계정" />
              </a>
              <a href="https://www.facebook.com/baeminchanofficial">
                <img src={facebook} alt="배민찬페이스북계정" />
              </a>
            </div> */}
          </div>
        </div>
      </>
    );
  }
}
