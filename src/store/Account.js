import { makeObservable, observable, action, computed } from "mobx";

class Account {
  userInfo = {
    email: null,
    name: null,
    nickname: null,
    gender: null,
    birthday: null,
    token: null,
  };

  constructor() {
    makeObservable(this, {
      userInfo: observable,
      login: action,
      logout: action,
      user: computed,
    });
  }

  login = (user) => {
    this.userInfo.email = user.email;
    this.userInfo.name = user.name;
    this.userInfo.nickname = user.nickname;
    this.userInfo.gender = user.gender;
    this.userInfo.birthday = user.birthday;
    this.userInfo.token = user.token;
  };

  logout = () => {
    this.userInfo = {
      email: null,
      name: null,
      nickname: null,
      gender: null,
      birthday: null,
      token: null,
    };
  };

  get user() {
    return this.userInfo;
  }
}

export default Account;
