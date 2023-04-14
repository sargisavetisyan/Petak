import React, { useEffect } from "react";
import StyleCards from './Cards.module.scss';
import { Link } from "react-router-dom";
import { BiChevronRight } from 'react-icons/bi';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalLogInOrSignUp } from "../ModalLogInOrSignUp";
import ReactLoading from 'react-loading';

export const Cards = React.memo(({ title, products }) => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.userData)
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true)
    }

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(4)
    const showNext = () => {
        // setMin(min + 4)
        // setMax(max + 4)
        setLoading(true)
    }

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setMin(min + 4)
                setMax(max + 4)
            }, 1000)
        }
    }, [loading])

    useEffect(() => {
        setLoading(false)
    }, [min])

    return (
        <div className={StyleCards.card}>
            <div className={StyleCards.title}>
                {title}s
                <span><BiChevronRight /></span>
            </div>
            <div className={StyleCards.body}>

                {products.map((product, i) => {
                    if (i >= min && i < max) {
                        return (
                            <Link
                                key={i}
                                to={user.id && `/${title}/` + product.id}
                                className={StyleCards.link}
                                onClick={openModal}
                            >
                                {/* Loading@ lav arac chi */}
                                {loading ?
                                    <div className={StyleCards.loaddingBody}>
                                        <ReactLoading
                                            className={StyleCards.loadding}
                                            type={'spokes'}
                                            color={'#FFC107'}
                                        />
                                    </div>
                                    :

                                    <div className={StyleCards.carItem}>
                                        <div
                                            className={StyleCards.photo}
                                            style={title === 'Car' || title === 'Apartments for Sale' ?
                                                { borderRadius: '20px', backgroundImage: `url(${product.photo})` }
                                                :
                                                { borderRadius: '5px', backgroundImage: `url(${product.photo})` }}
                                        >
                                        </div>
                                        <div className={StyleCards.text}>
                                            {title === 'Car' &&
                                                <>
                                                    <div>{product.year} {product.mark}  Series # {product.id}</div>
                                                    <div>{product.type} {product.door} Door</div>
                                                </>
                                            }
                                            {title === 'Apartments for Sale' &&
                                                <>
                                                    <div>
                                                        {product.room} room apartment on
                                                        {product.street}
                                                    </div>
                                                    <div>
                                                        {product.room}rm., {product.area} sq.m., {product.floor + 4}/{product.floor} floor
                                                    </div>
                                                </>
                                            }
                                            {title === 'Mobile phone' &&
                                                <>
                                                    <div style={{ fontSize: '18px' }}>
                                                        {product.mark} {product.model}
                                                        {product.gb} Gb...
                                                    </div>
                                                    <p>
                                                        {product.color}, {product.gb} Gb
                                                    </p>
                                                </>
                                            }
                                            {title === 'Job' &&
                                                <>
                                                    <div style={{ fontSize: '18px' }}>
                                                        {product.work}
                                                    </div>
                                                    <p>
                                                        {product.character}, {product.rate} Gb
                                                    </p>
                                                </>
                                            }
                                            {title === 'Building material' &&
                                                <div style={{ fontSize: '18px' }}>
                                                    {product.name}
                                                </div>
                                            }
                                            {title === 'Trasportation and Taxi' &&
                                                <div style={{ fontSize: '18px' }}>
                                                    {product.type}
                                                </div>
                                            }
                                        </div>
                                    </div>
                                }
                            </Link>
                        )
                    }
                })}

            </div>

            <div className={StyleCards.btn}>
                <button onClick={showNext}>
                    See More
                    <img src={require('../../images/btn.png')} alt='' />
                </button>
            </div>
            <ModalLogInOrSignUp
                showModal={showModal}
                onCloseModal={setShowModal}
            />
        </div>
    )
})