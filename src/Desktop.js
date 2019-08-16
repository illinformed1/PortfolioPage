import React, { Fragment, useState, createRef, useRef, useEffect } from "react";

import Sidebar from "./Sidebar";
import NameProf from "./NameProf";

import "./styles.css";

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop); // General scroll to element function

function Desktop() {
  return (
    <Fragment>
      {/* <firstScreen>*/}

      <div className="App" style={mainAppStyles}>
        <NameProf />
        <Sidebar />
      </div>
    </Fragment>
  );
}

const mainAppStyles = {
  display: "flex",
  height: "100vh",
  width: "100vw",
  background: "#F8F8FA"
};

export default Desktop;
