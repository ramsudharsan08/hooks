// The useMemo hook in React is used to memoize (cache) the result of an expensive computation 
// so that the computation is not re-executed on every re-render, unless its dependencies change
import React, { useState, useMemo } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState('');

  const value = useMemo(() => {
    console.log('Calculating...');
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total += i;
    }
    return total;
  }, [count]); // Only recalculate if count changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input value={word} onChange={(e) => setWord(e.target.value)} />
      <p>Calculation: {value}</p>
    </div>
  );
}
