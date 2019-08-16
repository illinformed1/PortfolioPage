import React, { createRef, useEffect, useState, useRef } from "react";

const NameProf = () => {
  const ref = createRef();
  const [prof, setProf] = useState("Web Developer");

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    // Your custom logic here
    if (prof === "Web Developer") {
      setProf("Content Writer");
    } else {
      setProf("Web Developer");
    }
  }, 7000);

  const handleClick = () =>
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  return (
    <div
      style={{
        background: "url(/desk.jpg)",
        backgroundSize: " 100% 100vh",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        top: "0",
        maxWidth: "1450px",
        left: "5vw",

        borderRight: " solid black"
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "40%",
          whiteSpace: "nowrap",
          top: "30%",
          display: "flex",

          flexDirection: "column"
        }}
      >
        <h1
          style={{
            fontSize: "5em",
            color: "#24c8ff",

            fontFamily: "Acme, sans-serif"
          }}
        >
          DEAN SCHMID
        </h1>

        <div className="typewriter" style={{ width: "fit-content" }}>
          <h1
            style={{
              fontSize: "3em",
              color: "black",

              width: "fit-content",
              fontFamily: "Kalam, cursive"
            }}
          >
            {prof}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NameProf;
