import React from "react";
import StyleFilterCanvas from './FilterCanvas.module.scss';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { OwnershipFilter } from "../OwnershipFilter";
import { SaleExchange } from "../Sale&Exchange";
import { Location } from "../Location";
import { Category } from "../Category";

export const FilterCanvas = React.memo(({ title, openCanvas, onHide }) => {

    return (
        <div className={StyleFilterCanvas.menu}>
            <Offcanvas
                className={StyleFilterCanvas.canvas}
                show={openCanvas}
                onHide={onHide}
                placement='top'
            >
                <Offcanvas.Header
                    closeButton
                    closeVariant='white'
                >
                    <Offcanvas.Title>Filter</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <OwnershipFilter />
                    <SaleExchange />
                    <div className={StyleFilterCanvas.acardion}>
                        <Location />
                        <Category
                            title={title}
                        />
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
})