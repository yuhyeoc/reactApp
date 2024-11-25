import styled from "styled-components";

// 반응형 디자인을 위한 픽셀 컨버팅 함수
const pixelToRem = (size) => `${size / 16}rem`;
// font size를 객체로 반환
const fontSizeObj = {
  title: pixelToRem(48),
  subtitle: pixelToRem(32),
  paragraph: pixelToRem(14),
};
// 자주 사용하는 컬러 객체화
const colors = {
  black: "#333333",
  grey: "#999999",
  green: "#3cb46e",
  blue: "#000080",
  white: "#fff",
  beige: "#EDCE7A",
};
//자주 사용하는 스타일 속성을 theme로 만들기
const commonStyle = {
  flexCenter: `
        display: flex;
        flex-direction: row nowrap;
        justify-contents: space-between;
        align-items: center;
        line-height: 2;
        `,
  flexCenterColumn: `
        display: flex;
        flex-direction: column;
        justify-contents: space-between;
        align-items: center;
        line-height: 1.8;
    `,
  homeStyle: `
    display: inline-block;
    overflow-x: hidden;
    max-width: 1024px;
    margin: 0 auto;
    `,
};
const divTxtStyle = {
  textAlignR: `
        text-align: right;
        padding: 5%;
        overflow: hidden;
    `,
  textAlignCenter: `
        text-align: center;
    `,
  HomeTextColor: `
        color: ;
    `,
};

// theme 객체이 감싸서 반환한다
const theme = {
  fontSizeObj,
  colors,
  divTxtStyle,
  commonStyle,
};

export default theme;
