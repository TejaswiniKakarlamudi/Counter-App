import React, { useState } from 'react'
import styles from './Counter.module.css';
function Counter() {
    const [count, setCount] = useState(0);
    const [extra, setExtra] = useState(1);
    function handleIncrement(){
        setCount(count+extra);
        console.log('Increment');
    };
    function handleDecrement(e){
        setCount(count-extra);
        console.log('Decrement');
    };
    function handleOnChange(e){

        setExtra(Number(e));
    };
  return (
    <div className={styles.set}>
      <div className={styles.counter}>
        <h1 className={styles.heading}>Counter App</h1>
        <h4 className={styles.count}>Count: {count}</h4>
        <input type="number" name="extra" value={extra} onChange={(e)=>handleOnChange(e.target.value)} className={styles.extra}/>
        <div>
            <button onClick={handleIncrement} className={styles.increment}>Increment</button>
            <button onClick={handleDecrement} className={styles.decrement}>Decrement</button>
        </div>
        
      </div>
    </div>
  )
}

export default Counter;
