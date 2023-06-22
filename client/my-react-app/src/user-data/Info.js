import { useUser, useUserUpdate } from "./userContext"
import { useState } from 'react'
import serverFetch from "../server-connection/serverFetch";
export function Info() {
    const user = useUser()
    const [changed, setChanged] = useState(false);
    const updateUser = useUserUpdate();

    const  changeUserNested = (propertyPath, newValue) => {
        const [property, nestedProperty] = propertyPath.split('.');
        updateUser({ ...user, [property]: { ...user[property], [nestedProperty]: newValue } });
        setChanged(true);
      }
    const changeUser = (property, newValue) => {
        updateUser({...user, [property]: newValue});
        setChanged(true);
    }
    const save = () => {
        serverFetch(`user/${user.id}`, 'PUT', user)
        .then(user=>{
            console.log(user);
            setChanged(false);
        })
        .catch(error => { alert(`An error occurred: ${error}`)})
    }

    const userElement = <div className="user-container" key={user.id}>
        <div>ID: {user.id}</div>
        <div className="input-div"> <p>Name: </p> <input className="readable-input" value={user.name} onChange={(e) => changeUser("name", e.target.value)}/> </div>
        <div className="input-div"> <p>Username: </p> <input className="readable-input" value={user.username} onChange={(e) => changeUser("username", e.target.value)}/> </div>
        <div className="input-div"> <p>Email: </p> <input className="readable-input" value={user.email} onChange={(e) => changeUser("email", e.target.value)}/> </div>
        <div className="input-div"> <p>Phone: </p> <input className="readable-input" value={user.phone} onChange={(e) => changeUser("phone", e.target.value)}/> </div>
        <div className="input-div"> <p>Website: </p> <input className="readable-input" value={user.website} onChange={(e) => changeUser("website", e.target.value)}/> </div>
    </div>

    return (
        <>
            <h1>Info of {user.username}</h1>
            {userElement}
            <br />
            <div  >
                <button disabled={!changed} className="my-button" onClick={save}>save changes</button>
            </div>
        </>

    )
}

