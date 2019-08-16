import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { useState, useEffect } from "react";
import { useWindowSize } from "./hooks.js";

const App = () => {
  const size = useWindowSize();

  return <div>{size.width > 1420 ? <Desktop /> : <Mobile />}</div>;
};

// Hook

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
