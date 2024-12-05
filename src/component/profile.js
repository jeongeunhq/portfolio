import React from 'react';
import '../css/profile.css';
import pic1 from '../img/profile.jpg';

function Profile() {

  return (
    <section id="profile" className="intro-section">
      <h2>안녕하세요 :)</h2>
      <h3>주니어 프론트엔드 개발자 정은하입니다!</h3> 
      <p>
        백엔드와 인공지능 등 다양한 분야에서 창출한 결과물을 사용자에게 시각적으로 전달하는 과정에서 
        깊은 매력을 느껴, 이를 구현할 수 있는 프론트엔드 개발자를 꿈꾸게 되었습니다.
        저는 빠르게 변화하고 있는 IT 트렌드 속에서, 새로운 기술을 배우고 이를 활용해 사용자에게 
        가치를 전달하는 일에 큰 흥미를 느끼고 사용자 경험(UX)을 개선하고 직관적인 인터페이스(UI)를 구현하는 데 열정을 가지고 있습니다.
      </p>
      <div className="profile-title">📌About Me</div>
      <div className="profile-box-container">
        <div className="profile-box"> 
          {/* 프로필 이미지 */}
          <img src={pic1} alt="Profile" className="profile-image" />

          {/* 프로필 정보 */}
          <div className="profile-description">
            <div className="info-box">
              <h4>🙋‍♀️이름</h4>
              <p>정은하</p>
            </div>
            <div className="info-box">
              <h4>♀️생년월일</h4>
              <p>2000.03.02</p>
            </div>
            <div className="info-box">
              <h4>🏠위치</h4>
              <p>경기도 수원시</p>
            </div>
            <div className="info-box">
              <h4>✏️학력</h4>
              <p>경기대학교 컴퓨터공학과</p>
            </div>
            <div className="info-box">
              <h4>🔗Git</h4>
              <p>
                <a
                  href="https://github.com/jeongeunhq"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'rgb(252, 187, 222)', fontWeight: 'bold' }}
                >
                  jeongeunhq
                </a>
              </p>
            </div>
            <div className="info-box">
              <h4>🔗Velog</h4>
              <p>
                <a
                  href="https://velog.io/@dmsgk991/posts"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'rgb(252, 187, 222)', fontWeight: 'bold' }}
                >
                  Velog 이동하기
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
