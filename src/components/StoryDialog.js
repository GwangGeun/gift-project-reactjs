import React, { useEffect } from "react";
// mobx
import { inject, observer } from "mobx-react";

// material ui
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// util library
import * as dateFns from "date-fns";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "85%",
    // minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const StoryDialog = inject(
  "accountStore",
  "componentStore"
)(
  observer((props) => {
    useEffect(() => {
      let datesList = [];
      const endDayOfThisMonth = dateFns.format(
        dateFns.endOfMonth(new Date()),
        "d"
      );
      for (let i = 1; i < endDayOfThisMonth; i++) {
        datesList.push(i);
      }
      // 사용자가 선택 가능한 날짜 리스트 및 오늘 날짜 변수 지정
      setDatesList(datesList);

      // 처음 등록하는 경우
      if (props.componentStore.storyDialogPurposes === "write") {
        setContent(null);
        setDates(dateFns.format(new Date(), "d"));
      }
      // 기존의 내용을 수정하려는 경우
      else {
        setContent(props.componentStore.storyDialogContents);
        setDates(props.componentStore.storyDialogDates);
      }
    }, [
      props.componentStore.storyDialogPurposes,
      props.componentStore.storyDialogContents,
      props.componentStore.storyDialogDates,
    ]);

    const classes = useStyles();

    const [maxWidth] = React.useState("xs");
    const [fullWidth] = React.useState(true);
    const [datesList, setDatesList] = React.useState([]);
    const [dates, setDates] = React.useState(0);
    const [content, setContent] = React.useState(null);

    const handleClose = () => {
      setContent(null);
      setDates(dateFns.format(new Date(), "d"));
      props.componentStore.setStoryDialog(
        false,
        props.componentStore.storyDialogPurposes,
        null,
        null
      );
    };

    const handleSelectChange = (event) => {
      setDates(event.target.value);
    };

    return (
      <>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={props.componentStore.storyDialogStatus}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="alert-dialog-title">
            {props.componentStore.storyDialogPurposes === "write"
              ? "등록"
              : "수정"}
          </DialogTitle>

          <DialogContent>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">날짜</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={dates}
                onChange={handleSelectChange}
              >
                {datesList.map((val, i) => {
                  return (
                    <MenuItem value={val} key={i}>
                      {val}
                    </MenuItem>
                  );
                })}
              </Select>
              <Box mt={3} />
              <TextField
                id="outlined-multiline-static"
                label="제목"
                multiline
                defaultValue={content}
                onChange={({ target: { value } }) => setContent(value)}
                rows={2}
                variant="outlined"
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              취소
            </Button>
            <Button onClick={handleClose} color="primary">
              {props.componentStore.storyDialogPurposes === "write"
                ? "등록"
                : "수정"}
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  })
);

export default StoryDialog;
