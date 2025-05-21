import React, { useState, useRef, Fragment } from 'react';
import { BackBtn } from '../../Home';

function RefEx() {
  const formRef = useRef(null);
  const [no, setNo] = useState('');
  const regExp = /[^0-9]/g;

  const notice = () => {
    if (!no || regExp.test(no)) {
      alert('숫자만 입력해주세요');
      setNo('');
      formRef.current.focus();
      return;
    }
    else {
      alert(`입력한 숫자는 ${no} 입니다`);
      setNo('');
    }
  };
  return (
    <Fragment>
      <div onSubmit={(e) => { e.preventDefault(); notice(); }} className='uesRefForm'>
        <span className='formTitle'>
        * useRef() 돔의 상태를 변경할때 사용
        예를들어 input을 선택하고 포커스 해야할 경우
        </span>
        <form>
          <input
            ref={formRef}
            type='text'
            placeholder='대기번호 입력'
            value={no}
            onChange={(e) => setNo(e.target.value)} />
          <button>실행</button>
        </form>
        <div>
          <ul>
            <li>
              ex1. input 창 focus 등 돔 객체를 선택할 필요가 있는 경우.<br /> 렌더링 재실행 없이
              useRef()로 지정된 돔객체의 값 저장이나 돔 참조 가능 ( element의 scroll위치, image의 size 등)
            </li>
            <li>
              속성 값을 초기화 할 필요가 있는경우 <br />
              setInterval 이나 setTimeout과 같은 함수는 clear 시켜주지 않으면 메모리를 많이 소모하기 때문이다.
            </li>
          </ul>
        </div>
      </div>
      <BackBtn />
    </Fragment>
  );
}
export default RefEx;