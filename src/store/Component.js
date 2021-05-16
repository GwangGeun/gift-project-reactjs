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
  registerTextDetailDailogId = 0;
  // read or write
  registerTextDetailDailogPurpose = "read";

  snackBar = false;
  snackBarSeverity = "success";
  snackBarContent = "성공";

  storyDialog = false;
  // write or modify
  storyDialogPurpose = "write";
  storyDialogDate = 0;
  storyDialogContent = null;

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
      registerTextDetailDailogId: observable,
      registerTextDetailDailogPurpose: observable,
      snackBar: observable,
      snackBarSeverity: observable,
      snackBarContent: observable,
      storyDialog: observable,
      storyDialogPurpose: observable,
      storyDialogContent: observable,
      storyDialogDate: observable,
      // action
      setLoading: action,
      setDialog: action,
      setImageDetailDailog: action,
      setRegisterTextDetailDailog: action,
      setRegisterTextDetailDailogDetail: action,
      setSnackBar: action,
      setSnackBarDetail: action,
      setStoryDialog: action,
      // computed
      loadingStatus: computed,
      loadingContents: computed,
      dialogStatus: computed,
      dialogContents: computed,
      imageDetailDialogStatus: computed,
      imageDetailDialogIds: computed,
      registerTextDetailDailogStatus: computed,
      registerTextDetailDailogIds: computed,
      registerTextDetailDailogPurposes: computed,
      snackBarStatus: computed,
      snackBarSeveritys: computed,
      snackBarContents: computed,
      storyDialogStatus: computed,
      storyDialogPurposes: computed,
      storyDialogContents: computed,
      storyDialogDates: computed,
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

  setRegisterTextDetailDailogDetail = (
    registerTextDetailDailogId,
    registerTextDetailDailogPurpose
  ) => {
    this.registerTextDetailDailogId = registerTextDetailDailogId;
    this.registerTextDetailDailogPurpose = registerTextDetailDailogPurpose;
  };

  setSnackBar = (snackBar) => {
    this.snackBar = snackBar;
  };

  setSnackBarDetail = (snackBarSeverity, snackBarContent) => {
    this.snackBarSeverity = snackBarSeverity;
    this.snackBarContent = snackBarContent;
  };

  setStoryDialog = (
    storyDialog,
    storyDialogPurpose,
    storyDialogContent,
    storyDialogDate
  ) => {
    this.storyDialog = storyDialog;
    this.storyDialogContent = storyDialogContent;
    this.storyDialogPurpose = storyDialogPurpose;
    this.storyDialogDate = storyDialogDate;
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
  get registerTextDetailDailogIds() {
    return this.registerTextDetailDailogId;
  }
  get registerTextDetailDailogPurposes() {
    return this.registerTextDetailDailogPurpose;
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
  // story dialog
  get storyDialogStatus() {
    return this.storyDialog;
  }
  get storyDialogPurposes() {
    return this.storyDialogPurpose;
  }
  get storyDialogContents() {
    return this.storyDialogContent;
  }
  get storyDialogDates() {
    return this.storyDialogDate;
  }
}

export default Component;
