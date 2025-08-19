import logo from './logo.svg';
import './App.css';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';
import UseState, {UseStateObject} from './components/UseState';
import UseEffect from './components/UseEffect';
import UseContext from './components/usecontext/UseContext';

// In React, you cannot call hooks inside conditions, loops, or nested functions.
// Hooks must be called at the top level of your component always in the same order for every render

function App() {

  return (
    <>
    {/* <UseMemo/> */}
    {/* <UseRef/> */}

    {/* <UseState/>
    <UseStateObject/> */}

    {/* <UseEffect/> */}
    <UseContext/>
    <div id='app'>
      <h1>test</h1>
    </div>
    </>
  );
}

export default App;
