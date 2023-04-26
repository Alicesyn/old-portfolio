import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./about";
import Home from "./home";
import TechStack from "./tech-stack";

const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "#", exact: true, name: "About", component: About },
  { path: "#tech-stack", exact: true, name: "Tools", component: TechStack },
];
const Navigation = () => {
  return (
    <Switch>
      {routes.map((route, idx) => (
        <Route
          key={idx}
          exact={route.exact}
          path={route.path}
          render={(props : any) => <route.component {...props} />}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default Navigation;
