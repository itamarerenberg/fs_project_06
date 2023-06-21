import {NavLink, Outlet, useNavigate} from 'react-router-dom'
import {useUser} from "./userContext"
import {userLogout} from './userContext'

export function UserLayout() {
    const user = useUser()
    const navigate = useNavigate()

    const Logout = () => {
        userLogout()
        navigate('/')
    }

    return (
        <>
            <div className="navbar">
                <NavLink to='./Info'>Info </NavLink>
                <NavLink to='./Posts'>Posts </NavLink>
                <NavLink to='./Todos'>Todos </NavLink>
                <NavLink to='./Albums'>Albums </NavLink>
                <div className="name">
                    <h2>{user.name}</h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            </div>
            <Outlet/>

        </>
    )
}
