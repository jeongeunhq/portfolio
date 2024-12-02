import React, { useState } from 'react';
import '../css/project.css';
import project1 from '../img/project1.png';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png';
import project4 from '../img/project4.png';
import project5 from '../img/project5.png';
import project6 from '../img/project6.png';

function Project() {
    const [flipped, setFlipped] = useState(Array(6).fill(false)); // 각 카드의 뒤집힘 상태
    const [isAllFlipped, setIsAllFlipped] = useState(false); // 모두 보기/리셋 버튼 상태
    const images = [project1, project2,project3,project4,project5,project6];

    const projectTitle = [
        "심리 케어 기룡이",
        "마음이",
        "금융 초보를 위한 AI 정보 플랫폼",
        "경맛추",
        "Gaesipan",
        "Eunha's 포트폴리오"

    ];
    const projectDate = [
        "2023.12-2024.06  5人프로젝트",
        "2024.07-2024.08  5人프로젝트",
        "2023.04-2023.11  7人프로젝트",
        "2024.05-2024.06  2人프로젝트",
        "2023.09-2023.10  1人프로젝트",
        "2024.11-2024.12  1人프로젝트"
    ];

    const projectSub = [
        "우울증 환자를 위한 챗봇 & 음악 추천 앱 개발",
        "우울증 환자를 위한 챗봇 & 행동 추천 앱 개발",
        "금융 초보자들이 기업의 정보를 모아서 볼 수 있고 모의 투자를 해볼 수 있는 웹사이트",
        "경기대 학생들을 위한 경기대 근처 맛집 추천 웹페이지",
        "글 작성이 가능한 게시판 웹페이지",
        "개인 포트폴리오 웹페이지"
];

    const projectDetail = [
        ["사용자 맞춤형 UI 디자인", "채팅 페이지 개발 & 채팅 API 연결", "일기 작성 페이지 개발 & 일기 API 연결","음악 추천 페이지 개발 & 음악 추천 API 연결","로그인 없이 기능 사용 가능 오류 해결"],
        ["캐릭터 디자인", "사용자 맞춤형 UI 디자인", "채팅 페이지 개발 & 채팅 API 연결","일기 작성 페이지 개발 & 일기 API 연결","행동 추천 페이지 개발 & 행동 추천 API 연결","닉네임 오류 해결"],
        ["API 연결하여 오늘의 기업 뉴스 랜덤으로 불러오기 ", "주식 종목 정보 테이블 개발 & API 연결", "검색창과 기업 그래프 연결","두 개의 기업 종목 비교 가능한 그래프 개발","모의 투자 페이지 개발&모의 투자 순위 표 개발"],
        ["맛집 정보 크롤링", "카카오 맵 API 연동", "반응형 웹페이지"],
        ["회원가입 정보 데이터베이스 연결 & 로그인, 로그아웃 기능", "게시판 글 작성, 수정, 삭제 기능", "댓글 기능 구현","게시글 검색 기능"],
        ["반응형 웹 개발", "React를 활용한 컴포넌트 설계", "CSS 애니메이션 기능"]
    ];
    const projectTech = [
        ["Dart","Flutter","Figma"],
        ["Dart","Flutter","Figma"],
        ["React","React-Query", "React-Hook","React-Library","Css","Figma"],
        ["Html","Css","Jquery"],
        ["Apache","Node js","MySql"],
        ["React","Css","Figma"],
    ]
    const sourceCode = [
        "https://github.com/jeongeunhq/Capstones",
        "https://github.com/jeongeunhq/RestProject",
        "https://github.com/jeongeunhq/AGENTMASTER",
        "https://github.com/jeongeunhq/findfood",
        "https://github.com/jeongeunhq/gaesipan"

    ]

    const handleFlip = (index) => {
        const newFlipped = [...flipped];
        newFlipped[index] = !newFlipped[index];
        setFlipped(newFlipped);
    };

    const handleFlipAll = () => {
        if (isAllFlipped) {
            // 리셋: 모든 카드의 상태를 초기화
            setFlipped(Array(6).fill(false));
        } else {
            // 모두 보기: 모든 카드를 뒤집음
            setFlipped(Array(6).fill(true));
        }
        setIsAllFlipped(!isAllFlipped); // 버튼 상태를 토글
    };

    return (
        <section id="project" className="project-section">
            <h2 className="project-title">📌 PROJECTS</h2>
            <button className="flip-all" onClick={handleFlipAll}>
                {isAllFlipped ? "리셋>>" : "모두 보기>>"}
            </button>
            <div className="project-grid">
                {Array(6).fill(null).map((_, index) => (
                    <div
                        key={index}
                        className={`card ${flipped[index] ? 'flipped' : ''}`}
                        onClick={() => handleFlip(index)}
                    >
                        <div className="card-inner">
                            <div className="card-front">
                                
                                <img src={images[index]} alt={`project ${index + 1}`} className="project-image"/>
                                <div className="overlay">{projectTitle[index]}</div>
                            </div>
                            <div className="card-back">
                                <h3 className='projectTitle'>{projectTitle[index]}</h3>
                                <div className='project-detail'>
                                <p>{projectDate[index]}</p>
                                <p style={{ color: 'rgb(255, 120, 192)' }}>{projectSub[index]}</p>
                                <ul>
                                    {projectDetail[index].map((detail, detailIndex) => (
                                        <li key={detailIndex}>{detail}</li>
                                    ))}
                                </ul>
                                </div>
                                <div className="tech-items">
                                    {projectTech[index].map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-item">{tech}</span>
                                    ))}
                                </div>
                                <a
                                    href={sourceCode[index]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="source-code-link"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;
