import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import StyleJobs from './Jobs.module.scss';
import { useSelector } from 'react-redux';
import { NavbarPage } from '../../components/NavbarPage';
import { Products } from '../../components/Products';
import { BsSliders } from 'react-icons/bs';
import { FilterCanvas } from '../../components/FilterCanvas';
import { OwnershipFilter } from '../../components/OwnershipFilter';
import { SaleExchange } from '../../components/Sale&Exchange';
import { Location } from '../../components/Location';
import { CurrencyPrice } from '../../components/Currency&Price';
import { Category } from '../../components/Category';
import { Navigation, Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";


export const Jobs = React.memo(() => {
    const { jobs } = useSelector(state => state.jobData)
    const [show, setShow] = useState(false)

    const showFilter = () => {
        setShow(!show)
    }

    const [close, setyClose] = useState(false)

    const closeSwiper = () => {
        setyClose(!close)
    }

    return (
        <div className={StyleJobs.jobs}>
            <Container>
                <NavbarPage />
                <div className={StyleJobs.body}>
                    <BsSliders
                        className={StyleJobs.menuIcon}
                        onClick={showFilter}
                    />
                    <FilterCanvas
                        openCanvas={show}
                        onHide={showFilter}
                    />
                    <div className={StyleJobs.forms}>
                        <OwnershipFilter />
                        <SaleExchange />
                        <Location />
                        <CurrencyPrice />
                        <Category
                            title='Job'
                            closeSwiper={closeSwiper}
                        />
                        {!close &&
                            <div className={StyleJobs.swiper}>
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
                    <div className={StyleJobs.swiper990}>
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
                        title='Job'
                        products={jobs}
                    />
                </div>
            </Container >
        </div >
    )
})