import React, { Component, useState } from 'react';
import { BackBtn } from '../../Home'

class SecTest extends Component {
    render() {
        return (
            <div className='secTestWrap'>
                <h2>
                    {this.props.title}
                    {this.props.con1}
                </h2>
                <div className={this.props.subj}>
                    <div className='funcClass'>
                        <h2>리액트는 두가지 방식의 컴포넌트 생성함.</h2>
                        <p>
                            1. function형 컴포넌트 <br />
                            class형 컴포넌트에 비해 선언문이 쉽고 메모리 적음.
                            state(상태)를 사용할수 있게 되어 클래스 방식에서
                            사용하는 기능들을 함수 형식에서도 사용할 수 있게 됨.
                            react hook 사용 예시<br />
                            → useState()<br />
                            ex) const [count, setCount] = useState('기본값');
                            useState()를 사용하여
                            setCount 부분의 값을 재할당 할 수 있음<br />
                            (string/boolean/number)<br />

                        </p><br />
                        <p>
                            2. class형 컴포넌트<br />
                            render 함수가 반드시 있어야하며 render 함수 내부에
                            보여줘야할 JSX를 반환해야 한다.
                            react hook 기능 사용 불가.
                            props() 함수는 사용 가능함.
                        </p>
                    </div>
                </div>
                <BackBtn />
            </div>
        );
    }
}

export default SecTest;

