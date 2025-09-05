function withLogger(WrappedComponent) {
  return function Enhanced(props) {
    console.log("Current props:", props);
    return <WrappedComponent {...props} />;
  };
}

// Usage
function Button({ label }) {
  return <button>{label}</button>;
}

const ButtonWithLogger = withLogger(Button);

export default function App() {
  return <ButtonWithLogger label="Click Me" />;
}
