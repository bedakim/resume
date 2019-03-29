import React, { Component } from 'react';
import './_EduCareer.scss';

export default class Edu extends Component {
  render() {
    return (
      <div className="EC">
        <section id="three">
          <h2 className="EC__title">Education & Career </h2>
          <div className="EC__description">
            <div className="EC__description edu">
              <h3>FastCampus Front-end 과정 11기</h3>
              <span>2018.9 ~ 2018.12 수료</span>
              <h3>청운대학교 섬유공학과</h3>
              <span>(편입) 졸업 2015 ~ 2017.02</span>
              <h3>SaintLouis University Financial Management</h3>
              <span>2012 ~ 2014 (4학기 수료후 자퇴)</span>
            </div>
            <div className="EC__description car">
              <h3>(주)모던하이테크(기술영업)</h3>
              <span>
                2017.04 ~ 2018.04
                <br />
                <br />
                <strong> 기술영업직 담당프로그램:</strong>
                <br />
                <strong>SmartDesigner</strong> (섬유패턴 디자인)​ /
                <strong>Cisco WebEx</strong> (화상회의)
                <br />
                <br />
                기술세미나(오프라인:월1회,온라인:월2회), 기술지원 경험으로
                <br />
                다양한상황과 여러분야의 사람들과의 소통에 익숙
              </span>
              <br />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
