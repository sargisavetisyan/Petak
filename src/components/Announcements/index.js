import React from "react"
import StyleAnnouncements from './Announcements.module.scss';
import Button from 'react-bootstrap/Button';

export const Announcements = React.memo(() => {
    return (
        <div className={StyleAnnouncements.announcements}>
            <h2>You currently have no active listing</h2>
            <div className={StyleAnnouncements.circle}>

            </div>
            <Button
                className={StyleAnnouncements.btn}
            >
                Post on announcements
            </Button>
        </div>
    )
})