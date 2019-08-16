import React, { Fragment, useState, createRef, useRef, useEffect } from "react";

import FlashUpFooter from "./components/flashUpFooter";
import Main from "./Main";

import { BrowserRouter as Router } from "react-router-dom";

const Mobile = () => {
  return (
    <Fragment>
      <div style={{ width: "100%" }}>
        <h1
          style={{
            fontSize: "5em",
            marginTop: "10rem",
            color: "#3F3F3F",
            textAlign: "center",
            fontFamily: "Acme, sans-serif"
          }}
        >
          DEAN SCHMID
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-evenly"
          }}
        >
          <Router>
            {" "}
            <FlashUpFooter />
            <Main />
          </Router>
        </div>
      </div>
    </Fragment>
  );
};

export default Mobile;
