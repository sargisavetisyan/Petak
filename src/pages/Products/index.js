import React, { useEffect, useState } from "react";
import StyleProducts from './Products.module.scss'
import { Container } from "react-bootstrap";
import { NavbarPage } from "../../components/NavbarPage";
import { Situation } from "../../components/Situation";
import { useLocation } from "react-router-dom";

export const Products = React.memo(() => {
    const [path, setPath] = useState('')
    const { pathname } = useLocation()

    useEffect(() => {
        setPath(pathname.slice(1, pathname.length))
    }, [])

    return (
        <div className={StyleProducts.products}>
            <Container>
                <NavbarPage />
                <div className={StyleProducts.body}>
                    <div className={StyleProducts.forms}>
                        <Situation
                            path={path}
                        />
                    </div>
                    <div></div>
                </div>
            </Container>

        </div>
    )
})