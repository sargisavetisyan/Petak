import React from 'react';
import StyleProductDetalis from './ProductDetalis.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow, Pagination } from 'swiper';

export const ProductDetalis = React.memo(({ title, product }) => {

    return (
        <>
            {product &&
                <div className={StyleProductDetalis.info}>
                    <div className={StyleProductDetalis.swiper}>
                        <Swiper
                            modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
                            pagination={{ clickable: true }}
                            autoplay={true}
                        >
                            {[1, 2, 3].map((el, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <div
                                            className={StyleProductDetalis.photo}
                                            style={{ backgroundImage: `url(${product.photo})`, }}
                                        >
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>

                    <div className={StyleProductDetalis.description}>
                        {title === 'car' &&
                            <>
                                <div className={StyleProductDetalis.header}>
                                    <h3>{product.mark} {product.type}, {product.trusk}, {product.year}</h3>
                                    <p>{product.region}  &#8250; {product.owner}</p>
                                    <div className={StyleProductDetalis.price}>
                                        {product.price}$
                                    </div>
                                </div>
                                <div className={StyleProductDetalis.main}>
                                    <div>
                                        <h4>Characteristics</h4>
                                        <ul >
                                            <li >Brend: {product.mark}</li>
                                            <li>Model: {product.type}</li>
                                            <li>Body type: {product.bodyType}</li>
                                            <li>Year: {product.year}</li>
                                            <li>The gearbox: {product.gearbox}</li>
                                            <li>Tow truck: {product.truck}</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4>Additional</h4>
                                        <ul>
                                            <li>The run: 47,000 miles</li>
                                            <li>Condition: Not crashed</li>
                                            <li>Steering wheel: Left</li>
                                            <li>Customs cleared: Yes</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4>Interior</h4>
                                        <ul>
                                            <li>The color of the hall: Beige</li>
                                            <li>The hall: Skin</li>
                                            <li>Luke: No</li>
                                            <li>
                                                Comfort:Air conditioning, heated seats, heated steering wheel, ventilated seats, cruise control,
                                                tinted windows
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4>Exterior</h4>
                                        <ul>
                                            <li>Body color: {product.color}</li>
                                            <li>Wheel sizes: R18</li>
                                            <li>Headlights: LED</li>
                                            <li>headlights</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4>Description</h4>
                                        <ul>
                                            <li>{product.description}</li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        }
                        {title === 'job' &&
                            <>
                                <div>{product.work}</div>
                                <div>{product.region}</div>
                                <div>{product.rate}{product.character}</div>
                                <div>{product.field}</div>
                                <div>{product.urgent && <button>urgent</button>}</div>
                                <div>
                                    <h4>Description</h4>
                                    <ul>
                                        <li></li>
                                    </ul>
                                </div>
                            </>
                        }

                        <div className={StyleProductDetalis.footer}>
                            <div>Announcement number 17507491</div>
                            <div>Posted on 15.03.2022</div>
                            <div>Updated on 04.03.2023 22:23</div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
})