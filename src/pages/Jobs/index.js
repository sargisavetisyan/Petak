import React, { Fragment, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { Navigation, Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import StyleJobs from './Jobs.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Slider } from 'antd';
import { isActiveRegion } from '../../features/job/jobSlice';
import { NavbarPage } from '../../components/NavbarPage';
import { Situation } from '../../components/Situation';
import { useLocation } from 'react-router-dom';
import { Products } from '../../components/Products';


export const Jobs = React.memo(() => {
    const dispatch = useDispatch()
    const { operations, dataRegionsCursPriceCategorys, jobs } = useSelector(state => state.jobData)

    const [path, setPath] = useState('')
    const { pathname } = useLocation()
    useEffect(() => {
        setPath(pathname.slice(1, pathname.length))
    }, [])

    const [agenc, setAgenc] = useState(false)

    const [heigth, setHeigth] = useState('')
    const location = () => {
        if (heigth) {
            setHeigth('')
        } else {
            setHeigth('593px')
        }
    }

    const advertisements = [
        { id: 0, photo: 'require("./images/Rectangle 477.png")' },
        { id: 1, photo: 'require("./images/Rectangle 477.png")' },
        { id: 2, photo: 'require("./images/Rectangle 477.png")' }
    ]

    // *************************************
    const [close, setyClose] = useState(false)

    const closeSwiper = () => {
        setyClose(!close)
    }

    const agen = () => {
        setAgenc(!agenc)
        // harcum pti gna
    }

    const [checkedRegion, setCheckedRegion] = useState('')

    const showRegionAll = (e) => {
        checkedRegion ? setCheckedRegion('') : setCheckedRegion(e.target.value)
    }

    const showRegion = (id) => {
        dispatch(isActiveRegion(id))
    }

    useEffect(() => {

    }, [dataRegionsCursPriceCategorys, checkedRegion])

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

    return (
        <div className={StyleJobs.jobs}>
            <Container>
                <NavbarPage />
                <div className={StyleJobs.body}>
                    <div className={StyleJobs.forms}>
                        <Situation
                            path={path}
                        />
                        <Form className={StyleJobs.operations}>
                            {operations.map((operation, i) => {
                                if (operation !== 'Ads with photos') {
                                    return (
                                        <Form.Group
                                            key={i}
                                            className={StyleJobs.item}
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
                                            className={StyleJobs.item}
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
                        <Accordion alwaysOpen className={StyleJobs.acardion}>
                            {dataRegionsCursPriceCategorys.map((dataRegionsCursPriceCategory, i) => {
                                if (dataRegionsCursPriceCategory.name === 'Location') {
                                    return (
                                        <Form style={{ height: `${heigth}` }} key={i} className={StyleJobs.locations} >
                                            <Accordion.Item eventKey={i} className={StyleJobs.acardionItem}>
                                                <Accordion.Header onClick={location}>{dataRegionsCursPriceCategory.name}</Accordion.Header>
                                                <Accordion.Body>
                                                    <Form.Group className={StyleJobs.item} >
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
                                                                    <Form.Group className={StyleJobs.item} >
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
                                                                            <div key={ind} className={StyleJobs.itemRegion}>
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
                                                                    <Form.Group className={StyleJobs.item} >
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
                                                                            <div key={ind} className={StyleJobs.itemRegion}>
                                                                                {region}
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </Fragment>
                                                            )
                                                        } else {
                                                            return (
                                                                <Form.Group key={index} className={StyleJobs.item} >
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
                                        <Form key={i} className={StyleJobs.currency}>
                                            <Accordion.Item eventKey={i} className={StyleJobs.acardionItem}>
                                                <Accordion.Header>{dataRegionsCursPriceCategory.name}</Accordion.Header>
                                                <Accordion.Body>
                                                    {dataRegionsCursPriceCategory.elements.map((element, index) => {
                                                        return (
                                                            <Form.Group key={index} className={StyleJobs.item} >
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
                                        <Form key={i} className={StyleJobs.price}>
                                            <Accordion.Item eventKey={i} className={StyleJobs.acardionItem}>
                                                <Accordion.Header>{dataRegionsCursPriceCategory.name}</Accordion.Header>
                                                <Accordion.Body>
                                                    {simbol && <Form.Label className={StyleJobs.priceList}>{price}{simbol}-{max}{simbol}</Form.Label>}
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
                                        <Form key={i} className={StyleJobs.category} >
                                            <Accordion.Item eventKey={i} className={StyleJobs.acardionItem} onClick={closeSwiper}>
                                                <Accordion.Header>{dataRegionsCursPriceCategory.name}</Accordion.Header>
                                                <Accordion.Body>
                                                    {dataRegionsCursPriceCategory.elements.map((el, index) => {
                                                        return (
                                                            <div key={index} className={StyleJobs.content}>
                                                                <div className={StyleJobs.title}>{el.name}</div>
                                                                <div className={StyleJobs.items}>
                                                                    {el.items.map((item, ind) => {
                                                                        return (
                                                                            <div
                                                                                key={ind}
                                                                                className={StyleJobs.item}
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
                            <div className={StyleJobs.swiper}>
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
                        title='Job'
                        products={jobs}
                    />
                </div>
            </Container >
        </div >
    )
})