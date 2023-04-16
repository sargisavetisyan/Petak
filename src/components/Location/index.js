import React, { useState, useEffect, Fragment } from "react";
import StyleLocation from './Location.module.scss';
import { useDispatch, useSelector } from "react-redux";
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { isActiveRegion } from "../../features/location/locationSlice";

export const Location = React.memo(() => {
    const dispatch = useDispatch()
    const { regions } = useSelector(state => state.locationData)

    const [heigth, setHeigth] = useState('')

    const location = () => {
        heigth ? setHeigth('') : setHeigth('593px')
    }

    const [checkedRegion, setCheckedRegion] = useState('')

    const showRegionAll = (e) => {
        checkedRegion ? setCheckedRegion('') : setCheckedRegion(e.target.value)
    }

    const showRegion = (id) => {
        dispatch(isActiveRegion(id))
    }

    useEffect(() => {

    }, [regions, checkedRegion])

    return (
        <div
            className={StyleLocation.body}
            style={{ height: `${heigth}` }}
        >
            <Accordion>
                <Accordion.Item
                    eventKey={0}
                    className={StyleLocation.acardionItem}>
                    <Accordion.Header onClick={location}>Location</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className={StyleLocation.item} >
                            <Form.Check
                                className={StyleLocation.itemInput}
                                inline
                                label='All'
                                name="group3"
                                type='checkbox'
                                value='All'
                                onChange={showRegionAll}
                            />
                        </Form.Group>
                        {regions.map((region, index) => {
                            if (checkedRegion === 'All') {
                                return (
                                    <Fragment key={index}>
                                        <Form.Group className={StyleLocation.item} >
                                            <Form.Check
                                                className={StyleLocation.itemInput}
                                                inline
                                                label={region.name}
                                                name="group3"
                                                type='checkbox'
                                                value={region.name}
                                                // checked
                                                onChange={showRegion.bind(null, region.id)}
                                            />
                                        </Form.Group>
                                        {region.communitys.map((community, ind) => {
                                            return (
                                                <div key={ind} className={StyleLocation.itemRegion}>
                                                    {community}
                                                </div>
                                            )
                                        })}
                                    </Fragment>
                                )
                            }
                            if (region.active) {
                                return (
                                    <Fragment key={index}>
                                        <Form.Group className={StyleLocation.item} >
                                            <Form.Check
                                                className={StyleLocation.itemInput}
                                                inline
                                                label={region.name}
                                                name="group3"
                                                type='checkbox'
                                                value={region.name}
                                                checked
                                                onChange={showRegion.bind(null, region.id)}
                                            />
                                        </Form.Group>
                                        {region.communitys.map((community, ind) => {
                                            return (
                                                <div key={ind} className={StyleLocation.itemRegion}>
                                                    {community}
                                                </div>
                                            )
                                        })}
                                    </Fragment>
                                )
                            } else {
                                return (
                                    <Form.Group key={index} className={StyleLocation.item} >
                                        <Form.Check
                                            className={StyleLocation.itemInput}
                                            inline
                                            label={region.name}
                                            name="group3"
                                            type='checkbox'
                                            value={region.name}
                                            onChange={showRegion.bind(null, region.id)}
                                        />
                                    </Form.Group>
                                )
                            }
                        })}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div >
    )
})