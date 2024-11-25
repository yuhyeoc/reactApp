import React from 'react'
import { BackBtn } from './Home'
import './App.css';

export default function NotFound() {
    return (
        <div style={{ marginBottom: '120px', lineHeight: '3' }}>
            <h3>Not Found</h3>
            <p>주소가 잘못되었습니다.</p>
            <BackBtn />
        </div>
    )
}
