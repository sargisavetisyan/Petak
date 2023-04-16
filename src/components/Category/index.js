import React, { Fragment, useState } from "react";
import StyleCategory from './Category.module.scss';
import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from "react-redux";

export const Category = React.memo(({ title, closeSwiper }) => {
    const { categorys } = useSelector(state => state.categoryData)

    const [heigthCategory, setHeigthCategory] = useState('')

    const showHeightCategory = () => {
        heigthCategory ? setHeigthCategory('') : setHeigthCategory('593px')
    }

    return (
        <>
            <div
                className={StyleCategory.body}
                style={{ height: `${heigthCategory}` }}
            >
                <Accordion>
                    <Accordion.Item
                        eventKey={2}
                        className={StyleCategory.acardionItem}
                        onClick={closeSwiper}
                    >
                        <Accordion.Header onClick={showHeightCategory}>Category</Accordion.Header>
                        <Accordion.Body>
                            {categorys.map((category, i) => {
                                if (category.name === title) {
                                    return (
                                        <Fragment key={i}>
                                            <h5>{category.name}s:</h5>
                                            {category.departments.map((department, index) => {
                                                return (
                                                    <Fragment key={index}>
                                                        <div
                                                            className={StyleCategory.title}
                                                        >
                                                            {department.name}
                                                        </div>
                                                        <div className={StyleCategory.items}>
                                                            {department.departments.map((el, j) => {
                                                                return (
                                                                    <div key={j}>
                                                                        {el}
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </Fragment>
                                                )
                                            })}
                                        </Fragment>
                                    )
                                }
                            })}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </>
    )
})