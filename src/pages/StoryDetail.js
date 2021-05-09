import React, { useEffect } from "react";
// mobx
import { inject, observer } from "mobx-react";

import { useParams } from "react-router-dom";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import Typography from "@material-ui/core/Typography";

// component
import Header from "../components/Header";
import ConfirmDialog from "../components/CofirmDialog";
import ImageDetailDailog from "../components/ImageDetailDialog";

import StoryDetailTextDialog from "../components/StoryDetailTextDialog";
import StoryDetailImage from "../components/StoryDetailImage";
import StoryDetailText from "../components/StoryDetailText";
import Loading from "../components/Loading";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(1),
    // backgroundColor: "red",
  },
  firstSubGrid: {
    marginTop: theme.spacing(1),
    // backgroundColor: "yellow",
  },
  secondSubGrid: {
    marginTop: theme.spacing(1),
  },
  secondSubGridCard: {
    position: "relative",
    height: "300px",
  },
  secondSubGridCardMedia: {
    opacity: 0.5,
    position: "relative",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
  },
  secondSubGridCardActionArea: {
    position: "absolute",
  },
  secondSubGridCardContent: {
    position: "relative",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const StoryDetail = inject(
  "accountStore",
  "componentStore"
)(
  observer((props) => {
    const classes = useStyles();
    let { year, month, day } = useParams();

    const ConfirmDialogAgreeClicked = () => {
      console.log("ConfirmDialogAgreeClicked");
    };

    const getListingApi = () => {
      console.log("getListingApi called");
    };

    return (
      <>
        <Container maxWidth="lg">
          <Header />
          <main>
            {/* components - utils */}
            <Loading />
            {/* components - dialog*/}
            <ConfirmDialog
              ConfirmDialogAgreeClicked={ConfirmDialogAgreeClicked}
            />
            <ImageDetailDailog />
            <StoryDetailTextDialog getListingApi={getListingApi} />
            {/* first section */}
            <Grid container spacing={3} className={classes.mainGrid}>
              <Grid item xs={8} md={8} className={classes.firstSubGrid}>
                <Typography
                  style={{
                    fontSize: 24,
                  }}
                >
                  {year}-{month}-{day}
                </Typography>
              </Grid>
              <Grid item xs={4} md={4} className={classes.firstSubGrid}>
                <Grid container justify="flex-end" alignItems="center">
                  <ButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                  >
                    <Button
                      onClick={() =>
                        props.componentStore.setRegisterTextDetailDailog(true)
                      }
                    >
                      일기
                    </Button>
                    <Button>사진</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Grid>
            {/* first section */}
            <Grid container spacing={3} className={classes.mainGrid}>
              <Grid item xs={12} md={4} className={classes.secondSubGrid}>
                <StoryDetailImage></StoryDetailImage>
              </Grid>
              <Grid item xs={12} md={4} className={classes.secondSubGrid}>
                <StoryDetailText></StoryDetailText>
              </Grid>
            </Grid>
          </main>
        </Container>
      </>
    );
  })
);

export default StoryDetail;
