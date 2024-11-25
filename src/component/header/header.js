import React, { useState, useEffect, useRef } from "react";
import logo from "../../logo.svg";
import styles from "../../component/css/AppStyles.module.scss";
// FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { BiAlignRight } from "react-icons/bi";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Link } from "react-router-dom";

document.title = "유혁님의 포트폴리오";

function Header(props) {
  const [isOpen, setMenu] = useState(false); // 메뉴의 초기값을 false로 설정
  const menuRef = useRef(null); // 메뉴 노드를 참조

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    }
    // 이벤트 리스너 등록
    document.addEventListener("mousedown", handleClickOutside);
    // 컴포넌트가 언마운트되면 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // body 클릭 시 메뉴 닫기
  useEffect(() => {
    function handleBodyClick(event) {
      if (!event.target.closest(".header")) {
        setMenu(false);
      }
    }

    // 이벤트 리스너 등록
    document.body.addEventListener("click", handleBodyClick);
    // 컴포넌트가 언마운트되면 이벤트 리스너 제거
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);
  const toggleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  let navLis = [];
  for (let i = 0; i < props.headerMenu.length; i++) {
    let t = props.headerMenu[i];
    navLis.push(
      <li key={t.id}>
        <Link to={t.linkTo}>{t.title}</Link>
      </li>
    );
  }
  let subNavLis = [];
  for (let i = 0; i < props.headerMenu.length; i++) {
    let t = props.headerMenu[i];
    subNavLis.push(
      <li key={t.id} onClick={toggleMenu}>
        <Link to={t.linkTo}>{t.subNav}</Link>
      </li>
    );
  }
  return (
    <div className={`${styles.headerCustom} header`} ref={menuRef}>
      <ul className="header-wrapper">
        <li
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <Link className="hd_logo" to="/reactApp">
            {/* <img src="img/react.png" alt="리액트" /> */}
            Portfolio
            {/* <img src="img/doglogo.png"></img> */}
          </Link>
        </li>
        <ul className="navPc">{navLis}</ul>
        <li className="toggleMenuImg" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="2x" />
          {/* <img src="img/menu.svg"></img> */}
        </li>
        {/* <li>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
        </li> */}
      </ul>
      <ul className={isOpen ? "show-menu sideMenu" : "hide-menu sideMenu"}>
        {subNavLis}
        <li>
          <a href="#" onClick={toggleMenu}>
            닫기
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Header;
