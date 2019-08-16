import React, { useState, Fragment } from "react";
import { useWindowSize } from "./hooks.js";

const Hireme = () => {
  const size = useWindowSize();

  return (
    <Fragment>
      {size.width < 1080 ? (
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
          <h2
            style={{ fontFamily: "Rock Salt, cursive", letterSpacing: "0.1em" }}
          >
            Responsive Web and Mobile Design
          </h2>
          <h2
            style={{
              fontFamily: "Rock Salt, cursive",
              letterSpacing: "0.1em",
              marginTop: "1rem"
            }}
          >
            Ethereum Blockchain Developer
          </h2>
          <h2
            style={{ fontFamily: "Rock Salt, cursive", letterSpacing: "0.1em" }}
          >
            Copy & Content Writing
          </h2>
          <h3 style={{ marginTop: "1rem" }}>Email: dschmid00@gmail.com</h3>
        </div>
      ) : (
        <div>
          <h1
            style={{
              fontFamily: "Caveat, cursive",
              color: "#891D34",
              fontSize: "5em"
            }}
          >
            Hire Me For Your Next Project
          </h1>
          <h2
            style={{ fontFamily: "Rock Salt, cursive", letterSpacing: "0.1em" }}
          >
            Responsive Web and Mobile Design
          </h2>
          <h2
            style={{
              fontFamily: "Rock Salt, cursive",
              letterSpacing: "0.1em",
              marginTop: "1rem"
            }}
          >
            Ethereum Blockchain Developer
          </h2>
          <h2
            style={{ fontFamily: "Rock Salt, cursive", letterSpacing: "0.1em" }}
          >
            Copy & Content Writing
          </h2>
          <h3 style={{ marginTop: "1rem" }}>Email: dschmid00@gmail.com</h3>
        </div>
      )}
      )
    </Fragment>
  );
};
export default Hireme;
