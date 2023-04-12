import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavbarPage } from "../NavbarPage";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import StyleCars from './Cars.module.scss';
import { feachCar, feachCars } from "../../features/car/carSlice";
import { ProductDetalis } from "../ProductDetalis";
import { InfoCard } from "../InfoCard";
import { SimilarStatments } from "../SimilarStatements";
import { ActionsSection } from "../ActionsSection";

export const Car = React.memo(() => {
    const dispatch = useDispatch()
    const { car, carMarks } = useSelector(state => state.carData)

    const { id } = useParams()

    useEffect(() => {
        dispatch(feachCar(id))
    }, [id])

    useEffect(() => {
        dispatch(feachCars(car.mark))
    }, [car])

    return (
        <div className={StyleCars.car}>
            <Container>
                <NavbarPage />
                {car &&
                    <div className={StyleCars.body}>
                        <ProductDetalis
                            title='car'
                            product={car}
                        />
                        <div className={StyleCars.similar}>
                            <InfoCard
                                title='car'
                                product={car}
                            />
                            <ActionsSection />
                            <SimilarStatments
                                title='car'
                                products={carMarks}
                            />
                        </div>
                    </div>
                }
            </Container>
        </div>
    )
})