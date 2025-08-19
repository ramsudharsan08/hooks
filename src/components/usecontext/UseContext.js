// The useContext hook in React is used to consume values from a Context object created by React.createContext
// To provide a way for deeply nested components to access data without prop drilling.

import ThemeProvider from './ThemeProvider';
import ChildComponent from './ChildComponent';

export default function UseContext() {
    return <>
        <ThemeProvider>
            <ChildComponent/>
        </ThemeProvider>
    </>
}