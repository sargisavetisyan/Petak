import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactPaginate from 'react-paginate';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import StyleProducts from './Products.module.scss';
import { useDispatch } from "react-redux";
import { JobLiked } from "../../features/job/jobSlice";
import { Link } from "react-router-dom";
import { carLiked } from "../../features/car/carSlice";

export const Products = React.memo(({ title, products }) => {
    const dispatch = useDispatch()
    const like = (id) => {
        if (title === 'Job') {
            dispatch(JobLiked(id))
        }
        if (title === 'Car') {
            dispatch(carLiked(id))
        }
    }

    useEffect(() => {

    }, [products])

    // paginate

    const [items, setItems] = useState(9)
    const [temp, setTemp] = useState(0)

    let itemsPerPage = 9
    const [itemOffset, setItemOffset] = useState(0);
    const pageCount = Math.ceil(products.length / itemsPerPage);


    const handlePageClick = (event) => {
        setTemp(event.selected)
        if (event.selected > temp) {
            const newOffset = (event.selected * itemsPerPage) % products.length;
            setItemOffset(newOffset);
            setItems(itemsPerPage * (1 + event.selected))
        } else {
            setItemOffset(itemOffset - ((temp - event.selected) * itemsPerPage));
            setItems(items - ((temp - event.selected) * itemsPerPage))
        }
    }
    useEffect(() => {

    }, [items, itemOffset])

    // *************************************  useEffectner@ kareli e kpcnel irar

    return (
        <div className={StyleProducts.products}>
            <div className={StyleProducts.title}>
                Top Ads
                <div >?</div>
            </div>
            <div className={StyleProducts.items}>
                {products.map((product, i) => {
                    if (i >= itemOffset && i < items) {
                        return (
                            <div key={i} className={StyleProducts.item}>
                                <Link className={StyleProducts.link}
                                    to={`/${title.toLowerCase()}/` + product.id}>
                                    <img
                                        src={product.photo}
                                        alt={title}
                                    />
                                </Link>
                                <div className={StyleProducts.text}>
                                    {
                                        title === 'Job' &&
                                        <div>
                                            <p>Wanted {product.work}</p>
                                            <button className={StyleProducts.urgent}>
                                                {product.salary}$
                                            </button>
                                            <p>{product.region}, {product.character}, {product.rate}</p>
                                            <p className={StyleProducts.navigation}>Service Sector &gt; {product.sector}</p>
                                        </div>
                                    }
                                    {title === 'Car' &&
                                        <div>
                                            <p>{product.mark}  {product.isPrivate}</p>
                                            {product.urgent &&
                                                <button className={StyleProducts.urgent}>
                                                    Urgent!
                                                </button>
                                            }
                                            <p>{product.type}, {product.year}</p>
                                            <p className={StyleProducts.navigation}>Region &gt; {product.region}</p>
                                        </div>
                                    }
                                    <div className={StyleProducts.like}>
                                        {!product.liked ? <AiOutlineHeart
                                            onClick={like.bind(null, product.id)}
                                        />
                                            :
                                            <AiFillHeart
                                                style={{ color: 'red' }}
                                                onClick={like.bind(null, product.id)}
                                            />
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div >
            {products.length > 9 &&
                <div className={products.length > 45 ? StyleProducts.pagination : StyleProducts.smoll}>
                    <ReactPaginate
                        activeClassName={StyleProducts.active}
                        className={StyleProducts.paginate}
                        breakLabel="..."
                        nextLabel={temp !== pageCount - 1 ? "Next >" : ''}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel={temp !== 0 ? "< Prev" : ''}
                    />
                </div>
            }
        </div >
    )
})