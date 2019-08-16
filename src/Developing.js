import React, { Fragment } from "react";
import LogoCircle from "./logoCircle";

const Developing = () => {
  return (
    <Fragment>
      <div style={{ display: "flex" }}>
        <LogoCircle />

        <h1 style={{ fontFamily: "Caveat, cursive" }}>
          Fork my code on Github or Check out My Codesandbox
        </h1>
      </div>
      <video
        loop
        autoPlay
        style={{ height: "30rem", width: "auto", border: "1px solid black" }}
      >
        <source src="/justinesiteportfolio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        loop
        autoPlay
        style={{ height: "30rem", width: "auto", border: "1px solid black" }}
      >
        <source src="/tagalogportfolio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Fragment>
  );
};

export default Developing;
