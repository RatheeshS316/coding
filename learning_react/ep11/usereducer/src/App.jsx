import React from 'react'
import { useReducer } from 'react'


const ACTION ={
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reduce(state, action) {
  switch (action.type) {
    case 'ACTION.INCREMENT':
      return { count: state.count + 1 };
    case  'ACTION.DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reduce, { count: 0 });

  const increment = () => {
    dispatch({ type: ACTION.INCREMENT});
  };

  const decrement = () => {
    dispatch({ type: ACTION.DECREMENT});
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <h1>{state.count}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default App;


