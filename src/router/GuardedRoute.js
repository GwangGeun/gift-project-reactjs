// import React from "react";
import { Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

import { getTokenPayload } from "../utils/LocalStorage";

const GuardedRoute = observer(
  ({ component: Component, accountStore, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          // localstorage & mobx check
          accountStore.auth === true &&
          getTokenPayload() !== "error" &&
          getTokenPayload().email ? (
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
