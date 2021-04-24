import { inject, observer } from "mobx-react";

// store
// import Component from "../store/Component";

// material ui
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// const component = new Component();

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  loading: {
    backgroundColor: "red",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Loading = inject("componentStore")(
  observer((props) => {
    const classes = useStyles();

    return (
      <>
        <Backdrop
          className={classes.backdrop}
          open={props.componentStore.loadingStatus}
        >
          <Box position="relative" display="inline-flex">
            <CircularProgress size={100} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="body2" component="div">
                {props.componentStore.loadingContents}
              </Typography>
            </Box>
          </Box>
        </Backdrop>
      </>
    );
  })
);

export default Loading;
