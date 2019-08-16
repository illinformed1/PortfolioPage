import React, { useState } from "react";
import "./logoCircle.css";

const logos = [
  "html",
  "js",
  "react",
  "rs",
  "sc",
  "sol",
  "graph",
  "sass",
  "node",
  "mongo"
];

let setClass = logo => {
  switch (logo) {
    case "html":
      return "deg0";
    case "js":
      return "deg36";
    case "react":
      return "deg72";
    case "rs":
      return "deg108";
    case "sc":
      return "deg144";
    case "sol":
      return "deg180";
    case "graph":
      return "deg216";
    case "sass":
      return "deg252";
    case "node":
      return "deg288";
    case "mongo":
      return "deg324";
    default:
      return null;
  }
};

const LogoCircle = ({ scroll }) => {
  return (
    <div className="circle-container">
      <img className="face" alt="me face" src="/langlogo/face.jpg" />
      {logos.map(logo => {
        return (
          <div className="inner-container">
            <img
              onClick={scroll}
              src={`/langlogo/${logo}.png`}
              alt={logo}
              className={`${setClass(logo)}`}
            />
          </div>
        );
      })}
    </div>
  );
};
export default LogoCircle;
