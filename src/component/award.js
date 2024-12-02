import React from 'react';
import '../css/award.css';

function Award() {
    return (
        <section id="award" className="award-section">
            <div className="award-container">
                {/* AWARD 섹션 */}
                <div style={{ flex: 1 }}>
                    <h2 className="award-title">📌 AWARD</h2>
                    <div className="box">
                        <div className="box-placeholder">🏅 2023년 한국정보기술학회 대학생 논문경진대회 동상</div>
                        <div className="box-placeholder">🏅 SW상상기업 프로그램 경진대회 우수 사업계획서상</div>
                        <div className="box-placeholder">🏆 2024 캡스톤디자인 산학협력 프로젝트 경진대회 대상</div>
                    </div>
                </div>

                {/* CONTACT 섹션 */}
                <div style={{ flex: 1 }}>
                    <h2 className="contact-title">📌 CONTACT</h2>
                    <div className="box">
                    <div className="box-placeholder">☎️ Phone: 010-2202-6903</div>
                    <div className="box-placeholder">📩 Email: dmsgk991@naver.com</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Award;
