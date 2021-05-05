import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { inject, observer } from "mobx-react";

const ConfirmDialog = inject("componentStore")(
  observer((props) => {
    const clickAgree = () => {
      props.componentStore.setDialog(false, "");
      // TODO
      console.log("agree btn clicked");
      props.ConfirmDialogAgreeClicked();
    };

    return (
      <>
        <Dialog
          open={props.componentStore.dialogStatus}
          onClose={() => props.componentStore.setDialog(false, "")}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"확인 창"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {props.componentStore.dialogContents}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() =>
                props.componentStore.setDialog(
                  false,
                  props.componentStore.dialogContents
                )
              }
              color="primary"
            >
              취소
            </Button>
            <Button onClick={clickAgree} color="primary" autoFocus>
              동의
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  })
);

export default ConfirmDialog;
