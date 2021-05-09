import React, { useEffect } from "react";
// mobx
import { inject, observer } from "mobx-react";

import { withStyles } from "@material-ui/core/styles";
import { green, blue, red, yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  textBody: {
    width: "100%",
    height: "40vh",
  },
}));

const StoryDetailText = inject(
  "accountStore",
  "componentStore"
)(
  observer((props) => {
    const classes = useStyles();

    const [maxWidth] = React.useState("lg");
    const [fullWidth] = React.useState(true);
    const [purpose, setPurpose] = React.useState("read");
    const [selectedValue, setSelectedValue] = React.useState("a");

    const handleClose = () => {
      props.componentStore.setRegisterTextDetailDailog(false);
    };

    const handleChange = (event) => {
      console.log(event.target.value);
      setSelectedValue(event.target.value);
    };

    const changePurpose = () => {
      if (purpose === "read") {
        setPurpose("write");
      } else {
        setPurpose("read");
      }
    };

    return (
      <>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={props.componentStore.registerTextDetailDailogStatus}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <div className={classes.header}>
              <div>
                <IconButton aria-label="modify-text" onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
                <span
                  style={{
                    marginTop: "10px",
                  }}
                >
                  일기장
                </span>
              </div>

              <IconButton
                color="secondary"
                aria-label="modify-text"
                onClick={changePurpose}
              >
                {purpose === "read" ? <CreateIcon /> : <SaveIcon />}
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent>
            <Box
              p={1}
              display={{
                xs: "none",
                sm: "none",
                md: "none",
                lg: "none",
                xl: "block",
              }}
            >
              {purpose === "read" ? (
                <TextField
                  className={classes.textBody}
                  id="outlined-multiline-static"
                  label="일기를 작성해주세요"
                  multiline
                  rows={25}
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              ) : (
                <TextField
                  className={classes.textBody}
                  id="outlined-multiline-static"
                  label="일기를 작성해주세요"
                  multiline
                  rows={25}
                  variant="outlined"
                />
              )}
            </Box>
            <Box
              p={1}
              display={{
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "none",
              }}
            >
              {purpose === "read" ? (
                <TextField
                  className={classes.textBody}
                  id="outlined-multiline-static"
                  label="일기를 작성해주세요"
                  multiline
                  rows={15}
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              ) : (
                <TextField
                  className={classes.textBody}
                  id="outlined-multiline-static"
                  label="일기를 작성해주세요"
                  multiline
                  rows={15}
                  variant="outlined"
                />
              )}
            </Box>
            <Box
              p={1}
              display={{
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              }}
            >
              {purpose === "read" ? (
                <TextField
                  className={classes.textBody}
                  id="outlined-multiline-static"
                  label="일기를 작성해주세요"
                  multiline
                  rows={10}
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              ) : (
                <TextField
                  className={classes.textBody}
                  id="outlined-multiline-static"
                  label="일기를 작성해주세요"
                  multiline
                  rows={10}
                  variant="outlined"
                />
              )}
            </Box>
            <FormControl
              component="fieldset"
              style={{
                marginTop: "20px",
              }}
            >
              <FormLabel component="legend">오늘의 기분</FormLabel>
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="top"
                style={{
                  marginTop: "20px",
                }}
              >
                <FormControlLabel
                  value="100"
                  control={
                    purpose === "read" ? (
                      <RedRadio
                        checked={selectedValue === "100"}
                        onChange={handleChange}
                        disabled
                      />
                    ) : (
                      <RedRadio
                        checked={selectedValue === "100"}
                        onChange={handleChange}
                      />
                    )
                  }
                  label="아주좋음"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="80"
                  control={
                    purpose === "read" ? (
                      <BlueRadio
                        checked={selectedValue === "80"}
                        onChange={handleChange}
                        disabled
                      />
                    ) : (
                      <BlueRadio
                        checked={selectedValue === "80"}
                        onChange={handleChange}
                      />
                    )
                  }
                  label="좋음"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="60"
                  control={
                    purpose === "read" ? (
                      <GreenRadio
                        checked={selectedValue === "60"}
                        onChange={handleChange}
                        disabled
                      />
                    ) : (
                      <GreenRadio
                        checked={selectedValue === "60"}
                        onChange={handleChange}
                      />
                    )
                  }
                  label="보통"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="40"
                  control={
                    purpose === "read" ? (
                      <YellowRadio
                        checked={selectedValue === "40"}
                        onChange={handleChange}
                        disabled
                      />
                    ) : (
                      <YellowRadio
                        checked={selectedValue === "40"}
                        onChange={handleChange}
                      />
                    )
                  }
                  label="살짝 안좋음"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="20"
                  control={
                    purpose === "read" ? (
                      <Radio
                        checked={selectedValue === "20"}
                        onChange={handleChange}
                        disabled
                      />
                    ) : (
                      <Radio
                        checked={selectedValue === "20"}
                        onChange={handleChange}
                      />
                    )
                  }
                  label="내일을 기대"
                  labelPlacement="start"
                />
              </RadioGroup>
            </FormControl>
          </DialogContent>
        </Dialog>
      </>
    );
  })
);

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const BlueRadio = withStyles({
  root: {
    color: blue[400],
    "&$checked": {
      color: blue[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const RedRadio = withStyles({
  root: {
    color: red[400],
    "&$checked": {
      color: red[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const YellowRadio = withStyles({
  root: {
    color: yellow[400],
    "&$checked": {
      color: yellow[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default StoryDetailText;
