import React from "react";
import { Route, Redirect } from "react-router-dom";

const ApplicationRoute = ({ component: Component, ...rest }: any) => {
  const hasAccess = true;

  return (
    <Route
      {...rest}
      render={props => {
        if (!hasAccess) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default ApplicationRoute;
