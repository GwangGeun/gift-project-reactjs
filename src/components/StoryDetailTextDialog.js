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

import Loading from "./Loading";
import SnackBar from "./SnackBar";

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

const StoryDetailTextDialog = inject(
  "accountStore",
  "componentStore"
)(
  observer((props) => {
    const classes = useStyles();

    const [maxWidth] = React.useState("lg");
    const [fullWidth] = React.useState(true);
    const [selectedValue, setSelectedValue] = React.useState("100");

    const handleClose = () => {
      props.componentStore.setRegisterTextDetailDailog(false);
    };

    const handleChange = (event) => {
      console.log(event.target.value);
      setSelectedValue(event.target.value);
    };

    const changePurpose = () => {
      if (props.componentStore.registerTextDetailDailogPurposes === "read") {
        props.componentStore.setRegisterTextDetailDailogDetail("id", "write");
      } else {
        // props.componentStore.setLoading(true, "?????? ???...");
        // props.getListingApi();
        // props.componentStore.setSnackBar(true);
        // props.componentStore.setSnackBarDetail("success", "?????????????????????.");

        props.componentStore.setRegisterTextDetailDailogDetail("id", "read");
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
          <Loading />
          <SnackBar />
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
                  ?????????
                </span>
              </div>

              <IconButton
                color="secondary"
                aria-label="modify-text"
                onClick={changePurpose}
              >
                {props.componentStore.registerTextDetailDailogPurposes ===
                "read" ? (
                  <CreateIcon />
                ) : (
                  <SaveIcon />
                )}
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
              {props.componentStore.registerTextDetailDailogPurposes ===
              "read" ? (
                <TextField
                  className={classes.textBody}
                  id="outlined-multiline-static"
                  label="????????? ??????????????????"
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
                  label="????????? ??????????????????"
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
              {props.componentStore.registerTextDetailDailogPurposes ===
              "read" ? (
                <TextField
                  className={classes.textBody}
                  id="outlined-multiline-static"
                  label="????????? ??????????????????"
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
                  label="????????? ??????????????????"
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
              {props.componentStore.registerTextDetailDailogPurposes ===
              "read" ? (
                <TextField
                  className={classes.textBody}
                  id="outlined-multiline-static"
                  label="????????? ??????????????????"
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
                  label="????????? ??????????????????"
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
              <FormLabel component="legend">????????? ??????</FormLabel>
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
                    props.componentStore.registerTextDetailDailogPurposes ===
                    "read" ? (
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
                  label="????????????"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="80"
                  control={
                    props.componentStore.registerTextDetailDailogPurposes ===
                    "read" ? (
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
                  label="??????"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="60"
                  control={
                    props.componentStore.registerTextDetailDailogPurposes ===
                    "read" ? (
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
                  label="??????"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="40"
                  control={
                    props.componentStore.registerTextDetailDailogPurposes ===
                    "read" ? (
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
                  label="?????? ?????????"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="20"
                  control={
                    props.componentStore.registerTextDetailDailogPurposes ===
                    "read" ? (
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
                  label="????????? ??????"
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

export default StoryDetailTextDialog;
