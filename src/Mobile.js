import React, { Fragment, useState, createRef, useRef, useEffect } from "react";

import FlashUpFooter from "./components/flashUpFooter";
import Main from "./Main";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

const Mobile = () => {
  return (
    <Fragment>
      <div
        style={{
          position: "absolute",
          background: "url(/blue.jpg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "20rem",
          height: "20rem",
          top: "0",
          left: "0"
        }}
      />
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
      <div
        style={{
          position: "fixed",
          background: "url(/bgr.jpg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "20rem",
          height: "20rem",
          bottom: "0",
          right: "0"
        }}
      />
    </Fragment>
  );
};

export default Mobile;
