import React, { useEffect, useState } from "react";
import StyleNavbarPage from './NavbarPage.module.scss'
import { Link, useLocation } from "react-router-dom";

export const NavbarPage = React.memo(() => {
    const [path, setPath] = useState('')
    const { pathname } = useLocation()

    useEffect(() => {
        setPath(pathname.replace(/[^A-Za-z]/ig, ''))
    }, [])
    return (
        <div className={StyleNavbarPage.header}>
            <Link to={'/'} className={StyleNavbarPage.link}>
                Home
            </Link>
            <span>&#8250; </span>
            <span>{path}</span>
        </div>)
})