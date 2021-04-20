import React, { useEffect } from "react";

// router
import { useHistory } from "react-router-dom";

// mobx
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

// utils
import { getTokenPayload } from "../utils/LocalStorage";

// api
import { profileApi } from "../api/pages/ProfileApi";

const Home = inject("accountStore")(
  observer((props) => {
    const history = useHistory();

    useEffect(() => {
      // localstorage check
      if (getTokenPayload() === "error" || !getTokenPayload().email) {
        props.accountStore.logout();
        history.push("/signIn");
        return;
      }

      // api call
      const getApi = async () => {
        const res = await profileApi(getTokenPayload().email);
        if (res === "401") {
          props.accountStore.logout();
          history.push("/signIn");
          return;
        }
      };

      getApi();
    }, [history, props.accountStore]);

    return (
      <>
        <Link to="/signIn">SignIn</Link>
        {/* <h3>hello home : {props.accountStore.user.email}</h3> */}
        <h3>hello home</h3>
      </>
    );
  })
);

export default Home;
