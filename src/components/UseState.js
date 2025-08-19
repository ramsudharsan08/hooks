// State is a build-in object used to store dynamic data in a component.
//  When the state changes the component re-renders to reflect the updated data

// It lets you add and manage state variables inside a functional component.
// A function that allows you to update that value and trigger a re-render of the component.
// count → state variable (holds value).
// setCount → function to update state.
// 0 → initial value.

import { useState } from "react"

export default function UseState() {
    const [count, setCount] = useState(4);

    function decrementCount() {
        if(count > 0) {
            setCount(prevCount => prevCount -1)
        }
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}

export function UseStateObject() {
    const [state, setState] = useState({count: 4, theme: 'blue'})
    const count = state.count
    const theme = state.theme
    function decrementCount() {
        if(count > 0) {
            setState(prevState => {
                return { ...prevState, count: prevState.count - 1 }
            })
        }
    }

    function incrementCount() {
        setState(prevCount => prevCount + 1)
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}