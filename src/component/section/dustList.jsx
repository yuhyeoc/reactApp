import { React, useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled, { ThemeProvider, keyframes } from "styled-components";
import theme from "../styles/Tagged";
import { BackBtn } from "../../Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import AccessibleButton from "./AccessibleButton";

const ProfileCss = styled.div`
  width: 100%;
  color: #333;
  padding-top: 56px;
`;
const ProfileCssH2 = styled.h2`
  margin-bottom: 36px;
  font-size: ${({ theme }) => theme.fontSizeObj.title};
`;
const ProfileCssH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizeObj.subtitle};
  margin-bottom: 16px;
`;
const ProfileCssP = styled.h3`
    font-size: ${({ theme }) => theme.fontSizeObj.paragraph};\
    line-height: 1;
    display: block;
`;

export default function DustList() {
  const URL =
    "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const gradeLabels = {
    1: "좋음",
    2: "보통",
    3: "나쁨",
    4: "매우나쁨",
  };
  const refreshClick = async () => {
    try {
      await fetchData();
    } catch (error) {
      console.error("공공데이터 호출:", error);
    }
  };

  useEffect(() => {
    AOS.init();
  });

  const fetchData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);

      const response = await axios.get(URL, {
        params: {
          serviceKey: process.env.REACT_APP_API_KEY,
          returnType: "json",
          numOfRows: 100,
          sidoName: "서울",
        },
      });
      setData(response.data);
    } catch (e) {
      setError(e);
      refreshClick();
      // 에러시 한번더 실행
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return (
      <ThemeProvider theme={theme}>
        <ProfileCss>
          <div className="profileWrap dustWrap">
            <h3 className="profileH3">서울 대기현황</h3>
            <ul className="dustUl profileTxt">
              <span className="dateTime">
                <span>잠시만 기다려주세요.</span>
                <br />
                <small>
                  <br />
                  API 데이터 출처 : (한국환경공단 에어코리아)
                </small>
              </span>
              <li className="indexLoading"></li>
            </ul>
          </div>
        </ProfileCss>
      </ThemeProvider>
    );
  if (error)
    return (
      <div>
        다시 시도해주세요.
        <BackBtn />
      </div>
    );
  if (!data) return null;
  const dataArr = data.response.body.items;
  console.log(dataArr);
  let user = "seller";

  return (
    <ThemeProvider theme={theme}>
      <ProfileCss>
        <div className="profileWrap dustWrap">
          <h3 className="profileH3 seoulLogo">서울 대기현황</h3>
          <ul className="dustUl profileTxt">
            <span className="dateTime">
              <span className="pmTitle">
                AXIOS를 사용한 미세먼지(PM10)공공데이터 API호출 예제입니다.
              </span>
              <small className="smallTime">
                측정일 {dataArr[0].dataTime}
                <br />
                API 데이터 출처 : (한국환경공단 에어코리아)
              </small>
              <ul className="guageUl">
                <li>10~30 : 좋음</li>
                <li>31~80 : 보통</li>
                <li>81~150 : 나쁨</li>
                <li>150이상 : 매우나쁨</li>
              </ul>
            </span>

            {dataArr.map((name, index) => (
              <li
                className="dataReturn"
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div>
                  <h5 className="titleBar">
                    <span className="cityValue">
                      <FaMapMarkerAlt />
                      측정소 : {name.stationName}
                    </span>
                  </h5>
                  <span className="dataType">
                    미세먼지(PM10)
                    <small>(단위: ug/m3)</small>
                  </span>

                  {(() => {
                    let apiValueStyle = {};

                    switch (true) {
                      case name.pm10Value <= 30:
                        var percentage = (name.pm10Value / 30) * 25; // 0~30 구간 퍼센티지 계산
                        apiValueStyle.width = `${percentage}%`;
                        // console.log(percentage);
                        return (
                          <div className="apiValueWrap">
                            <span
                              className="apiValue apiValue30"
                              style={{
                                width: "0px", // 시작 너비 설정
                                ...apiValueStyle,
                                animation: `2s ease-in-out forwards`, // 애니메이션 적용
                              }}
                            >
                              {name.pm10Value} 좋음
                            </span>

                            <span className="emojiGrade emojiGrade1"></span>
                          </div>
                        );
                      case name.pm10Value > 30 && name.pm10Value <= 80:
                        var percentage = ((name.pm10Value - 30) / 50) * 25 + 25; // 30~80 구간 퍼센티지 계산
                        apiValueStyle.width = `${percentage}%`;
                        return (
                          <div className="apiValueWrap">
                            <span
                              className="apiValue apiValue80"
                              style={{
                                width: "0px", // 시작 너비 설정
                                ...apiValueStyle,
                                animation: `2s ease-in-out forwards`, // 애니메이션 적용
                              }}
                            >
                              {name.pm10Value} 보통
                            </span>
                            <span className="emojiGrade emojiGrade2"></span>
                          </div>
                        );

                      case name.pm10Value > 80 && name.pm10Value <= 150:
                        var percentage = ((name.pm10Value - 80) / 70) * 25 + 50; // 80~150 구간 퍼센티지 계산
                        apiValueStyle.width = `${percentage}%`;
                        return (
                          <div className="apiValueWrap">
                            <span
                              className="apiValue apiValue150"
                              style={{
                                width: "0px", // 시작 너비 설정
                                ...apiValueStyle,
                                animation: `2s ease-in-out forwards`, // 애니메이션 적용
                              }}
                            >
                              {name.pm10Value} 나쁨
                            </span>

                            <span className="emojiGrade emojiGrade3"></span>
                          </div>
                        );
                      case name.pm10Value > 151:
                        var percentage = 75; // 150 이상일 경우
                        apiValueStyle.width = `${percentage}%`;
                        return (
                          <div className="apiValueWrap">
                            <span
                              className="apiValue apiValueMax"
                              style={{
                                width: "0px", // 시작 너비 설정
                                ...apiValueStyle,
                                animation: `2s ease-in-out forwards`, // 애니메이션 적용
                              }}
                            >
                              {name.pm10Value} 매우나쁨
                            </span>

                            <span className="emojiGrade emojiGrade4"></span>
                          </div>
                        );
                      case name.pm10Value === "-":
                        // 측정소 pm10Value 데이터 오류시 "-" 문자열 처리
                        return (
                          <div className="apiValueWrap">
                            <span
                              className="apiValue apiValueErr"
                              style={{
                                width: "100%",
                              }}
                            >
                              측정소 통신 오류
                            </span>
                          </div>
                        );
                      default:
                        return (
                          <div className="apiValueWrap">
                            <span className="apiValue">{name.pm10Value}</span>
                          </div>
                        );
                    }
                  })()}
                </div>
                <div className="gradeWrap">
                  {(() => {
                    switch (true) {
                      case name.pm10Grade === "1":
                        return (
                          <Fragment>
                            <span className="gradeWrapType">
                              24시간 평균 등급: {name.pm10Grade}
                            </span>
                            <span className="gradeTxt gradeTxt1">
                              대기질 좋음
                            </span>
                          </Fragment>
                        );
                      case name.pm10Grade === "2":
                        return (
                          <Fragment>
                            <span className="gradeWrapType">
                              24시간 평균 등급: {name.pm10Grade}
                            </span>
                            <span className="gradeTxt gradeTxt2">보통</span>
                          </Fragment>
                        );
                      case name.pm10Grade === "3":
                        return (
                          <Fragment>
                            <span className="gradeWrapType">
                              24시간 평균 등급: {name.pm10Grade}
                            </span>
                            <span className="gradeTxt gradeTxt3">나쁨</span>
                          </Fragment>
                        );
                      case name.pm10Grade === "4":
                        return (
                          <Fragment>
                            <span className="gradeWrapType">
                              24시간 평균 등급: {name.pm10Grade}
                            </span>
                            <span className="gradeTxt gradeTxt4">매우나쁨</span>
                          </Fragment>
                        );
                      case name.pm10Grade == null:
                        return (
                          <Fragment>
                            <span className="gradeWrapType">
                              24시간 평균 등급:
                            </span>
                            <span className="gradeTxt">수집된 데이터 없음</span>
                          </Fragment>
                        );
                      default:
                        return (
                          <div className="apiValueWrap">
                            <span className="">{name.pm10Value}</span>
                          </div>
                        );
                    }
                  })()}
                </div>
              </li>
            ))}
            <div className="refreshBtn">
              <AccessibleButton
                onClick={refreshClick}
                label="데이터 새로고침"
              ></AccessibleButton>
            </div>
          </ul>
        </div>
      </ProfileCss>
    </ThemeProvider>
  );
}
