import React from "react";

import GuardedRoute from "./router/GuardedRoute";

import CssBaseline from "@material-ui/core/CssBaseline";

// mobx
import { observer, inject } from "mobx-react";

// route
import { Route, Switch } from "react-router-dom";

// pages
import SignIn from "./pages/SingIn";
import Home from "./pages/Home";

console.log(process.env.NODE_ENV);

const App = inject("accountStore")(
  observer((props) => {
    return (
      <div className="App">
        <CssBaseline />
        <Switch>
          <GuardedRoute
            path="/"
            exact
            component={Home}
            accountStore={props.accountStore}
          />
          <Route path="/signIn" component={SignIn} />
        </Switch>
      </div>
    );
  })
);

export default App;
