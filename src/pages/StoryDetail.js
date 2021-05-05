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
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

// component
import Header from "../components/Header";
import ConfirmDialog from "../components/CofirmDialog";
import ImageDetailDailog from "../components/ImageDetailDialog";

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

    const [anchorEl, setAnchorEl] = React.useState(null);
    const anchorOpen = Boolean(anchorEl);

    const anchorClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const anchorClose = (val) => {
      props.componentStore.setDialog(
        true,
        "해당 사진을 썸네일로 지정하시겠습니까?"
      );

      setAnchorEl(null);
    };

    const ConfirmDialogAgreeClicked = () => {
      console.log("ConfirmDialogAgreeClicked");
    };

    const options = ["날짜 이동", "썸네일 지정", "삭제"];
    const ITEM_HEIGHT = 48;

    return (
      <>
        <Container maxWidth="lg">
          <Header />
          <main>
            {/* components */}
            <ConfirmDialog
              ConfirmDialogAgreeClicked={ConfirmDialogAgreeClicked}
            />
            <ImageDetailDailog />
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
                    <Button>글</Button>
                    <Button>사진</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Grid>
            {/* first section */}
            <Grid container spacing={3} className={classes.mainGrid}>
              <Grid item xs={12} md={4} className={classes.secondSubGrid}>
                <Card className={classes.secondSubGridCard}>
                  {/* background */}
                  <CardActions
                    style={{
                      height: "50px",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <IconButton
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={anchorClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={anchorOpen}
                      onClose={anchorClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem
                          key={option}
                          selected={option === "날짜 이동"}
                          onClick={() => anchorClose(option)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  </CardActions>
                  {/* content */}
                  <CardActionArea
                    component="a"
                    href="/story/2021/4/21"
                    className={classes.secondSubGridCardActionArea}
                  >
                    <CardMedia
                      className={classes.secondSubGridCardMedia}
                      image="https://i.picsum.photos/id/99/200/300.jpg?hmac=Hnlwbe_FdfH-64B_lvRcwVnK7KViI5YgtT8AQRfkFwY"
                      title="Post title"
                      component="img"
                    ></CardMedia>
                    <CardContent
                      className={classes.secondSubGridCardContent}
                    ></CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </main>
        </Container>
      </>
    );
  })
);

export default StoryDetail;
