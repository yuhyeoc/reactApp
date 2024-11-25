/*eslint-disable*/
import React from "react";
import { BrowserRouter, Routes, Route, Switch, Link } from "react-router-dom";
import { Component, useState, Fragment, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
// 스타일 테마 컴포넌트
import theme from "./component/styles/Tagged";
import "./App.css";
import "./component/css/AppStyles.module.scss";
import "./component/section/nav.css";

// 컴포넌트
import Header from "./component/header/header";
import Footer from "./component/footer/Footer";
import Home from "./Home";
import SecTest from "./component/section/secTest";
import EmailStateForm from "./component/section/emailForm";
import TabMenu from "./component/section/sectionTab";
import RefEx from "./component/section/RefEx";
import TestContext from "./component/section/useContext";
import TimerEfc from "./component/section/useEffectCleanup";
import NotFound from "./NotFound";
import ScssComponent from "./component/styles/ScssComponent";
import CSSModule from "./component/styles/CSSModule";
import StyledComponent from "./component/styles/StyledComponent";
import StyledObj from "./component/section/StyledComponents";
import Day from "./component/section/Day";
import WeatherApi from "./component/section/WeatherApi";
import DummyList from "./component/section/DummyList";
import Select from "./component/section/select";
import Profile from "./component/section/profile";
import DustList from "./component/section/dustList";
import TodoList from "./component/section/TodoList";
import Board from "./component/board";
import CreatePost from "./component/createPost";

export const App = () => {
  // 헤더 props
  const headerMenu = [
    { id: 1, title: "프로필", linkTo: "/profile", subNav: "프로필" },
    {
      id: 2,
      title: "서울 대기현황",
      linkTo: "/seouldust",
      subNav: "서울 대기현황",
    },
    { id: 3, title: "CRUD(firebase)", linkTo: "/board", subNav: "CRUD기능구현" },
    { id: 4, title: "ToDo List", linkTo: "/todo", subNav: "ToDoList" },
  ];

  return (
    <BrowserRouter>
      <Fragment>
        <ThemeProvider theme={theme}>
          <Header headerMenu={headerMenu} />
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/react_test" element={<Profile />} />
            <Route path="/jsx" element={<TabMenu />} />
            <Route path="/props" element={<SecTest />} />
            <Route path="/useref" element={<RefEx />} />
            <Route path="/useeffect" element={<EmailStateForm />} />
            <Route path="/testcontext" element={<TestContext />} />
            <Route path="/seouldust" element={<DustList />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/cleanup" element={<TimerEfc />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/Scss" element={<ScssComponent />} />
            <Route path="/CSSModule" element={<CSSModule />} />
            <Route path="/styled" element={<StyledComponent />} />
            <Route path="/styledObj" element={<StyledObj />} />
            <Route path="/day" element={<Day />} />
            <Route path="/weather" element={<WeatherApi />} />
            <Route path="/dummylist" element={<DummyList />} />
            <Route path="/select" element={<Select />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/board" element={<Board />} />
            <Route path="/CreatePost" element={<CreatePost />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Fragment>
    </BrowserRouter>
  );
};
export default App;
