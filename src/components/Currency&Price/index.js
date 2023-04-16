import React from "react";
import StyleCurrencyPrice from './Currency&Price.module.scss';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from "react";
import { Slider } from 'antd';

export const CurrencyPrice = React.memo(() => {
    const currencys = ['Armenian Dram', 'US Dollar', 'Euro', 'Russian Ruble']
    const [activeCurrency, setActiveCurrensy] = useState('Armenian Dram')
    const [max, setMax] = useState(100000)
    const [simbol, setSimbol] = useState('֏')
    const [step, setStep] = useState(5000)
    const [price, setPrice] = useState(0)

    const changeCurrency = (e) => {
        setActiveCurrensy(e.target.value)
        if (e.target.value === 'Armenian Dram') {
            setMax(100000)
            setSimbol('֏')
            setStep(5000)
        }
        if (e.target.value === 'US Dollar') {
            setMax(5000)
            setSimbol('$')
            setStep(50)
        }
        if (e.target.value === 'Euro') {
            setMax(5000)
            setSimbol('€')
            setStep(50)
        }
        if (e.target.value === 'Russian Ruble') {
            setMax(100000)
            setSimbol('₽')
            setStep(5000)
        }
        setPrice(0)
    }

    const rang = (e) => {
        if (activeCurrency === 'Armenian Dram' || activeCurrency === 'Russian Ruble') {
            e > price ? setPrice(price + step) : setPrice(price - step)
        }
        if (activeCurrency === 'US Dollar' || activeCurrency === 'Euro') {
            e > price ? setPrice(price + step) : setPrice(price - step)
        }
    }

    return (
        <div className={StyleCurrencyPrice.body}>
            <Form  >
                <Accordion>
                    <Accordion.Item
                        eventKey={0}
                        className={StyleCurrencyPrice.acardionItem}>
                        <Accordion.Header>Currency</Accordion.Header>
                        <Accordion.Body>
                            {currencys.map((currency, i) => {
                                return (
                                    <Form.Group key={i} className={StyleCurrencyPrice.item} >
                                        <Form.Check
                                            className={StyleCurrencyPrice.itemInput}
                                            inline
                                            label={currency}
                                            name="group4"
                                            type='radio'
                                            value={currency}
                                            onChange={changeCurrency}
                                        />
                                    </Form.Group>
                                )
                            })}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Form>
            <Form  >
                <Accordion>
                    <Accordion.Item eventKey={1} className={StyleCurrencyPrice.acardionItem}>
                        <Accordion.Header>Price</Accordion.Header>
                        <Accordion.Body>
                            {simbol && <Form.Label className={StyleCurrencyPrice.priceList}>{price}{simbol}-{max}{simbol}</Form.Label>}
                            <Slider
                                min={0}
                                max={max}
                                step={step}
                                value={price}
                                onChange={rang}
                            />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Form>
        </div>
    )
})