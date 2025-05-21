import React, { useContext } from 'react';
import { UserContext, KeyTxt } from './exportContext';

export default function PhoneText() {
    const testContext = useContext(UserContext)

    return (
        <div style={{ display: 'block', margin: '96px 0px' }}>
            <span className='formTitle'>* useContext() , Provider() value 를 사용한 key : value 값 가져오기 </span>
            <h2>
                import 상품은 {testContext.name} : {testContext.model} 입니다.
            </h2>
            <p>
                소스
            </p>
        </div>
    );
}