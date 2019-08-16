import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import FlashUpFooter from "./components/flashUpFooter";

const SideBar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexGrow: "1",
        flexDirection: "column"
      }}
    >
      <Router>
        <FlashUpFooter />
      </Router>
    </div>
  );
};

export default SideBar;
