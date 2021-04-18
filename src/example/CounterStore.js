import {
  // makeObservable,
  makeAutoObservable,
  // observable,
  // action,
  // computed,
  // autorun,
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
    console.log(this.number1);
    this.number1++;
  };

  decrease = () => {
    this.number1--;
  };

  get sum() {
    console.log("sum computed called");
    return this.number1 + this.number2;
  }
}

export default CounterStore;
