import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import Desktop from "./Desktop";
import Tablet from "./Tablet";
import Mobile from "./Mobile";
import { useState, useEffect } from "react";
import { useWindowSize } from "./hooks.js";

const App = () => {
  const size = useWindowSize();

  function screenSize({ width }) {
    if (width > 1420) {
      return <Desktop />;
    } else if (width < 1080) {
      return <Mobile />;
    } else {
      return <Tablet />;
    }
  }

  return <div>{screenSize(size)}</div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
