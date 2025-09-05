import React, { useState } from "react";

// 👇 Child wrapped in React.memo
const Child = React.memo(({ name }) => {
  console.log("Child rendered"); // check console
  return <h2>Hello, {name}</h2>;
});

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>

      {/* Child always gets the same prop */}
      <Child name="Ram" />
    </div>
  );
}
