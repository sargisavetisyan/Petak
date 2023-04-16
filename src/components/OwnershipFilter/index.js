import React, { useState } from "react";
import StyleOwnershipFilter from './OwnershipFilter.module.scss';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { feachAgency, feachPrivate } from "../../features/car/carSlice";

export const OwnershipFilter = React.memo(() => {
    const dispatch = useDispatch()
    const ownerships = ['Private', 'Agency']


    const [privat, setPrivat] = useState(false)
    const [agency, setAgency] = useState(false)

    const changeOwnership = (e) => {
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
        <div className={StyleOwnershipFilter.body}>
            {ownerships.map((ownership, i) => {
                return (
                    <Form.Group
                        key={i}
                        className={StyleOwnershipFilter.item}
                    >
                        <Form.Check
                            className={StyleOwnershipFilter.itemInput}
                            inline
                            label={ownership}
                            value={ownership}
                            name="group1"
                            type='checkbox'
                            onChange={changeOwnership}
                        />
                    </Form.Group>
                )
            })}
        </div>
    )
})