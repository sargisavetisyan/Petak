import React, { useEffect, useState } from "react";
import StyleElectronics from './Electronics.module.scss'
import { NavbarPage } from "../../components/NavbarPage";
import { Container } from "react-bootstrap";
import { Situation } from "../../components/Situation";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow, Pagination } from 'swiper';

export const Electronics = React.memo(() => {
    const { electronics } = useSelector(state => state.electronicData)
    // const [path, setPath] = useState('')
    // const { pathname } = useLocation()
    // useEffect(() => {
    //     setPath(pathname.slice(1, pathname.length))
    // }, [])
    useEffect(() => {
        console.log(electronics[0]);
    }, [])

    return (
        <div className={StyleElectronics.electronics}>
            <Container>
                <NavbarPage />
                <div className={StyleElectronics.body}>
                    <div className={StyleElectronics.main}>
                        <div className={StyleElectronics.swiper}>
                            <Swiper
                                modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
                                pagination={{ clickable: true }}
                                autoplay={true}
                            >

                                {
                                    electronics.map((electronic, i) => {
                                        if (i < 3) {
                                            return (
                                                <SwiperSlide key={i}>
                                                    <img src={electronic.photo} alt='' className={StyleElectronics.img} />
                                                </SwiperSlide>
                                            )
                                        }
                                    })
                                }
                            </Swiper>
                        </div>
                        <div className={StyleElectronics.description}>
                            {electronics.map((electronic, i) => {
                                return (
                                    <div key={i}>
                                        <div>
                                            <div>
                                                <h3>New prices {electronic.model}, lil Solid 2.0</h3>
                                                <p>{electronic.region} &#8250; {electronic.shop}</p>
                                            </div>
                                            <div>{electronic.price}$</div>
                                            <div>
                                                <p>18+</p>
                                                <p>For additional information and registration, you can call the indicated telephone number.</p>
                                                <p>{electronic.phone}</p>
                                                <p>{electronic.description}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div>Announcement number 17507491</div>
                                            <div>Posted on 15.03.2022</div>
                                            <div>Updated on 04.03.2023 22:23</div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className={StyleElectronics.similar}>
                        <div>

                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

            </Container>

        </div>
    )
})



