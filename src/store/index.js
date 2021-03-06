import React, { createContext, useState, useCallback } from 'react'
import data from './data.json'

const usersContext = createContext();
const userDetailsContext = createContext();

const createStore = (initial = data) => ({ children }) => {
    const [users, setUsers] = useState(initial)

    const getUserById = useCallback( id => {
        const user = users.find(user => user.id === id)
        return user?{...user}:{}
    }, [users])

    return (
        <usersContext.Provider value={users}>
            <userDetailsContext.Provider value={getUserById}>
                {children}
            </userDetailsContext.Provider >
        </usersContext.Provider>

    )
}

export { createStore, usersContext, userDetailsContext }