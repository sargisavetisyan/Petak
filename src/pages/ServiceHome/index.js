import React from "react";
import Container from 'react-bootstrap/Container';
import StyleService from './Service.module.scss'
import { NavbarPage } from "../../components/NavbarPage";

export const Service = React.memo(() => {
    return (
        <Container>
            <div className={StyleService.service}>
                <NavbarPage />
                <div className={StyleService.items}>
                    <div className={StyleService.item}>
                        <div className={StyleService.itemHeader}></div>
                        <div className={StyleService.itemFooter}></div>
                    </div>
                    <div className={StyleService.item}>
                        <div className={StyleService.itemHeader}></div>
                        <div className={StyleService.itemFooter}></div>
                    </div>
                    <div className={StyleService.item}>
                        <div className={StyleService.itemHeader}></div>
                        <div className={StyleService.itemFooter}></div>
                    </div>
                </div>
            </div>
        </Container>
    )
})