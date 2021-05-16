import React, { useEffect } from "react";
// mobx
import { inject, observer } from "mobx-react";

// date
import * as dateFns from "date-fns";
import DateFnsUtils from "@date-io/date-fns";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

// import CardHeader from "@material-ui/core/CardHeader";

// import Hidden from "@material-ui/core/Hidden";

// icon
// import SaveIcon from "@material-ui/icons/Save";

// component
import Header from "../components/Header";
import StoryDialog from "../components/StoryDialog";

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
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
  },
  secondSubGridCardAction: {
    position: "relative",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  secondSubGridCardContent: {
    position: "relative",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Story = inject(
  "accountStore",
  "componentStore"
)(
  observer((props) => {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
      setSelectedDate(date);
      const res = dateFns.format(date, "yyyy-MM");
      console.log(res);
    };

    const openStoryDialog = () => {
      props.componentStore.setStoryDialog(true, "write", null, null);
    };

    return (
      <div>
        <Container maxWidth="lg">
          {/* components */}
          <StoryDialog />
          <Header />
          <main>
            {/* first section */}
            <Grid container spacing={3} className={classes.mainGrid}>
              <Grid item xs={8} md={8} className={classes.firstSubGrid}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="flex-start">
                    <KeyboardDatePicker
                      margin="normal"
                      views={["year", "month"]}
                      inputVariant="outlined"
                      id="date-picker-dialog"
                      label="Date picker dialog"
                      format="yyyy-MM"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={4} md={4} className={classes.firstSubGrid}>
                <Grid container justify="flex-end" alignItems="center">
                  <Box mt={2}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={openStoryDialog}
                    >
                      등록
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {/* second section */}
            <Grid container spacing={3} className={classes.mainGrid}>
              <Grid item xs={12} md={4} className={classes.secondSubGrid}>
                <Card className={classes.secondSubGridCard}>
                  {/* background */}
                  <CardMedia
                    className={classes.secondSubGridCardMedia}
                    image="https://i.picsum.photos/id/99/200/300.jpg?hmac=Hnlwbe_FdfH-64B_lvRcwVnK7KViI5YgtT8AQRfkFwY"
                    title="Post title"
                    component="img"
                  ></CardMedia>
                  <CardActions className={classes.secondSubGridCardAction}>
                    <IconButton aria-label="delete">
                      <DeleteIcon fontSize="large" color="secondary" />
                    </IconButton>
                  </CardActions>
                  {/* content */}
                  <CardActionArea component="a" href="/story/2021/4/21">
                    <CardContent className={classes.secondSubGridCardContent}>
                      <Grid container>
                        <Grid item xs={12} md={12}>
                          <Typography
                            gutterBottom
                            style={{
                              whiteSpace: "normal",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              color: "black",
                              fontWeight: "bold",
                              fontSize: "32px",
                            }}
                          >
                            피망이와 산책을 즐겨요ㅎㅎ
                          </Typography>
                          <Typography
                            gutterBottom
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              color: "black",
                              fontSize: "20px",
                            }}
                          >
                            3월 2일
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              {/*  */}
              {/* <Grid item xs={12} md={4} className={classes.secondSubGrid}>
                <Grid container justify="center" alignItems="center">
                  <h3>추억 component </h3>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4} className={classes.secondSubGrid}>
                <Grid container justify="center" alignItems="center">
                  <h3>추억 component </h3>
                </Grid>
              </Grid> */}
            </Grid>
          </main>
        </Container>
      </div>
    );
  })
);

export default Story;
