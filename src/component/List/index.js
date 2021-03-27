import React, { useContext } from 'react'
import { usersContext } from '../../store'
import ListView from './ListView'

export default function List() {
    const users = useContext(usersContext);
    return <ListView users={users} />
}
