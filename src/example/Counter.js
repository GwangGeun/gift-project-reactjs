import { observer } from "mobx-react";

const Counter = observer(({ counter }) => (
  <div>
    <h1>{counter.number1}</h1>
    <h1>{counter.sum}</h1>
    <button onClick={counter.increase}>+1</button>
    <button onClick={counter.decrease}>-1</button>
  </div>
));

export default Counter;
