import React from "react";
import StyleSimilarStatments from './Similar.module.scss';
import { Link } from "react-router-dom";

export const SimilarStatments = React.memo(({ title, products }) => {

    return (
        <div className={StyleSimilarStatments.similarCars}>
            <h5>Similar statements</h5>
            {products && products.map((product, i) => {
                if (i < 5) {

                    return (
                        <Link
                            key={i}
                            to={`/${title}/` + product.id}
                            className={StyleSimilarStatments.similarCarsItem}>
                            {
                                title === 'car' && <>
                                    <div>
                                        <img src={product.photo} alt="" />
                                    </div>
                                    <div className={StyleSimilarStatments.similarCarsText}>
                                        <div className={StyleSimilarStatments.textItem}>
                                            {product.mark} {product.type}
                                        </div>
                                        <div className={StyleSimilarStatments.textItem}>
                                            {product.trusk}, {product.year}
                                        </div>
                                        <div className={StyleSimilarStatments.textItem}>
                                            {product.price}$
                                        </div>
                                    </div>
                                </>
                            }
                            {
                                title === 'job' && <>
                                    <div>
                                        <img src={product.photo} alt="" />
                                    </div>
                                    <div className={StyleSimilarStatments.similarCarsText}>
                                        <div className={StyleSimilarStatments.textItem}>
                                            {product.rate}, {product.work}
                                        </div>
                                        <div className={StyleSimilarStatments.textItem}>
                                            {product.rate},  {product.character}
                                        </div>
                                        {/* 3-rd divi bacakayutyun@ poxum e tesq@ */}
                                        <div className={StyleSimilarStatments.textItem}>
                                            10000
                                        </div>
                                    </div>
                                </>
                            }
                        </Link>
                    )
                }
            })}
        </div>
    )
})