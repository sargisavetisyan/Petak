import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet } from "react-router-dom";
import StyleLayout from './Layout.module.scss'
import { BsSearch } from 'react-icons/bs'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from "react-redux";
import { User } from "../User";


export const Layout = React.memo(() => {
    const { user } = useSelector(state => state.userData)
    // const [icon, setIcon] = useState(true)
    let activeStyle = {
        width: '100px',
        color: '#fff',
        borderRadius: '20px 0px',
        boxShadow: '0px 0px 10px #D38724',
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgba(246, 163, 21, 0.8)'
    }

    const languages = ['Eng', 'Հայ', 'Рус']
    const [activeLanguage, setActiveLanguage] = useState('Eng')

    const changeLanguage = (language) => {
        setActiveLanguage(language)
    }

    // const search = () => {
    //     setIcon(false)
    // }

    return (
        <>
            <Navbar
                className={StyleLayout.navbar}
                bg="light"
                expand="lg"
                collapseOnSelect
            >
                <Container>
                    <NavLink className={StyleLayout.logo}
                        to=""
                    >
                        <img src={require("../../images/Vector.png")} />
                        <span>Petak</span>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className={StyleLayout.search}>
                            <BsSearch className={StyleLayout.icon} />
                            <input className={StyleLayout.searchInput}
                                type='text'
                                placeholder="Search"
                            // onChange={search}
                            />
                        </div>
                        <Nav className="me-auto" >
                            <NavLink
                                className={StyleLayout.menuItem}
                                style={({ isActive }) =>
                                    isActive ? activeStyle : {}
                                }
                                to="login"
                            >
                                Log In
                            </NavLink>
                            <NavLink
                                className={StyleLayout.menuItem}
                                style={({ isActive }) =>
                                    isActive ? activeStyle : {}
                                }
                                to="signup"
                            >
                                Sign Up
                            </NavLink>
                        </Nav>
                        <div className={StyleLayout.user}>
                            {user.id && <User />}
                        </div>
                        <NavDropdown
                            // className={StyleLayout.languages}
                            // id="nav-dropdown-dark-example"
                            title={activeLanguage}
                            menuVariant="dark"
                            align={{ lg: 'end' }}
                        >
                            {languages.map((language, i) => {
                                if (language !== activeLanguage) {
                                    return (
                                        <NavDropdown.Item
                                            key={i}
                                            onClick={changeLanguage.bind(null, language)}
                                        >
                                            {language}
                                        </NavDropdown.Item>
                                    )
                                }
                            })}
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
})