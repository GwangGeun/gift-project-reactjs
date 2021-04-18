import { observer, inject } from "mobx-react";

// const Counter = observer(({ counter }) => (
//   <div>
//     <h1>hh</h1>
//     {/* <h1>{counter.number1}</h1>
//     <h1>{counter.sum}</h1>
//     <button onClick={counter.increase}>+1</button>
//     <button onClick={counter.decrease}>-1</button> */}
//   </div>
// ));

// const Counter = observer(({ counter }) => {
//   const abc = "hel";
//   return (
//     <>
//       <h1>{counter.userInfo.email}</h1>
//       <h3>{counter.userInfo.email}</h3>
//     </>
//   );
// });

const InnerCounter = inject("counterStore")(
  observer((props) => (
    <div>
      {/* <h1>hh</h1> */}
      <h1>{props.counterStore.number1}</h1>
      <h1>{props.counterStore.sum}</h1>
      <button onClick={props.counterStore.increase}>+1</button>
      <button onClick={props.counterStore.decrease}>-1</button>
    </div>
  ))
);

export default InnerCounter;
