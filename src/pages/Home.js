import React, { useEffect } from "react";

// router
import { useHistory } from "react-router-dom";

// material ui
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// mobx
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

// utils
import { getTokenPayload } from "../utils/LocalStorage";

// api
import { profileApi } from "../api/pages/ProfileApi";

const useStyles = makeStyles((theme) => ({
  test: {
    marginLeft: theme.spacing(8),
  },
}));

const Home = inject("accountStore")(
  observer((props) => {
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
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

    /**
     * 이하 로그아웃
     */
    const logOut = () => {
      props.accountStore.logout();
      history.push("/signIn");
      return;
    };

    return (
      <>
        <Link to="/signIn">SignIn</Link>
        <Button
          variant="contained"
          color="primary"
          className={classes.test}
          onClick={logOut}
        >
          logOut
        </Button>
        {/* <h3>hello home : {props.accountStore.user.email}</h3> */}
        <h3>hello home</h3>
      </>
    );
  })
);

export default Home;
