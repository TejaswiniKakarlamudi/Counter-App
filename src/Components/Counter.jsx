import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrement(){
        setCount(count+1);
        console.log('Increment');
    };
    function handleDecrement(e){
        setCount(count-1);
        console.log('Decrement');
    };

  return (
    <div>
      <h1>Counter App</h1>

      <h4>Count: {count}</h4>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter;
