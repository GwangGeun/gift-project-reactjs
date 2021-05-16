import React from "react";
// mobx
import { inject, observer } from "mobx-react";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Box from "@material-ui/core/Box";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  gridCard: {
    position: "relative",
    height: "300px",
  },
  gridCardAction: {
    height: "50px",
    display: "flex",
    justifyContent: "flex-end",
  },
  gridCardMedia: {
    opacity: 0.5,
    position: "relative",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
    cursor: "pointer",
  },
  gridCardActionArea: {
    position: "absolute",
    width: "100%",
  },
  gridCardContent: {
    position: "relative",
    backgroundColor: "transparent",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const StoryDetailImage = inject(
  "accountStore",
  "componentStore"
)(
  observer((props) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const anchorOpen = Boolean(anchorEl);
    const [bookMarkStatus, setBookMarkStatus] = React.useState(false);

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

    const setBookMark = () => {
      if (bookMarkStatus) {
        setBookMarkStatus(false);
      } else {
        setBookMarkStatus(true);
      }
    };

    const openImageDetailDialog = () => {
      props.componentStore.setImageDetailDailog(true, "1");
    };

    const options = ["날짜 이동", "썸네일 지정", "삭제"];
    const ITEM_HEIGHT = 48;

    return (
      <>
        <Card className={classes.gridCard}>
          {/* content */}
          <div className={classes.gridCardActionArea}>
            {/* background */}
            <CardActions className={classes.gridCardAction}>
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={setBookMark}
              >
                <Box display={bookMarkStatus === true ? "block" : "none"}>
                  <StarIcon
                    style={{
                      marginTop: "5px",
                    }}
                  />
                </Box>
                <Box display={bookMarkStatus === false ? "block" : "none"}>
                  <StarBorderIcon
                    style={{
                      marginTop: "5px",
                    }}
                  />
                </Box>
              </IconButton>
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
            <CardMedia
              className={classes.gridCardMedia}
              onClick={openImageDetailDialog}
              image="https://i.picsum.photos/id/99/200/300.jpg?hmac=Hnlwbe_FdfH-64B_lvRcwVnK7KViI5YgtT8AQRfkFwY"
              title="Post title"
              component="img"
            ></CardMedia>
            <CardContent className={classes.gridCardContent}></CardContent>
          </div>
        </Card>
      </>
    );
  })
);

export default StoryDetailImage;
