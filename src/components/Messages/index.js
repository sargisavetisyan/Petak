import React from "react";
import StyleMessages from './Messages.module.scss';

export const Messages = React.memo(() => {
    return (
        <div className={StyleMessages.messages}>
            <h2>You currently have no new messages</h2>
        </div>
    )
})