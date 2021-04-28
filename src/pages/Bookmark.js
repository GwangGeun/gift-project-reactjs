import React, { useEffect } from "react";
// mobx
import { inject, observer } from "mobx-react";

// material ui
import Container from "@material-ui/core/Container";
// component
import Header from "../components/Header";

const Bookmark = inject("accountStore")(
  observer((props) => {
    // const classes = useStyles();

    useEffect(() => {
      // api call
      console.log("useEffect");
    }, []);

    return (
      <>
        <Container maxWidth="lg">
          <Header />
          <main>
            <h3>hello bookmark </h3>
          </main>
        </Container>
      </>
    );
  })
);

export default Bookmark;
