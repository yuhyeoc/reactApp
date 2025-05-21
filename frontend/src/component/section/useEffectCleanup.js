import React, { useState, useEffect, Fragment } from 'react';
import { BackBtn } from '../../Home'

const Timer = (props) => {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 돌아가는중...');
            return (
                <p>t</p>
            )
        }, 1000);
        // useEffect 함수 정리
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <span>
                타이머를 시작합니다. 콘솔을 보세요!
            </span>
        </div>
    );
};

export default function TimerEfc(props) {
    const [showTimer, setShowTimer] = useState(false);
    return (
        <div>
            {showTimer && <Timer />}
            <button onClick={() =>
                setShowTimer(!showTimer)
            }>
                Toggle Timer
            </button>
            <BackBtn />
        </div>
    )
};

