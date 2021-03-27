import React from 'react'

export default function Layout({ children }) {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="/">Navbar</a>
            </nav>
            <div className="container pt-3">
                { children }
            </div>
        </>
    )
}
