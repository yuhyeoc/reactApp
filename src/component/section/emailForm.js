import { useState, useRef, useEffect, Fragment } from 'react';
import { BackBtn } from '../../Home'

export default function EmailStateForm() {
    const [stateEmail, setStateEmail] = useState('');
    const [password, setpassword] = useState('');

    // 페이지 렌더링 될때 마다 input 커서 포커스
    const inputRef = useRef();
    useEffect(() => {
        console.log('렌더링~');
        // useRef 를 사용하여 input 선택 후 focus()
        inputRef.current.focus();
    }, [stateEmail]);

    // 이메일 형식검사
    const [emailValid, setemailmValid] = useState(false);
    const handleEmail = (e) => {
        setStateEmail(e.target.value);
        const regex =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(stateEmail)) {
            setemailmValid(true);
        } else {
            setemailmValid(false);
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(stateEmail, password);
    }
    return (
        <Fragment>
            <div className='TestState'>
                <span className='formTitle'>* useState() 를 활용한 input form test</span>
                <form onSubmit={onSubmit}>
                    <input ref={inputRef} id='inputState'
                        value={stateEmail}
                        type='text'
                        placeholder='E-MAIL'
                        onChange={handleEmail} />
                    <div className='errorMessageWrap'>
                        {!emailValid && stateEmail.length > 0 && (
                            <span className='errorSpan'>올바른 이메일을 입력해주세요.</span>)}
                    </div>
                    <input id='inputState'
                        value={password}
                        placeholder='Password'
                        type='password'
                        onChange={(e) => setpassword(e.target.value)}
                    />
                    <p>
                        이메일 주소는 {stateEmail} 입니다.
                    </p>
                    <button className='btn' type='submit'>Login</button>
                </form>
                <div className='infoTxt' style={{ lineHeight: '3' }}>
                    <h3>useEffect() 개념설명</h3>
                    <p>
                        화면에 렌더링 >> 다시 랜더링 >> 화면에서 사라짐 (Unmount)<br />
                        같은 효과를 처리하기 위하 사용할 수 있는 리액트 함수.
                    </p>
                    <p>
                        (기본적으로 useEffect() 함수 안에서 실행되는 콜백 함수를 받음.)
                    </p>
                    <p>
                        함수 기본 형태 <br />
                        1. useEffect( ()=> {
                        }) <br />
                        <span>
                            매번 렌더링 될때 마다 실행. <br />
                        </span>
                        2. useEffect( ()=> { },[ 배열 value ] );<br />
                        <span>
                            첫 렌더링 이후 value 값이 바뀔때 실행.
                        </span>
                    </p>
                </div>
            </div>
            <BackBtn />
        </Fragment>
    )
}
