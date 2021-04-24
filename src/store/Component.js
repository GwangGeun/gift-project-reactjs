import { makeObservable, observable, action, computed } from "mobx";

class Component {
  /**
   * 이하 observable
   */
  loading = false;
  loadingContent = "로딩 중...";

  constructor() {
    makeObservable(this, {
      loading: observable,
      loadingContent: observable,
      setLoading: action,
      loadingStatus: computed,
      loadingContents: computed,
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

  /**
   * 이하 computed
   */
  get loadingStatus() {
    return this.loading;
  }
  get loadingContents() {
    return this.loadingContent;
  }
}

export default Component;
