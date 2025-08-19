// It returns a mutable object with a single property called .current.
// This object persists across renders and can store any value (DOM elements, numbers, objects, functions, etc.) 
// without causing the component to re-render when updated.

import { useRef, useState } from "react";

export default function UseRef() {
    const[name, setName] = useState('');
    const inputRef = useRef()

    function focus() {
        inputRef.current.focus()
        inputRef.current.value = 'Some Text'
    }

    return (
        <>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
            <p>My name is {name}</p>
            <button onClick={focus}>Focus</button>
        </>
    );
}