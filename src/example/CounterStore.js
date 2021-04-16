import {
  makeObservable,
  makeAutoObservable,
  observable,
  action,
  computed,
  autorun,
} from "mobx";

class CounterStore {
  number1 = 1;
  number2 = 100;
  number3 = 100;

  constructor() {
    makeAutoObservable(this);
    // makeObservable(this, {
    //   number1: observable,
    //   number2: observable,
    //   increase: action,
    //   decrease: action,
    //   sum: computed,
    // });
  }

  increase = () => {
    this.number1++;
  };

  decrease = () => {
    this.number1--;
  };

  get sum() {
    console.log("i am called");
    return this.number3 + this.number2;
  }
}

export default CounterStore;
