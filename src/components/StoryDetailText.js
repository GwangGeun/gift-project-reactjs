import React from "react";
// mobx
import { inject, observer } from "mobx-react";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  gridCard: {
    position: "relative",
    height: "300px",
  },
  gridCardMedia: {
    opacity: 0.5,
    position: "relative",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
  },
  gridCardActionArea: {
    position: "absolute",
    height: "100%",
    paddingTop: "10%",
  },
  gridCardContent: {
    position: "relative",
    backgroundColor: "transparent",
    top: 23,
    cursor: "pointer",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const StoryDetailText = inject(
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

    const openStoryDetailDialog = () => {
      //write or read
      props.componentStore.setRegisterTextDetailDailog(true);
    };

    const options = ["날짜 이동", "삭제"];
    const ITEM_HEIGHT = 48;

    return (
      <>
        <Card className={classes.gridCard}>
          <div>
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
            {/* content */}
            {/* <CardActionArea
            component="div"
            onClick={openStoryDetailDialog}
            className={classes.gridCardActionArea}
          > */}
            <CardContent
              className={classes.gridCardContent}
              onClick={openStoryDetailDialog}
            >
              <div>
                <h3>정광근 일기</h3>
              </div>
              <div>2020.12.31 11:00:01</div>
            </CardContent>
            {/* </CardActionArea> */}
          </div>
        </Card>
      </>
    );
  })
);

export default StoryDetailText;
