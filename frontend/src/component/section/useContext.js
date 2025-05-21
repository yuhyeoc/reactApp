import React, { useState, useRef, useContext, createContext, Fragment } from 'react';
import { BackBtn } from '../../Home'

const themeDefault = { border: '2px solid green' };
const themeContext = createContext(themeDefault);

function TestContext() {
  const mainTheme = useContext(themeContext);
  console.log('theme', mainTheme);

  return (
    <themeContext.Provider value={{ border: '2px solid red' }}>
      <span className='formTitle'>* useContext() , Provider() value 를 사용한 Theme 변경</span>
      <div className='conTextWrap' style={mainTheme}>
        <h1>Title</h1>
        <Sub1 />
      </div>
    </themeContext.Provider>
  );
}
// useContext() 테마 적용
function Sub1() {
  const mainTheme = useContext(themeContext);
  return (
    <themeContext.Provider value={{ border: '10px solid #333333' }}>
      <div style={mainTheme}>
        <h1>Sub1</h1>
        <Sub2 />
      </div>
    </themeContext.Provider>
  );
}
function Sub2() {
  const mainTheme = useContext(themeContext);
  return (
    <div style={mainTheme}>
      <h1>Sub2</h1>
      <Sub3 />
    </div>
  );
}
function Sub3() {
  const mainTheme = useContext(themeContext);
  return (
    <Fragment>
      <div style={mainTheme}>
        <h1>Sub3</h1>
        <p style={{ lineHeight: '1.8', padding: '20px' }}>
          createContext(), useContext(), .Provider()<br />
          1. createContext() Props 변경할 값<br />
          2. useContext() Props에 1. 내용을 담은 객체 넣음<br />
          3. 1. 에서 만든 객체에 .Provider()를 사용하여 1번에서 넣은 Props 값 넣음<br />
          .Provider() 로 감싼 돔 객체의 자식 객체의 값이 Provider() value 값 들어감.

          <span style={{ display: 'block', lineHeight: '1.8', padding: '20px', marginTop: '24px' }}>
            컴포넌트 계층 최상단에서 최하단 컴포넌트로
            중간 컴포넌트를 거치지 않고 Props를 최하단 전달 할 수 있음
          </span>
        </p>
        <BackBtn />
      </div>
    </Fragment>
  );
}
export default TestContext;