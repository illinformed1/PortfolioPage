import React, { useContext, createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  __RouterContext
} from "react-router-dom";
import { animated, useTransition } from "react-spring";

import Developing from "./Developing";
import Hireme from "./Hireme";
import Writing from "./Writing";
import Blog from "./Blog";

function useRouter() {
  return useContext(__RouterContext);
}

const Main = () => {
  const { location } = useRouter();

  const transitions = useTransition(location, location => location.key, {
    from: {
      opacity: 0,
      position: "absolute",
      marginTop: "20%",
      width: "100%",
      transform: "translate3d(100%, 0, 0)"
    },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-50%, 0, 0)" }
  });

  return transitions.map(({ item, props: transition, key }) => (
    <animated.div key={key} style={transition}>
      <Switch location={item}>
        <Route path="/hire" component={Hireme} />
        <Route path="/developing" component={Developing} />
        <Route path="/writing" component={Writing} />
        <Route path="/blog" component={Blog} />
        />
      </Switch>
    </animated.div>
  ));
};

export default Main;
