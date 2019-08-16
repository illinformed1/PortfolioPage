import React from "react";

import FlashUpFooter from "./components/flashUpFooter";
import Main from "./Main";

import { BrowserRouter as Router } from "react-router-dom";

const Mobile = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column"
      }}
    >
      <Router>
        <div
          className="test"
          style={{
            display: "flex",
            height: "4rem",
            width: "100%",
            background: "linear-gradient(#4e76ad, #030303)"
          }}
        >
          {" "}
          <FlashUpFooter />
        </div>
        <div style={{ background: "linear-gradient(#4e76ad, white)" }}>
          <h1
            style={{
              fontSize: "4em",
              marginTop: "3rem",
              color: "#0A0F17",
              textAlign: "center",
              fontFamily: "Bangers, cursive",
              letterSpacing: "0.07em"
            }}
          >
            DEAN SCHMID
          </h1>
        </div>
        <div
          style={{
            position: "relative",
            top: "-5rem"
          }}
        >
          <Main />
        </div>
      </Router>
    </div>
  );
};

export default Mobile;
