import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/Tagged";
import { BackBtn } from "../../Home";
const ProfileCss = styled.div`
  width: 100%;
  color: #333;
  padding-top: 56px;
`;

export default function Profile() {
  return (
    <ThemeProvider theme={theme}>
      <ProfileCss>
        {/* <ProfileCssH2>Front-end & Publishing</ProfileCssH2> */}
        <div className="profileWrap">
          <h3 className="profileH3">About Me</h3>
          <div className="profileTxt">
            <span>끊임없이 노력하고 발전합니다..</span>
            <p>
              저는 짧은 경력에도 불구하고, 실무에서 충분한 경험을 쌓아왔습니다.
              퍼블리싱과 프론트앤드 업무를 통해 사용자 경험을 개선하고, 코드를
              효율적이고 가독성 좋게 작성하는 것에 대한 노력이 인상적입니다.
              또한 API 연동을 통한 Front-end 화면 개발도 경험하였습니다. 웹
              개발은 끊임없이 변화하는 분야이기 때문에 학습과 성장은
              필수적입니다. 지식을 쌓아가는 것도 중요하지만, 실전 경험을 통해
              문제 해결 능력을 키워나가는 것도 중요하겠죠. 경력에 비해 실무에서
              충분한 경험을 쌓아온 저는 앞으로도 계속해서 학습하고 발전해
              나가겠습니다. 함께 응원하고 기대하고 있습니다. 🌟
            </p>
          </div>
        </div>
        <div className="profileWrap">
          <h3 className="profileH3">Skills</h3>
          <div className="profileTxt">
            <div className="skillList">
              <span className="skillImg">
                <img src={`${process.env.PUBLIC_URL}/img/html5.png`} alt="html5" />
                <span className="score"></span>
              </span>
              <span className="skillImg">
                <img src={`${process.env.PUBLIC_URL}/img/css.png`} alt="CSS3" />
                <span className="score"></span>
              </span>
              <span className="skillImg">
                <img src={`${process.env.PUBLIC_URL}/img/js.png`} alt="js" />
                <span className="score"></span>
              </span>
              <span className="skillImg">
                <img src={`${process.env.PUBLIC_URL}/img/jq.png`} alt="제이쿼리" />
                <span className="score"></span>
              </span>
              <span className="skillImg">
                <img src={`${process.env.PUBLIC_URL}/img/react.png`} alt="react" />
                <span className="score"></span>
              </span>
              <span className="skillImg">
                <img className="firebaseImg" src={`${process.env.PUBLIC_URL}/img/firebaselogo.png`} alt="파이어베이스" />
              </span>
              <span className="skillImg">
                <img src={`${process.env.PUBLIC_URL}/img/git.png`} alt="깃허브" />
              </span>
            </div>
          </div>
        </div>
        <div className="profileWrap">
          <h3 className="profileH3">
            Joined
            <br /> Project
          </h3>
          <div className="profileTxt">

            <p>
              2022.07~08 : 삼성닷컴 갤럭스폴드 이벤트페이지(도슨트투어 담당)
              퍼블리싱진행
            </p>
            <p>2022.09~10 : 학원관리 프로그램 개발 업체. 퍼블리싱 및 F/E</p>
            <p>2022.11~12 : 이마트24 웹사이트 서브페이지 퍼블리싱</p>
            <p>
              2023.06 ~ 2024.01 : * 한전KDN Eum 메인 및 서비스 퍼블리싱 유지보수
              * 현대브릿지 브랜드사이트 사이트 퍼블리싱 * KDN 설비안전CCTV
            </p>
            <p>
              2024.05 ~ 2024.9 : 
              chatDoc 의료 채팅상담 프로젝트 퍼블리싱 및 프론트앤드 개발
            </p>
          </div>
        </div>
      </ProfileCss>
      {/* <BackBtn /> */}
    </ThemeProvider>
  );
}
