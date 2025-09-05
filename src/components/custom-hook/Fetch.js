import UseGetQuery from "./UseGetQuery"

export default function Fetch() {
    const {data, isLoading} = UseGetQuery({url: "https://jsonplaceholder.typicode.com/users"})

    if(isLoading) {
        return (
            <div>
                <div>Loading</div>
            </div>
        )
    }
    return <>
    <h1>Hi</h1>
        <ul>
            { data?.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </>
}