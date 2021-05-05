import { inject, observer } from "mobx-react";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";

import CardMedia from "@material-ui/core/CardMedia";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "10px",
  },
  cardMediaImg: {
    padding: "20px",
    width: "100%",
    height: "95vh",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ImageDetailDailog = inject("componentStore")(
  observer((props) => {
    const classes = useStyles();
    // const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      props.componentStore.setImageDetailDailog(
        false,
        props.componentStore.imageDetailDialogIds
      );
    };

    return (
      <>
        <div>
          <Dialog
            fullScreen
            open={props.componentStore.imageDetailDialogStatus}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              className={classes.header}
            >
              <CloseIcon />
            </IconButton>
            <CardMedia
              className={classes.cardMediaImg}
              image="https://i.picsum.photos/id/99/200/300.jpg?hmac=Hnlwbe_FdfH-64B_lvRcwVnK7KViI5YgtT8AQRfkFwY"
              title="Post title"
              component="img"
            ></CardMedia>
          </Dialog>
        </div>
      </>
    );
  })
);

export default ImageDetailDailog;
