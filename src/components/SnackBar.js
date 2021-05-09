import React from "react";
import { inject, observer } from "mobx-react";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

/**
 * message severity : 4 kinds
 * cf) https://material-ui.com/components/snackbars/
 */
const SnackBar = inject("componentStore")(
  observer((props) => {
    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }

      props.componentStore.setSnackBar(false);
    };
    return (
      <>
        <Snackbar
          open={props.componentStore.snackBar}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={props.componentStore.snackBarSeverity}
          >
            {props.componentStore.snackBarContent}
          </Alert>
        </Snackbar>
      </>
    );
  })
);

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export default SnackBar;
