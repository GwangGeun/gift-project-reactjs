import { makeObservable, observable, action, computed } from "mobx";
import { deleteToken } from "../utils/LocalStorage";

class Account {
  /**
   * 이하 observable
   */
  // 인증 여부
  authenticated = false;
  // 인증된 사용자 정보
  userInfo = {
    email: null,
    name: null,
    nickname: null,
    gender: null,
    birthday: null,
  };

  constructor() {
    makeObservable(this, {
      userInfo: observable,
      authenticated: observable,
      login: action,
      logout: action,
      setUserInfo: action,
      user: computed,
      auth: computed,
    });
  }

  /**
   * 이하 action
   */
  // @action
  login = () => {
    this.authenticated = true;
  };

  logout = () => {
    this.authenticated = false;
    this.userInfo = {
      email: null,
      name: null,
      nickname: null,
      gender: null,
      birthday: null,
    };
    deleteToken();
  };

  setUserInfo = (user) => {
    this.userInfo.email = user.email;
    this.userInfo.name = user.name;
    this.userInfo.nickname = user.nickname;
    this.userInfo.gender = user.gender;
    this.userInfo.birthday = user.birthday;
  };

  /**
   * 이하 computed
   */
  get user() {
    return this.userInfo;
  }

  get auth() {
    return this.authenticated;
  }
}

export default Account;
