// The useMemo hook in React is used to memoize (cache) the result of an expensive computation 
// so that the computation is not re-executed on every re-render, unless its dependencies change
import React, { useState, useMemo } from "react";

function Calculator() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  // Expensive calculation
  const squared = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);

  return (
    <div>
      <h2>useMemo Example</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Square of {number} is: {squared}</p>

      <button onClick={() => setCount(count + 1)}>
        Re-render Count: {count}
      </button>
    </div>
  );
}

export default Calculator;

