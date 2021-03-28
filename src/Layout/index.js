import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Layout({ children }) {
    const location = useLocation();
    const { pathname } = location;

    return (
        <>
            <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="/">{pathname.includes('/user')?'◀︎User Details':'Home'}</a>
            </nav>
            <div className="container pt-3">
                { children }
            </div>
        </>
    )
}
