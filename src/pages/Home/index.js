import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from "react-redux";
import { Link, } from "react-router-dom";
import StyleHome from './Home.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay, Pagination } from 'swiper';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Cards } from "../../components/Cards";
import { BsSliders } from 'react-icons/bs';
import { AllCategorys } from "../../components/AllCategorys";
import { useState } from "react";
import ReactLoading from 'react-loading';
import { User } from "../../components/User";
import { ModalLogInOrSignUp } from "../../components/ModalLogInOrSignUp";
import { Footer } from "../../components/Footer";


export const Home = React.memo(() => {
    const { cars } = useSelector(state => state.carData)
    const { apartaments } = useSelector(state => state.apartamentData)
    const { mobiles } = useSelector(state => state.mobileData)
    const { jobs } = useSelector(state => state.jobData)
    const { materials } = useSelector(state => state.materialData)
    const { transports } = useSelector(state => state.transportData)
    const { books } = useSelector(state => state.bookData)

    const { user } = useSelector(state => state.userData)
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(!showModal)
    }

    const [loading, setLoading] = useState(true)
    const closeLoading = () => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    const [showCategorys, setShowCategorys] = useState(false)

    const show = () => {
        setShowCategorys(!showCategorys)
    }

    const categories = ['Jobs', 'Service', 'Real Estate', 'Electronics', 'Cloting and Fashion', 'Home and Garden']
    const categorys = ['Jobs', 'Cars']

    useEffect(() => {
        closeLoading()
    }, [])

    return (
        <>
            {loading ?
                <ReactLoading
                    className={StyleHome.loadding}
                    type={'spokes'}
                    color={'#FFC107'}
                />
                :
                <>
                    <div className={StyleHome.home}>
                        <Container>
                            <div className={StyleHome.homeMain}>
                                <div className={StyleHome.menu}>
                                    <BsSliders
                                        className={StyleHome.menuIcon}
                                        onClick={show}
                                    />
                                    <AllCategorys
                                        openCanvas={showCategorys}
                                        onHide={show}
                                    />
                                    <NavDropdown
                                        className={StyleHome.dropdown}
                                        // id="nav-dropdown-dark-example"
                                        title='All Categories'
                                    // menuVariant="dark"
                                    >
                                        {categorys.map((category, i) => {
                                            return (
                                                <Link
                                                    key={i}
                                                    to={user.id && `${category.toLowerCase()}`}
                                                    onClick={openModal}
                                                >
                                                    <div className={StyleHome.dropdownLink} >
                                                        {category}
                                                    </div>
                                                </Link>
                                            )
                                        })}
                                    </NavDropdown>
                                    <Nav className={StyleHome.homeMenu}>
                                        {categories.map((categorie, i) => {
                                            return (
                                                <Nav.Item
                                                    key={i}
                                                    className={StyleHome.items}
                                                >
                                                    <Link
                                                        to={user.id && `/${categorie.toLowerCase()}`}
                                                        className={StyleHome.item}
                                                        onClick={openModal}
                                                    >
                                                        {categorie}
                                                    </Link>
                                                </Nav.Item>
                                            )
                                        })}
                                    </Nav>
                                </div>
                                <div className={StyleHome.swiper}>
                                    <Swiper
                                        modules={[Navigation, Autoplay, Pagination]}
                                        pagination={{ clickable: true }}
                                        autoplay={true}
                                    >
                                        {
                                            cars.map((car, i) => {
                                                if (i < 3) {
                                                    return (
                                                        <SwiperSlide key={i}>
                                                            <Link
                                                                to={user.id && '/car/' + car.id}
                                                                onClick={openModal}
                                                            >
                                                                <div
                                                                    className={StyleHome.photo}
                                                                    style={{ backgroundImage: `url(${car.photo})`, }}
                                                                >
                                                                </div>
                                                            </Link>
                                                        </SwiperSlide>
                                                    )
                                                }
                                            })
                                        }
                                    </Swiper>
                                </div>
                                <Cards
                                    title='Car'
                                    products={cars}
                                />
                                <Cards
                                    title='Apartments for Sale'
                                    products={apartaments}
                                />
                                {/* petq e mtacvi vonc sarqel tvyal section@ */}

                                <Cards
                                    title='Mobile phone'
                                    products={mobiles}
                                />
                                <Cards
                                    title='Job'
                                    products={jobs}
                                />
                                <Swiper
                                    style={{ padding: '80px 0' }}
                                    modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
                                    effect={"coverflow"}
                                    slidesPerView={7}
                                    centeredSlides={true}
                                    coverflowEffect={{
                                        rotate: 0,
                                        stretch: 130,
                                        depth: 70,
                                        modifier: 4,
                                    }}
                                    navigation
                                    autoplay={true}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1
                                        },
                                        500: {
                                            slidesPerView: 2
                                        },
                                        900: {
                                            slidesPerView: 4
                                        },
                                        1200: {
                                            slidesPerView: 7
                                        }
                                    }}
                                >
                                    {
                                        books.map((book, i) => {
                                            return (
                                                <SwiperSlide key={i}>
                                                    <Link
                                                        onClick={openModal}
                                                    >
                                                        <div
                                                            className={StyleHome.photoSmall}
                                                            style={{ backgroundImage: `url(${book.photo})` }}
                                                        >
                                                        </div>
                                                    </Link>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                                <Cards
                                    title='Building material'
                                    products={materials}
                                />
                                <Cards
                                    title='Trasportation and Taxi'
                                    products={transports}
                                />
                            </div>
                        </Container >
                    </div >
                </>
            }
            <ModalLogInOrSignUp
                showModal={showModal}
                onCloseModal={openModal}
            />
        </>
    )
})