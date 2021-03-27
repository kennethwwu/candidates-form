import React from 'react'
import { Link } from 'react-router-dom'

export default function ListView({users}) {
    return (
        <ul className="list-group">
            { users.map(u => (
                <li key={u.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {u.name}
                    <button type="button" className="btn btn-link"><Link to={`/user/${u.id}`}>Edit</Link></button>
                </li>
            ))}
        </ul>
    )
}
