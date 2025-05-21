import React, { useEffect, useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/Tagged";
// import { BackBtn } from "../../Home";

const ProfileCss = styled.div`
  width: 100%;
  color: #333;
  padding-top: 56px;
`;

const ProfileCssH3 = styled.p`
  font-size: ${({ theme }) => theme.fontSizeObj.subtitle};
  margin-bottom: 18px;
`;

const ProfileCssP = styled.h3`
  font-size: ${({ theme }) => theme.fontSizeObj.paragraph};
  line-height: 2;
`;

const TodoSpan = styled.span`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`;

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const savedTodo = localStorage.getItem("todos");
  const inputRef = useRef(null);
  const currentTime = new Date();
  const formattedTime = `${currentTime.toLocaleDateString()} ${currentTime.toLocaleTimeString()}`;

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        { text: inputValue, completed: false, createdAt: formattedTime },
      ]);
      setInputValue("");
    } else {
      alert("할일을 입력해주세요");
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (savedTodo) {
      setTodos(JSON.parse(savedTodo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleTodoCompletion = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const confirmDelete = window.confirm("TODO List를 삭제합니다");
    if (confirmDelete) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
      alert("TODO List가 삭제되었습니다.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ProfileCss>
        <div className="profileWrap todoWrap">
          <h3 className="profileH3">Todo List</h3>
          <div className="profileTxt">
            <span>
              클라이언트 화면에서 추가된 Todo List를 브라우저 localStorage에
              임시 저장하였습니다.
            </span>
            <div className="todoInput">
              <input
                type="text"
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="할일 입력"
              />
              <button className="addButton" onClick={addTodo}>
                리스트에 추가
              </button>
            </div>
            <ul className="dotoList">
              {todos.map((todo, index) => (
                <li className="todoVal" key={index}>
                  <TodoSpan
                    className={`todoSpan ${
                      todo.completed ? "completedTodo" : ""
                    }`}
                    completed={todo.completed}
                  >
                    {todo.text}
                    <div className="imogDiv">
                      <img src="img/imog.jpg" alt="이모지" />
                    </div>
                    <div className="createdAt">{todo.createdAt}</div>{" "}
                    {/* 생성된 날짜와 시간을 출력합니다. */}
                  </TodoSpan>
                  <button
                    id=""
                    type="button"
                    className="todoComp"
                    onClick={() => toggleTodoCompletion(index)}
                  >
                    완료
                  </button>
                  <button
                    type="button"
                    id="removeTodo"
                    onClick={() => removeTodo(index)}
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ProfileCss>
    </ThemeProvider>
  );
}
