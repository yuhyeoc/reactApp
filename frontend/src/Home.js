import styled, { ThemeProvider } from "styled-components";
import { useState, props, useEffect } from "react";
import theme from "./component/styles/Tagged";
import Weather from "./component/section/weatherApiSeoul";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import namsan from "./assets/imgs/namsan.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Home(props) {
  const Body = styled.body`
    height: 100vh;
    ${({ theme }) => theme.commonStyle.homeStyle};
  `;

  const HomeH2 = styled.h2`
    font-size: ${({ theme }) => theme.fontSizeObj.title};
    margin-bottom: 2.5vw;
    text-align: left;
    font-size: 48px;
  `;
  const ProfileCssP = styled.p`
    font-size: ${({ theme }) => theme.fontSizeObj.paragraph};
    margin-bottom: 16px;
    font-weight: 500;
  `;

  const Container = styled.ul`
    width: 100vw;
    display: block;
    height: auto;
    overflow: hidden;
    ${({ theme }) => theme.commonStyle.homeStyle};
  `;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToScroll: 1,
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <ThemeProvider theme={theme}>
      <Slider className="homeNav" {...settings}>
        {/* 1번 슬라이드 */}
        <div className="topSlider" data-aos="fade-up" data-aos-duration="1000">
          <img src="img/pattern2.jpg"></img>
          <div className="typeText">
            <HomeH2>
              <p>유혁님의 포트폴리오</p>
            </HomeH2>
            <span>
              웹 UI/UX퍼블리싱, 프론트앤드 분야 2년차 입니다.
              <br />
              잘부탁드립니다.
              <br />
            </span>

            <Link className="viewMore" to="/profile">
              더 알아보기
            </Link>
          </div>
        </div>
        {/* 2번 슬라이드 */}
        <div className="topSlider" data-aos="fade-up" data-aos-duration="1000">
          <img src={namsan}></img>
          <div className="typeText">
            <HomeH2>
              <p>서울 대기현황</p>
            </HomeH2>
            <span>React AXIOS로 구현한 서울 미세먼지 대기현황판 입니다.</span>

            <Link className="viewMore" to="/seouldust">
              더 알아보기
            </Link>
          </div>
        </div>
        {/* 3번 슬라이드 */}
        <div className="topSlider" data-aos="fade-up" data-aos-duration="1000">
          <img src={"img/dog.jpg"}></img>
          <div className="typeText">
            <HomeH2>
              <p>Todo List</p>
            </HomeH2>
            <span>React의 내장함수를 활용하여 Todo List를 작성합니다</span>

            <Link className="viewMore" to="/todo">
              더 알아보기
            </Link>
          </div>
        </div>
      </Slider>
      {/* <div className="FlexWrap">
          <HomeH2>
            <FaMapMarkerAlt />
            서울시 PM10 미세먼지 현황
            <ProfileCssP>
              API 데이터 출처 : (한국환경공단 에어코리아)
            </ProfileCssP>
          </HomeH2>
          <DustList />
          <HomeH2>관광명소</HomeH2>
          <ul
            className="ProjectFlex"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <li>
              <img src={chung}></img>
              <Link>
                청계천<span className="hotPl">핫플</span>
              </Link>
            </li>
            <li>
              <img src={lTower}></img>
              <Link>롯데타워</Link>
            </li>
            <li>
              <img src={river}></img>
              <Link>
                한강대교<span className="hotPl">핫플</span>
              </Link>
            </li>
            <li>
              <img src={kyung}></img>
              <Link>경복궁</Link>
            </li>
            <li>
              <img src={namsan}></img>
              <Link>
                남산타워<span className="hotPl best">Best</span>
              </Link>
            </li>
            <li>
              <img src={olympic}></img>
              <Link>올림픽공원</Link>
            </li>
            <li>
              <img src={kyung}></img>
              <Link>동대문</Link>
            </li>
          </ul>
          <HomeH2>이벤트</HomeH2>
          <ul
            className="ProjectFlex eventListWrap"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <li className="eventList">
              <img src={chung}></img>
              <h4>청계천 축제</h4>
              <p>23.6.5~ 23.7.1</p>
              <span>
                this.두줄제목! 청계천 뷰를 보며 감상하는 이벤트! 청계천 뷰를
                보며 감상하는 이벤트! 청계천 뷰를 보며 감상하는 이벤트!
              </span>
              <button type="button" className="eventBtn">
                신청하기
              </button>
            </li>
            <li className="eventList">
              <img src={river}></img>
              <h4>한강 불꽃축제</h4>
              <p>23.6.5~ 23.7.1</p>
              <span>한강 여름 불꽃축제</span>
              <button type="button" className="eventBtn">
                신청하기
              </button>
            </li>
            <li className="eventList">
              <img src={namsan}></img>
              <h4>남산 벚꽃 축제</h4>
              <p>23.6.5~ 23.7.1</p>
              <span>
                this.두줄제목! 남산 뷰를 보며 감상하는 이벤트! 남산 뷰를 보며
                감상하는 이벤트! 남산 뷰를 보며 감상하는 이벤트!
              </span>
              <button type="button" className="eventBtn">
                신청하기
              </button>
            </li>
            <li className="eventList">
              <img src={lTower}></img>
              <h4>L타워 레이져쇼</h4>
              <p>23.6.5~ 23.7.1</p>
              <span>잠들지 않는 뷰맛집! L타워 리뷰이벤트</span>
              <button type="button" className="eventBtn">
                신청하기
              </button>
            </li>
          </ul>
        </div> */}
      <div className="seoulWeather">
        <HomeH2>
          서울 날씨
          <br />
          (Open Api)
        </HomeH2>
        <Weather />
      </div>
    </ThemeProvider>
  );
}

export function BackBtn() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button type="button" id="backPage" onClick={goBack}>
        뒤로가기
      </button>
    </div>
  );
}
