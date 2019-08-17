import React, { useState, Fragment } from "react";
import { useWindowSize } from "./hooks.js";

const Hireme = () => {
  const size = useWindowSize();

  return (
    <Fragment>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h1
          style={{
            fontFamily: "Caveat, cursive",
            color: "#891D34",
            fontSize: "5em"
          }}
        >
          Hire Me For Your Next Project
        </h1>
        <p
          style={{
            marginTop: "2rem",
            fontFamily: "Chewy, cursive",
            letterSpacing: "0.1em",
            fontSize: "2rem"
          }}
        >
          Responsive Web and Mobile Design
        </p>
        <p
          style={{
            fontFamily: "Carter One, cursive",
            fontSize: "2rem",
            letterSpacing: "0.1em"
          }}
        >
          App & Dapp Developer
        </p>
        <p
          style={{
            fontFamily: "Fredericka the Great, cursive",
            letterSpacing: "0.1em",
            fontSize: "3em",
            marginTop: "2rem"
          }}
        >
          Copy & Content Writing
        </p>
        <p
          style={{
            fontFamily: "Racing Sans One, cursive",
            letterSpacing: "0.1em",
            fontSize: "2rem",
            marginTop: "2rem"
          }}
        >
          dschmid00@gmail.com
        </p>
      </div>
    </Fragment>
  );
};
export default Hireme;
