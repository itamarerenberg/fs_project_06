import { useState } from "react"
import {connectionBaseUrl} from "../dataConnection"
import { useNavigate } from "react-router-dom"
import { useUserUpdate } from "../user-data/userContext"
import serverFetch from "../server-connection/serverFetch";

export function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeadPassword, setrepeadPassword] = useState('')
    const navigate = useNavigate()

    const handleUserSubmit = (event) => {
        event.preventDefault()
        if (password !== repeadPassword){
            alert("Repeat passward correctly!");
            return;
        }
        serverFetch("register", "POST", {username: username, password: password})
        .then(user =>
        {
            console.log(user);
            navigate(`/Login`)
        })
        .catch(error => { alert(`An error occurred: ${error}`)})
    }

    const handleNameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleRepeatPasswordChange = (event) => {
        setrepeadPassword(event.target.value)
    }

    return (
        <form className="form-container" onSubmit={handleUserSubmit}>
            <div>
                <label>Enter username: </label>
                <input value={username} onChange={handleNameChange} />
            </div>
            <br />
            <div>
                <label>Enter password: </label>
                <input value={password} onChange={handlePasswordChange} />
            </div>
            <div>
                <label>Repeat password: </label>
                <input value={repeadPassword} onChange={handleRepeatPasswordChange} />
            </div>
            <button type="submit">Register</button>
        </form>

    )
}
