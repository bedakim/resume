import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Footer from './Footer';
import './_Main.scss';
import Logo from './Logo';

class Baeminchan extends Component {
  render() {
    return (
      <>
        <Logo />
        <div className="Baeminchan">
          <div className="Baeminchan__info">
            <h1 className="Baeminchan__title">Baeminchan Copy</h1>
            <h3>
              <a href="https://baeminchan.netlify.com">Page</a>
            </h3>
            <span className="Baeminchan__role">
              <strong>ROLE :</strong> Front-end, CartPage, MyPage /
            </span>
            <span className="Baeminchan__date"> 2018.12.03 ~ 2018.12.20</span>
          </div>
          <article className="Baeminchan__article">
            <h2 className="Baeminchan__h2">Experience</h2>
            <ol className="Baeminchan__ol">
              <li>
                <strong>React, Sass</strong>를 활용하여 배민찬 사이트 핵심기능
                요약 및 구현
              </li>
              <li>
                백엔드와 IOS가 한팀이 되어 기획, 디자인, 개발, 서비스배포
                사이클을 경험
              </li>
              <li>
                3주간의 프로젝트로 Github을 적극 활용하여 일정관리, 커밋규칙
                등을 관리하고, 협업하는 방법과 이슈 충돌에대해 팀원들과
                고민하고, 해결하는 과정에서 <strong>커뮤니케이션 능력</strong>을
                기름.
              </li>
              <li>
                SPA를 위한 <strong>React router </strong>사용.
              </li>
              <li>
                <strong>사용기술:</strong> React, Scss, React-Strap, Git,
                GitHub, Slack
              </li>
            </ol>
          </article>
        </div>
        <Footer />
      </>
    );
  }
}
class Lotte extends Component {
  render() {
    return (
      <>
        <Logo />
        <div className="Lotte">
          <div className="Lotte__info">
            <h1 className="Lotte__title">Lotte</h1>
            <h3>
              <a href="https://gifted-hypatia-6969f6.netlify.com">Page</a>
            </h3>
            <span className="Lotte__role">
              <strong>ROLE :</strong> Front-end, Single-project/
            </span>
            <span className="Lotte__date"> 2018.11.07 ~ 2018.11.09</span>
          </div>
          <article className="Lotte__article">
            <h2 className="Lotte__h2">Experience</h2>
            <ol className="Lotte__ol">
              <li>HTML5, CSS3, JavaScript를 활용하여 개발</li>
              <li>Glitch server를 이용해 API 사용</li>
              <li>
                데이터를 불러오는 과정에서 query string을 이용해 다중선택을 하는
                기능 구현에 있어 어려움이 있었지만,
                <br />
                <strong>console.log()로 디버깅</strong>하며, 데이터의 구조와
                사용법을 이해하고, 버그를 개선함으로써 어려움을 극복함
              </li>
              <li>
                <strong>사용기술:</strong> HTML5, CSS3, JavaScript, Glitch, Git,
                GitHub
              </li>
            </ol>
          </article>
        </div>
        <Footer />
      </>
    );
  }
}

class Baseball extends Component {
  render() {
    return (
      <>
        <Logo />
        <div className="Baseball">
          <div className="Baseball__info">
            <h1 className="Baseball__title">Baseball</h1>
            <h3>
              <a href="https://github.com/jyansol/game">Page</a>
            </h3>
            <span className="Baseball__role">
              <strong>ROLE :</strong>Front-end, hackathon-project/
            </span>
            <span className="Baseball__date"> 2018.10.25 ~ 2018.10.27</span>
          </div>
          <article className="Baseball__article">
            <h2 className="Baseball__h2">Experience</h2>
            <ol className="Baseball__ol">
              <li>HTML5, CSS3, JavaScript를 활용하여 숫자야구게임을 개발</li>
              <li>DOM API를 사용함.</li>
              <li>2명이 한팀이 되어 기획, 개발, 서비스배포 사이클을 경험</li>
              <li>
                협업과정에서 GitHub, Google Drive, Slack 등을 활용하여 협업
              </li>
              <li>
                사용자에게 필요한 최소한의 기능구현(MVP), 기초 계획, 일정관리의
                중요성을 느낄 수 있었던 프로젝트
              </li>
              <li>
                <strong>사용기술:</strong> HTML5, CSS3, JavaScript, DOM API,
                Git, GitHub
              </li>
            </ol>
          </article>
        </div>
        <Footer />
      </>
    );
  }
}

class Project extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Route path="/project/0" render={() => <Baeminchan />} />
        <Route path="/project/1" render={() => <Lotte />} />
        <Route path="/project/2" render={() => <Baseball />} />
      </>
    );
  }
}

export default Project;
