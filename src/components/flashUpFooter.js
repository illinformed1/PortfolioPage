import React, { Fragment, useState, useContext } from "react";
import { useSpring, animated } from "react-spring";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  __RouterContext
} from "react-router-dom";

import Main from "../Main";

function useRouter() {
  return useContext(__RouterContext);
}

const footerArray = [
  {
    name: "Hire",
    style: { flexGrow: "1" },
    icon: `far fa-file-image`
  },
  { name: "Developing", style: { flexGrow: "1" }, icon: `fas fa-code` },
  { name: "Writing", style: { flexGrow: "1" }, icon: `fas fa-pen` },
  { name: "Blog", style: { flexGrow: "1" }, icon: `fas fa-th-large` }
];

const mainStyle = {
  fontFamily: "Acme, sans-serif",
  display: "flex",

  marginTop: "10%",

  alignItems: "center",
  justifyContent: "center"
};

let FlashUpFooter = () => {
  const [hire, setHire] = useState(false);
  const [developing, setDeveloping] = useState(false);
  const [writing, setWriting] = useState(false);
  const [blog, setBlog] = useState(false);

  const HireSpring = useSpring({
    height: hire ? "4rem" : "3rem",

    background: hire
      ? "linear-gradient(#474747 , #363636)"
      : "linear-gradient(#474747, #363636)",
    boxShadow: hire ? "inset 0 0 10px #000000" : "inset 0 0 15px #000000"
  });

  const DevelopingSpring = useSpring({
    height: developing ? "4rem" : "3rem",
    boxShadow: developing ? "inset 0 0 10px #000000" : "inset 0 0 15px #000000",
    background: developing
      ? "linear-gradient(#474747 , #363636)"
      : "linear-gradient(#474747, #363636)"
  });

  const WritingSpring = useSpring({
    height: writing ? "4rem" : "3rem",
    boxShadow: writing ? "inset 0 0 10px #000000" : "inset 0 0 15px #000000",
    background: writing
      ? "linear-gradient(#474747 , #363636)"
      : "linear-gradient(#474747, #363636)"
  });

  const BlogSpring = useSpring({
    height: blog ? "4rem" : "3rem",
    boxShadow: blog ? "inset 0 0 10px #000000" : "inset 0 0 15px #000000",
    background: blog
      ? "linear-gradient(#474747 , #363636)"
      : "linear-gradient(#474747, #363636)"
  });

  const selectSpring = item => {
    switch (item) {
      case "Hire":
        return HireSpring;
      case "Developing":
        return DevelopingSpring;
      case "Writing":
        return WritingSpring;
      case "Blog":
        return BlogSpring;

      default:
        return null;
    }
  };

  const selectState = item => {
    switch (item) {
      case "Hire":
        return setHire(!hire);
      case "Developing":
        return setDeveloping(!developing);
      case "Writing":
        return setWriting(!writing);
      case "Blog":
        return setBlog(!blog);

      default:
        return null;
    }
  };
  function NavLink(props) {
    return (
      <li>
        <Link style={{}} {...props} />
      </li>
    );
  }

  /*<animated.li
              
             
              >*/

  return (
    <Fragment>
      {footerArray.map(item => {
        return (
          <animated.li
            onMouseEnter={() => selectState(item.name)}
            onMouseLeave={() => selectState(item.name)}
            style={{
              ...item.style,
              ...selectSpring(item.name),
              ...mainStyle
            }}
          >
            <span>
              <i style={{ color: "#3AEEFF" }} className={`${item.icon}`} />{" "}
              <Link
                style={{ textDecoration: "none", color: "#3AEEFF" }}
                to={`/${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            </span>
          </animated.li>
        );
      })}
    </Fragment>
  );
};

export default FlashUpFooter;
