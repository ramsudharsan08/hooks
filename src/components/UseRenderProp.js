function DataProvider({ render }) {
  const [count, setCount] = React.useState(0);

  // child gives count back by calling render()
  return (
    <div>
      {render(count)} 
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <DataProvider render={(count) => <h1>Count: {count}</h1>} />
  );
}
