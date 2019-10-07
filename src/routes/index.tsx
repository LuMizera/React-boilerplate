import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ApplicationRoute from "./application";

const Routes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <ApplicationRoute exact path="/dashboard" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default Routes;
