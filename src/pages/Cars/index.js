import React, { useEffect, useState } from "react";
import StyleCars from './Cars.module.scss';
import { Products } from "../../components/Products";
import { BsSliders } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { NavbarPage } from "../../components/NavbarPage";
import Container from 'react-bootstrap/Container';
import { Navigation, Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { OwnershipFilter } from "../../components/OwnershipFilter";
import { SaleExchange } from "../../components/Sale&Exchange";
import { Category } from "../../components/Category";
import { CurrencyPrice } from "../../components/Currency&Price";
import { Location } from "../../components/Location";
import { FilterCanvas } from "../../components/FilterCanvas";

export const Cars = React.memo(() => {
    const dispatch = useDispatch()
    const { cars, carPrivate } = useSelector(state => state.carData)

    const [show, setShow] = useState(false)

    const showFilter = () => {
        setShow(!show)
    }

    const [close, setyClose] = useState(false)

    const closeSwiper = () => {
        setyClose(!close)
    }

    useEffect(() => {

    }, [carPrivate])

    return (
        <div className={StyleCars.cars}>
            <Container>
                <NavbarPage />
                <div className={StyleCars.body}>
                    <BsSliders
                        className={StyleCars.menuIcon}
                        onClick={showFilter}
                    />
                    <FilterCanvas
                        title='Car'
                        openCanvas={show}
                        onHide={showFilter}
                    />
                    <div className={StyleCars.forms}>
                        <OwnershipFilter />
                        <SaleExchange />
                        <Location />
                        <CurrencyPrice />
                        <Category
                            title='Car'
                            closeSwiper={closeSwiper}
                        />
                        {!close &&
                            <div className={StyleCars.swiper}>
                                <Swiper
                                    modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
                                    pagination={{ clickable: true }}
                                    autoplay={true}
                                >

                                    {
                                        [1, 2, 3].map((i) => {
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
                    <div className={StyleCars.swiper990}>
                        <Swiper
                            modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
                            pagination={{ clickable: true }}
                            autoplay={true}
                        >
                            {
                                [1, 2, 3].map((i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <img src={require("../../images/Rectangle 477.png")} alt='' />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
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