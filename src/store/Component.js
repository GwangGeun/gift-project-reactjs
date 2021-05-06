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

  registerTextDetailDailog = true;

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
      // action
      setLoading: action,
      setDialog: action,
      setImageDetailDailog: action,
      // computed
      loadingStatus: computed,
      loadingContents: computed,
      dialogStatus: computed,
      dialogContents: computed,
      imageDetailDialogStatus: computed,
      imageDetailDialogIds: computed,
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

  get imageDetailDialogStatus() {
    return this.imageDetailDialog;
  }
  get imageDetailDialogIds() {
    return this.imageDetailDialogId;
  }

  get registerTextDetailDailogStatus() {
    return this.registerTextDetailDailog;
  }
}

export default Component;
