import React, { Component, useState } from 'react';
function SectionBegin() {
  const [text, setText] = useState('리액트 useState');
  const onSubmit = () => {
    alert('submit');
  };

  const onKeyUp = (event) => {
    if (event.keyCode === 13) {
      onSubmit();
    }
  }

  const updateState = () => {
    setText('안녕하세요')
  }

  return (
    <div className='mainContent'>
      <h2>
        {this.props.title}
        {this.props.con1}
      </h2>
      <div className='inputWrap'>
        <input onKeyUp={onKeyUp} />
        <button onClick={onSubmit}>Submit</button>
        <br /><br />

        <span>{text}</span>
        <button onClick={updateState}>Update</button>
      </div>
    </div>
  );
}
export default SectionBegin;