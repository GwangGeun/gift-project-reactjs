import { makeObservable, observable, action, computed } from "mobx";

class Component {
  /**
   * 이하 observable
   */
  loading = false;
  loadingContent = "로딩 중...";

  dialog = false;
  dialogContent = "정말 삭제하시겠습니까 ?";

  imageDetailDialog = false;
  imageDetailDialogId = 0;

  registerTextDetailDailog = false;

  snackBar = false;
  snackBarSeverity = "success";
  snackBarContent = "성공";

  constructor() {
    makeObservable(this, {
      // observable
      loading: observable,
      loadingContent: observable,
      dialog: observable,
      dialogContent: observable,
      imageDetailDialog: observable,
      imageDetailDialogId: observable,
      registerTextDetailDailog: observable,
      snackBar: observable,
      snackBarSeverity: observable,
      snackBarContent: observable,
      // action
      setLoading: action,
      setDialog: action,
      setImageDetailDailog: action,
      setRegisterTextDetailDailog: action,
      setSnackBar: action,
      setSnackBarDetail: action,
      // computed
      loadingStatus: computed,
      loadingContents: computed,
      dialogStatus: computed,
      dialogContents: computed,
      imageDetailDialogStatus: computed,
      imageDetailDialogIds: computed,
      registerTextDetailDailogStatus: computed,
    });
  }

  /**
   * 이하 action
   */
  //   @action
  setLoading = (loading, loadingContent) => {
    this.loading = loading;
    if (!loading) {
      this.loadingContent = "로딩 중...";
    } else {
      this.loadingContent = loadingContent;
    }
  };

  setDialog = (dialog, dialogContent) => {
    this.dialog = dialog;
    this.dialogContent = dialogContent;
  };

  setImageDetailDailog = (imageDetailDialog, imageDetailDialogId) => {
    this.imageDetailDialog = imageDetailDialog;
    this.imageDetailDialogId = imageDetailDialogId;
  };

  setRegisterTextDetailDailog = (registerTextDetailDailog) => {
    this.registerTextDetailDailog = registerTextDetailDailog;
  };

  setSnackBar = (snackBar) => {
    this.snackBar = snackBar;
  };

  setSnackBarDetail = (snackBarSeverity, snackBarContent) => {
    this.snackBarSeverity = snackBarSeverity;
    this.snackBarContent = snackBarContent;
  };

  /**
   * 이하 computed
   */
  get loadingStatus() {
    return this.loading;
  }
  get loadingContents() {
    return this.loadingContent;
  }

  get dialogStatus() {
    return this.dialog;
  }
  get dialogContents() {
    return this.dialogContent;
  }
  // image detail dialog
  get imageDetailDialogStatus() {
    return this.imageDetailDialog;
  }
  get imageDetailDialogIds() {
    return this.imageDetailDialogId;
  }
  // text dialog
  get registerTextDetailDailogStatus() {
    return this.registerTextDetailDailog;
  }
  // snackbar
  get snackBarStatus() {
    return this.snackBar;
  }
  get snackBarSeveritys() {
    return this.snackBarSeverity;
  }
  get snackBarContents() {
    return this.snackBarContent;
  }
}

export default Component;
