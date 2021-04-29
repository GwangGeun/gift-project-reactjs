import React, { useEffect } from "react";
// mobx
import { inject, observer } from "mobx-react";
// material ui
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// component
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(1),
    backgroundColor: "red",
  },
  subGrid: {
    marginTop: theme.spacing(1),
    backgroundColor: "yellow",
  },
}));

const Story = inject(
  "accountStore",
  "componentStore"
)(
  observer((props) => {
    const classes = useStyles();

    return (
      <div>
        <Container maxWidth="lg">
          <Header />
          <main>
            {/* first section */}
            <Grid container spacing={3} className={classes.mainGrid}>
              <Grid item xs={8} md={8} className={classes.subGrid}>
                <h3>date picker </h3>
              </Grid>
              <Grid item xs={4} md={4} className={classes.subGrid}>
                <h3>추억 등록 </h3>
              </Grid>
            </Grid>
            {/* second section */}
            <Grid container spacing={3} className={classes.mainGrid}>
              <Grid item xs={12} md={4} className={classes.subGrid}>
                <h3>추억 component </h3>
              </Grid>
              <Grid item xs={12} md={4} className={classes.subGrid}>
                <h3>추억 component </h3>
              </Grid>
              <Grid item xs={12} md={4} className={classes.subGrid}>
                <h3>추억 component </h3>
              </Grid>
            </Grid>
          </main>
        </Container>
      </div>
    );
  })
);

export default Story;
