import { useUser } from "./userContext"

export function Info() {
    const user = useUser()

    const userElement = <div className="user-container" key={user.id}>
        <div>ID: {user.id}</div>
        <div>Name: {user.name}</div>
        <div>Username: {user.username}</div>
        <div>Email: {user.email}</div>
        <div className="address">
            Address:
            <div>{user.address.street}, {user.address.suite},</div>
            <div>{user.address.city}, {user.address.zipcode}</div>
        </div>
        <div>Phone: {user.phone}</div>
        <div>Website: {user.website}</div>
        <div className="company">Company: {user.company.name}</div>
    </div>

    return (
        <>
            <h1>Info of {user.username}</h1>
            {userElement}
        </>

    )
}

