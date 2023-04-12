import React, { useState } from "react";
import StyleProfile from './Profile.module.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from "react-bootstrap";
import { Announcements } from "../../components/Announcements";
import { Messages } from "../../components/Messages";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Profile = React.memo(() => {
    const [path, setPath] = useState('')
    const { search } = useLocation()

    useEffect(() => {
        setPath(search.replace(/[^A-Za-z]/ig, ''))
        console.log(path);
    }, [path])
    return (
        <div className={StyleProfile.profile} >
            <Container>
                {path && <Tabs
                    defaultActiveKey={path}
                    id="justify-tab-example"
                    className={StyleProfile.tabs}
                    justify
                >
                    <Tab className={StyleProfile.tab} eventKey='announcements' title='Announcements'>
                        <Announcements />
                    </Tab>
                    <Tab className={StyleProfile.tab} eventKey='messages' title='Message'>
                        <Messages />
                    </Tab>
                    <Tab className={StyleProfile.tab} eventKey='wallet' title='Wallet'>
                        'Wallet'
                    </Tab>
                    <Tab className={StyleProfile.tab} eventKey='settings' title='Settings' >
                        'Settings'
                    </Tab>
                </Tabs>
                }
            </Container>
        </div >
    )
})