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
import Story from "./pages/Story";
import StoryDetail from "./pages/StoryDetail";
import Bookmark from "./pages/Bookmark";

import Blog from "./pages/Temp/Blog";

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
          <GuardedRoute
            path="/story/:year/:month/:day"
            exact
            component={StoryDetail}
            accountStore={props.accountStore}
          />
          <GuardedRoute
            path="/story"
            exact
            component={Story}
            accountStore={props.accountStore}
          />
          <GuardedRoute
            path="/bookmark"
            component={Bookmark}
            accountStore={props.accountStore}
          />
          <Route path="/signIn" component={SignIn} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    );
  })
);

export default App;
