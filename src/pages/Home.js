import React, { useEffect } from "react";

// router
import { useHistory } from "react-router-dom";

// material ui
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

// mobx
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

// utils
import { getTokenPayload } from "../utils/LocalStorage";

// component
import Header from "../components/Header";

// api
import { profileApi } from "../api/pages/ProfileApi";

// const useStyles = makeStyles((theme) => ({
//   test: {
//     marginLeft: theme.spacing(8),
//   },
// }));

const Home = inject("accountStore")(
  observer((props) => {
    // const classes = useStyles();
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

    return (
      <>
        <Container maxWidth="lg">
          <Header />
          <main>
            <h3>hello home </h3>
          </main>
        </Container>
      </>
    );
  })
);

export default Home;
