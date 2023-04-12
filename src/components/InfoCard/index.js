import React from "react";
import StyleInfoCard from './InfoCard.module.scss';
import Button from 'react-bootstrap/Button';
import { Rating } from 'react-simple-star-rating';

export const InfoCard = React.memo(({ title, product }) => {
    return (
        <div className={StyleInfoCard.card}>
            {title === 'car' &&
                <>
                    <div>
                        <img src={product.ownerPhoto} alt="" />
                    </div>
                    <div>
                        <h5> {product.owner}</h5>
                        <p>{product.region}</p>
                    </div>
                </>
            }
            {title === 'job' &&
                <>
                    <div>
                        <img src={product.photo} alt="" />
                    </div>
                    <div>
                        <h5> {product.work}</h5>
                        <p>{product.region}</p>
                    </div>
                </>
            }
            <div>
                <Rating
                    size={20}
                    initialValue={0}
                    iconsCount={5}
                // onClick={handleRating}
                />
            </div>
            <div>
                <Button className={StyleInfoCard.write}>Write</Button>
                <Button className={StyleInfoCard.call}>Call</Button>
            </div>
        </div>
    )
})