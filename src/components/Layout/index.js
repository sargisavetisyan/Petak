import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet, useLocation } from "react-router-dom";
import StyleLayout from './Layout.module.scss'
import { BsSearch } from 'react-icons/bs'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from "react-redux";
import { User } from "../User";
import { ModalLogInOrSignUp } from "../ModalLogInOrSignUp";
import { useEffect } from "react";
import { Footer } from "../Footer";


export const Layout = React.memo(() => {
    const { user } = useSelector(state => state.userData)
    const [path, setPath] = useState('')
    const { pathname } = useLocation()

    const [showIcon, setShowIcon] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [valueInput, setValueInput] = useState('')

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

    const openModal = () => {
        setShowModal(!showModal)
    }

    const search = (e) => {
        if (e.target.value) {
            setValueInput(e.target.value)
            if (user.id) setShowIcon(false)
            if (!user.id) setShowModal(true)
        } else {
            setShowIcon(true)
        }
        // առայժմ այսքանը
    }
    // ***** code write for searchInput inputValue searchIcon modal ***** \\

    useEffect(() => {
        if (!showModal) setShowIcon(true)
    }, [showModal])

    useEffect(() => {
        setShowModal(false)
        if (user.id) setValueInput('')
    }, [user])

    useEffect(() => {
        setPath(pathname.replace(/[^A-Za-z]/ig, ''))
    }, [pathname])

    useEffect(() => {
        setShowModal(false)
        setValueInput('')
        setShowIcon(true)
    }, [path])

    // ******************************************************************** \\

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
                    <Navbar.Collapse
                        id="responsive-navbar-nav"
                        style={user.id && { justifyContent: 'space-between' }}
                    >
                        <div className={StyleLayout.search} >
                            {showIcon &&
                                <BsSearch
                                    className={StyleLayout.icon}
                                />
                            }
                            <input
                                className={StyleLayout.searchInput}
                                style={!showIcon ? { marginLeft: '20px' } : { marginLeft: '0px' }}
                                type='text'
                                placeholder="Search"
                                value={user.id ? valueInput : ''}
                                onChange={search}
                            />
                        </div>
                        {showModal && path !== 'login' &&
                            <ModalLogInOrSignUp
                                showModal={showModal}
                                onCloseModal={openModal}
                            />
                        }
                        {!user.id &&
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
                        }
                        <div
                            className={StyleLayout.user_languages}
                            style={user.id && { display: 'flex' }}
                        >
                            <div className={StyleLayout.user}>
                                {user.id && <User />}
                            </div>
                            <NavDropdown
                                className={StyleLayout.languages}
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
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
            <Footer />
        </>
    )
})