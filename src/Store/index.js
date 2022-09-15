import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showcounter: false }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showcounter: state.showcounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showcounter: state.showcounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.value,
      showcounter: state.showcounter,
    };
  }
  if (action.type === "decrease") {
    return {
      counter: state.counter - action.value,
      showcounter: state.showcounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showcounter: !state.showcounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
