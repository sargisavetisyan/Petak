import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from "react-redux";
import { Link, } from "react-router-dom";
import StyleHome from './Home.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay, Pagination } from 'swiper';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Cards } from "../../components/Cards";



export const Home = React.memo(() => {
    const { cars } = useSelector(state => state.carData)
    const { apartaments } = useSelector(state => state.apartamentData)
    const { mobiles } = useSelector(state => state.mobileData)
    const { jobs } = useSelector(state => state.jobData)
    const { materials } = useSelector(state => state.materialData)
    const { transports } = useSelector(state => state.transportData)
    const { books } = useSelector(state => state.bookData)
    const categories = ['Jobs', 'Service', 'Real Estate', 'Electronics', 'Cloting and Fashion', 'Home and Garden']


    let categorys = ['Jobs', 'Cars']


    return (
        <div className={StyleHome.home}>
            <Container>
                <div className={StyleHome.homeMain}>
                    <div className={StyleHome.menu}>
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
                                        // to={`/see/` + category.toLowerCase()}
                                        to={`${category.toLowerCase()}`}
                                    >
                                        {category}
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
                                            to={`/${categorie.toLowerCase()}`}
                                            className={StyleHome.item}
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
                                                <Link to={'/car/' + car.id}>
                                                    <img src={car.photo} alt='car' />
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
                                        <img
                                            src={book.photo}
                                            alt='book'
                                            style={{ width: '180px', height: '300px' }}
                                        />
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
    )
})