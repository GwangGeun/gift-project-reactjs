// import React from "react";
import { Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

const GuardedRoute = observer(
  ({ component: Component, accountStore, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          accountStore.user.email != null ? (
            <Component {...props} />
          ) : (
            <Redirect to="/signIn" />
          )
        }
      />
    );
  }
);

export default GuardedRoute;
