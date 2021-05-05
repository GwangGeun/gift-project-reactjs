import { makeObservable, observable, action, computed } from "mobx";

class Component {
  /**
   * 이하 observable
   */
  loading = false;
  loadingContent = "로딩 중...";

  dialog = false;
  dialogContent = "정말 삭제하시겠습니까 ?";

  imageDetailDialog = true;
  imageDetailDialogId = 0;

  constructor() {
    makeObservable(this, {
      loading: observable,
      loadingContent: observable,
      dialog: observable,
      dialogContent: observable,
      imageDetailDialog: observable,
      imageDetailDialogId: observable,
      setLoading: action,
      setDialog: action,
      setImageDetailDailog: action,
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
}

export default Component;
