const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const RESET = "RESET";

const add = () => ({ type: ADD });
const subtract = () => ({ type: SUBTRACT });
const reset = () => ({ type: RESET });

const initialState = { count: 0 };

export function tallyReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + 1 };
    case SUBTRACT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}

export function createStore(reducer) {
  let state;
  let listeners = [];

  // Initialize the state by dispatching a dummy action
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  // Initialize the state
  dispatch({ type: "@@INIT" });

  return { getState, dispatch, subscribe };
}

const store = createStore(tallyReducer);

store.subscribe(() => {
  console.log("State:", store.getState());
});

console.log(store.dispatch(add())); // State: { count: 1 }
console.log(store.dispatch(add())); // State: { count: 2 }
console.log(store.dispatch(subtract())); // State: { count: 1 }
console.log(store.dispatch(reset())); // State: { count: 0 }
