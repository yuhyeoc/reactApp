import { Fragment, useState } from "react";
import { BackBtn } from "../../Home";
import CodeImg from "./listExpenImg.png";

let nextId = 0;

export default function ListExpen() {
  const [newName, setNewName] = useState("");
  const [personList, setPersonList] = useState([]);

  // useState에 빈 배열 생성
  const addPerson = () => {
    // input 창 비우기
    setNewName("");
    // input 창에 입력 값 배열에 추가하기
    setPersonList([
      ...personList,
      {
        id: nextId++,
        name: newName,
      },
    ]);
  };
  return (
    <Fragment>
      <div>
        <h1>State로 배열 추가 Test</h1>
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        <button onClick={addPerson}>목록에 추가</button>
        <div style={{ paddingTop: "48px" }}>
          {/* <img
            style={{
              display: 'block',
              maxWidth: '1024px',
              margin: '0 auto',
              width: '100%',
            }}
            src={CodeImg}
          ></img> */}
        </div>
        <ul>
          {personList.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Vanilla JavaScript 'this'</h1>
        <p>
          자바스크립트에서 this는 선언된 위치에 따라 대상이 다름 example1) 함수
          외부에서 선언한 this는 전역객체 즉 Window를 가르킨다. init 함수에서
          this.onload() 등으로 활용 가능한 부분
          <br /> example2) 메서드 내부에 this는 메서드를 호출한 객체를 가르킨다.
          <br /> exmple3)
        </p>
      </div>
      <BackBtn />
    </Fragment>
  );
}
