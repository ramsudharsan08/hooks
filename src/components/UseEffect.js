// lets you run side effects in function components after the component renders (or when certain values change).
// side effect means any operation that affects something outside the component’s rendering

import { useEffect, useState } from "react"

export default function UseEffect() {
    const [resources, setResources] = useState('posts')
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resources}`)
        .then(res => res.json())
        .then(data => setItems(data))
    }, [resources])
    return <>
        <div>
            <button onClick={() => setResources('posts')}>post</button>
            <button onClick={() => setResources('users')}>user</button>
            <button onClick={() => setResources('comments')}>comments</button>
        </div>
        <h1>{resources}</h1>
        <ul>
            {items.map(item => {
                return <li>{JSON.stringify(item)}</li>
            })}
        </ul>
    </>
}