import React, { Fragment } from "react";
import LogoCircle from "./logoCircle";
import { useWindowSize } from "./hooks.js";

const Developing = () => {
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
          <LogoCircle />

          <h1 style={{ fontFamily: "Caveat, cursive", marginTop: "1rem" }}>
            Fork my code on Github <br /> or Check out my Codesandbox
          </h1>

          <video
            loop
            autoPlay
            style={{
              marginTop: "2rem",
              height: "auto",
              width: "80%",
              border: "1px solid black"
            }}
          >
            <source src="/justinesiteportfolio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <video
            loop
            autoPlay
            style={{
              marginTop: "1rem",
              height: "auto",
              width: "80%",
              border: "1px solid black"
            }}
          >
            <source src="/tagalogportfolio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <LogoCircle />

          <h1 style={{ fontFamily: "Caveat, cursive" }}>
            Fork my code on Github or Check out My Codesandbox
          </h1>
          <video
            loop
            autoPlay
            style={{
              marginTop: "1rem",
              height: "auto",
              width: "60%",
              border: "1px solid black"
            }}
          >
            <source src="/justinesiteportfolio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <video
            loop
            autoPlay
            style={{
              marginTop: "1rem",
              height: "auto",
              width: "60%",
              border: "1px solid black"
            }}
          >
            <source src="/tagalogportfolio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </Fragment>
  );
};

export default Developing;
