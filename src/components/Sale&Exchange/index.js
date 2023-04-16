import React from "react";
import StyleSaleExchange from './Sale&Exchange.module.scss';
import Form from 'react-bootstrap/Form';

export const SaleExchange = React.memo(() => {

    const labelNames = ['Sale', 'Exchange', 'Looking for', 'Ads with photos']

    return (
        <div className={StyleSaleExchange.body}>
            {labelNames.map((name, i) => {
                if (name !== 'Ads with photos') {
                    return (
                        <Form.Group
                            key={i}
                            className={StyleSaleExchange.item}
                        >
                            <Form.Check
                                className={StyleSaleExchange.itemInput}
                                inline
                                label={name}
                                name="group2"
                                type='radio'
                            />
                        </Form.Group>
                    )
                } else {
                    return (
                        <Form.Group
                            key={i}
                            className={StyleSaleExchange.item}
                        >
                            <Form.Check
                                className={StyleSaleExchange.itemInput}
                                inline
                                label={name}
                                name="group2"
                                type='checkbox'
                            />
                        </Form.Group>
                    )
                }
            })}
        </div>
    )
})