// manage complex state logic in a predictable and structured way.
// It’s an alternative to useState
import{ useReducer } from "react";

const initialState = {
  count: 0,
  theme: "light",
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "toggleTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ background: state.theme === "light" ? "#fff" : "#333", color: state.theme === "light" ? "#000" : "#fff", padding: "20px" }}>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "toggleTheme" })}>Toggle Theme</button>
    </div>
  );
}
