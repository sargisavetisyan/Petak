import React, { useState } from "react";
import StyleSituation from './Situation.module.scss'
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { feachAgency, feachPrivate } from "../../features/car/carSlice";

export const Situation = React.memo(({ path }) => {
    const dispatch = useDispatch()
    const { situations, operations } = useSelector(state => state.jobData)

    const [privat, setPrivat] = useState(false)
    const [agency, setAgency] = useState(false)

    const changeSituation = (e) => {
        if (e.target.value === 'Private') {
            setPrivat(!privat)
            if (!privat) {
                dispatch(feachPrivate(e.target.value))
            } else {
                dispatch(feachPrivate())
            }
        } else {
            setAgency(!agency)
            if (!agency) {
                dispatch(feachAgency(e.target.value))
            } else {
                dispatch(feachAgency())
            }
        }
    }

    return (
        <Form className={path === 'electronics' ? StyleSituation.situationsProducts : StyleSituation.situationsJobs}>
            {situations.map((situation, i) => {
                return (
                    <Form.Group
                        key={i}
                        className={StyleSituation.item}
                    >
                        <Form.Check
                            className={StyleSituation.itemInput}
                            inline
                            label={situation}
                            value={situation}
                            name="group1"
                            type='checkbox'
                            onChange={changeSituation}
                        />
                    </Form.Group>
                )
            })}
            {path === 'product' && operations.map((operation, i) => {
                if (operation === 'Ads with photos') {
                    return (
                        <Form.Group
                            key={i}
                            className={StyleSituation.item}
                        >
                            <Form.Check
                                inline
                                label={operation}
                                name="group1"
                                type='checkbox'
                            // onChange={agen}
                            />
                        </Form.Group>
                    )
                }
            })}

        </Form>
    )
})