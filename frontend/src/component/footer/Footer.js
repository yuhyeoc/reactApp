import React, { Component, Fragment } from "react";
import jquery from "jquery";
import Visitors from "../section/Visitor";
window.$ = window.jquery = jquery;
/*eslint-disable*/

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footerWrap">
          <span className="contactFooter">
            Contact : <a href="mailto:yhyhyh8@gmail.com">yhyhyh8@gmail.com</a>
          </span>
          <Visitors></Visitors>
        </div>
      </footer>
    );
  }
}
export default Footer;
