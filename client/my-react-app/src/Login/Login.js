import { useState } from "react"
import {connectionBaseUrl} from "../dataConnection"
import { useNavigate } from "react-router-dom"
import { useUserUpdate } from "../user-data/userContext"
import serverFetch from "../server-connection/serverFetch";

export function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const setUser = useUserUpdate()

    const handleUserSubmit = (event) => {
        event.preventDefault()
        serverFetch("login", "POST", {username: username, password: password})
        .then(user =>
        {
            setUser(user)
            console.log(user)
            navigate(`/users/${user.id}`)
        })
        .catch(error => { alert(`An error occurred: ${error}`)})
    }

    const handleNameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const register = () => {
        navigate('/Register');
    }

    return (
        <div>
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
                <button type="submit">Enter</button>
            </form>
            <div className="form-container">
                <button onClick={register}>Don't have account? Register here</button>
            </div>
        </div>
    )   
}
