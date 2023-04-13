import React from "react";
import StyleAllCategorys from './AllCategorys.module.scss';
import { Link } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';

export const AllCategorys = React.memo(({ openCanvas, onHide }) => {

    const categorys = ['Jobs', 'Service', 'Real Estate', 'Electronics', 'Cloting and Fashion', 'Home and Garden', 'Cars']

    return (
        <div className={StyleAllCategorys.menu}>
            <Offcanvas
                className={StyleAllCategorys.canvas}
                show={openCanvas}
                onHide={onHide}
                placement='end'
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>All Categorys</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {categorys.map((category, i) => {
                        return (
                            <Link
                                key={i}
                                className={StyleAllCategorys.link}
                                to={`/${category.toLowerCase()}`}
                            >
                                <p>{category}</p>
                            </Link>
                        )
                    })}
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
})