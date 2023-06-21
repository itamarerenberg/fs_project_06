import React, { useContext } from 'react';
import {useLocalStorage, clearStorage} from '../custom-hooks/useLocalStorage'
const UserContext = React.createContext()
const UserUpdateContext = React.createContext()
const userKey = 'currentUser'

export function useUser(){
    return useContext(UserContext)
}
export function useUserUpdate() {
    return useContext(UserUpdateContext)
}

export function userLogout(){
    clearStorage(userKey)
}

export function UserProvider({children}) {
    const [user, setUser] = useLocalStorage(userKey, {})

    function setNewUser(newUser) {
        setUser(newUser)
    }
    return (
        <UserContext.Provider value={user}>
            <UserUpdateContext.Provider value={setNewUser}>
                {children}
            </UserUpdateContext.Provider>
        </UserContext.Provider>
    )
}
