import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// mobx
import { Provider } from "mobx-react"; // MobX 에서 사용하는 Provider

import { BrowserRouter } from "react-router-dom";

// store
import AccountStore from "./store/Account";

// utils
import { getTokenPayload } from "./utils/LocalStorage";
const accountStore = new AccountStore();

// token 이 존재할 경우, mobx auth true 로 지정
if (getTokenPayload() !== "error") {
  accountStore.login();
} else {
  accountStore.logout();
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider accountStore={accountStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
