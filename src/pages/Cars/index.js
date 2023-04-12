import React, { useEffect, useState } from "react";
import StyleCars from './Cars.module.scss';
import { Products } from "../../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { NavbarPage } from "../../components/NavbarPage";
import { Situation } from "../../components/Situation";
import { Slider } from 'antd';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import { Navigation, Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation } from "react-router-dom";
import { Fragment } from "react";
import { isActiveRegion } from "../../features/job/jobSlice";

export const Cars = React.memo(() => {
    const dispatch = useDispatch()
    const { operations, dataRegionsCursPriceCategorys } = useSelector(state => state.jobData)
    const { cars, carPrivate } = useSelector(state => state.carData)

    const [path, setPath] = useState('')
    const { pathname } = useLocation()
    useEffect(() => {
        setPath(pathname.slice(1, pathname.length))
    }, [])

    const [checkedRegion, setCheckedRegion] = useState('')

    const showRegionAll = (e) => {
        checkedRegion ? setCheckedRegion('') : setCheckedRegion(e.target.value)
    }

    const showRegion = (id) => {
        // stex el pti poxancvi vor mi hat el elementov gtnvi productner@ tvyal regionum 
        dispatch(isActiveRegion(id))
    }

    useEffect(() => {

    }, [dataRegionsCursPriceCategorys, checkedRegion])

    const [heigth, setHeigth] = useState('')
    const location = () => {
        if (heigth) {
            setHeigth('')
        } else {
            setHeigth('593px')
        }
    }

    const [close, setyClose] = useState(false)

    const closeSwiper = () => {
        setyClose(!close)
    }

    const advertisements = [
        { id: 0, photo: 'require("./images/Rectangle 477.png")' },
        { id: 1, photo: 'require("./images/Rectangle 477.png")' },
        { id: 2, photo: 'require("./images/Rectangle 477.png")' }
    ]
    //կուրսի և ռենջի հատվածն է

    const [currency, setCurrensy] = useState('')
    const [max, setMax] = useState(0)
    const [simbol, setSimbol] = useState('')
    const [step, setStep] = useState(0)
    const [price, setPrice] = useState(0)

    const changeCurrency = (e) => {
        setCurrensy(e.target.value)
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

    useEffect(() => {

    }, [currency])

    const rang = (e) => {
        if (currency === 'Armenian Dram' || currency === 'Russian Ruble') {
            e > price ? setPrice(price + step) : setPrice(price - step)
        }
        if (currency === 'US Dollar' || currency === 'Euro') {
            e > price ? setPrice(price + step) : setPrice(price - step)
        }
    }

    useEffect(() => {

    }, [carPrivate])

    return (
        <div className={StyleCars.cars}>
            <Container>
                <NavbarPage />
                <div className={StyleCars.body}>
                    <div className={StyleCars.forms}>
                        <Situation
                            path={path}
                        />
                        <Form className={StyleCars.operations}>
                            {operations.map((operation, i) => {
                                if (operation !== 'Ads with photos') {
                                    return (
                                        <Form.Group
                                            key={i}
                                            className={StyleCars.item}
                                        >
                                            <Form.Check
                                                inline
                                                label={operation}
                                                name="group2"
                                                type='radio'
                                            // onChange={priv}
                                            />
                                        </Form.Group>
                                    )
                                } else {
                                    return (
                                        <Form.Group
                                            key={i}
                                            className={StyleCars.item}
                                        >
                                            <Form.Check
                                                inline
                                                label={operation}
                                                name="group2"
                                                type='checkbox'
                                            // onChange={agen}
                                            />
                                        </Form.Group>
                                    )
                                }
                            })}
                        </Form>
                        <Accordion alwaysOpen className={StyleCars.acardion}>
                            {dataRegionsCursPriceCategorys.map((dataRegionsCursPriceCategory, i) => {
                                if (dataRegionsCursPriceCategory.name === 'Location') {
                                    return (
                                        <Form
                                            style={{ height: `${heigth}` }}
                                            key={i}
                                            className={StyleCars.locations}
                                        >
                                            <Accordion.Item eventKey={i} className={StyleCars.acardionItem}>
                                                <Accordion.Header onClick={location}>{dataRegionsCursPriceCategory.name}</Accordion.Header>
                                                <Accordion.Body>
                                                    <Form.Group className={StyleCars.item} >
                                                        <Form.Check
                                                            inline
                                                            label='All'
                                                            name="group3"
                                                            type='checkbox'
                                                            value='All'
                                                            onChange={showRegionAll}
                                                        />
                                                    </Form.Group>
                                                    {dataRegionsCursPriceCategory.elements.map((element, index) => {
                                                        if (checkedRegion === 'All') {
                                                            return (
                                                                <Fragment key={index}>
                                                                    <Form.Group className={StyleCars.item} >
                                                                        <Form.Check
                                                                            inline
                                                                            label={element.name}
                                                                            name="group3"
                                                                            type='checkbox'
                                                                            value={element.name}
                                                                            // checked
                                                                            onChange={showRegion.bind(null, element.id)}
                                                                        />
                                                                    </Form.Group>
                                                                    {element.regions.map((region, ind) => {
                                                                        return (
                                                                            <div key={ind} className={StyleCars.itemRegion}>
                                                                                {region}
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </Fragment>
                                                            )
                                                        }
                                                        if (element.active) {
                                                            return (
                                                                <Fragment key={index}>
                                                                    <Form.Group className={StyleCars.item} >
                                                                        <Form.Check
                                                                            inline
                                                                            label={element.name}
                                                                            name="group3"
                                                                            type='checkbox'
                                                                            value={element.name}
                                                                            checked
                                                                            onChange={showRegion.bind(null, element.id)}
                                                                        />
                                                                    </Form.Group>
                                                                    {element.regions.map((region, ind) => {
                                                                        return (
                                                                            <div key={ind} className={StyleCars.itemRegion}>
                                                                                {region}
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </Fragment>
                                                            )
                                                        } else {
                                                            return (
                                                                <Form.Group key={index} className={StyleCars.item} >
                                                                    <Form.Check
                                                                        inline
                                                                        label={element.name}
                                                                        name="group3"
                                                                        type='checkbox'
                                                                        value={element.name}
                                                                        onChange={showRegion.bind(null, element.id)}
                                                                    />
                                                                </Form.Group>
                                                            )
                                                        }
                                                    })}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Form>
                                    )
                                } else if (dataRegionsCursPriceCategory.name === 'Currency') {
                                    return (
                                        <Form key={i} className={StyleCars.currency}>
                                            <Accordion.Item eventKey={i} className={StyleCars.acardionItem}>
                                                <Accordion.Header>{dataRegionsCursPriceCategory.name}</Accordion.Header>
                                                <Accordion.Body>
                                                    {dataRegionsCursPriceCategory.elements.map((element, index) => {
                                                        return (
                                                            <Form.Group key={index} className={StyleCars.item} >
                                                                <Form.Check
                                                                    inline
                                                                    label={element}
                                                                    name="group4"
                                                                    type='radio'
                                                                    value={element}
                                                                    onChange={changeCurrency}
                                                                />
                                                            </Form.Group>
                                                        )
                                                    })}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Form>
                                    )
                                } else if (dataRegionsCursPriceCategory.name === 'Price') {
                                    return (
                                        <Form key={i} className={StyleCars.price}>
                                            <Accordion.Item eventKey={i} className={StyleCars.acardionItem}>
                                                <Accordion.Header>{dataRegionsCursPriceCategory.name}</Accordion.Header>
                                                <Accordion.Body>
                                                    {simbol && <Form.Label className={StyleCars.priceList}>{price}{simbol}-{max}{simbol}</Form.Label>}
                                                    <Slider
                                                        min={0}
                                                        max={max}
                                                        step={step}
                                                        value={price}
                                                        onChange={rang}
                                                    />
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Form>
                                    )
                                } else {
                                    return (
                                        <Form key={i} className={StyleCars.category} >
                                            <Accordion.Item eventKey={i} className={StyleCars.acardionItem} onClick={closeSwiper}>
                                                <Accordion.Header>{dataRegionsCursPriceCategory.name}</Accordion.Header>
                                                <Accordion.Body>
                                                    {dataRegionsCursPriceCategory.elements.map((el, index) => {
                                                        return (
                                                            <div key={index} className={StyleCars.content}>
                                                                <div className={StyleCars.title}>{el.name}</div>
                                                                <div className={StyleCars.items}>
                                                                    {el.items.map((item, ind) => {
                                                                        return (
                                                                            <div
                                                                                key={ind}
                                                                                className={StyleCars.item}
                                                                            >
                                                                                {item}
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Form>
                                    )
                                }
                            })}
                        </Accordion>
                        {!close &&
                            <div className={StyleCars.swiper}>
                                <Swiper
                                    modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
                                    pagination={{ clickable: true }}
                                    autoplay={true}
                                >

                                    {
                                        advertisements.map((advertisement, i) => {
                                            return (
                                                <SwiperSlide key={i}>
                                                    <img src={require("../../images/Rectangle 477.png")} alt='' />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        }
                    </div>
                    <Products
                        title='Car'
                        products={carPrivate.length === 0 ? cars : carPrivate}
                    />
                </div>
            </Container >
        </div >


    )
})