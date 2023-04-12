import React from "react";
import StyleActionsSection from './ActionsSection.module.scss';
import { Link } from "react-router-dom";

export const ActionsSection = React.memo(() => {
    return (
        <div className={StyleActionsSection.icons}>
            <div className={StyleActionsSection.item}>
                <img src={require('../../images/top.png')} alt="" />
                <div>Top</div>
            </div>
            <div className={StyleActionsSection.item}>
                <Link to={'/'}>
                    <img src={require('../../images/home.png')} alt="" />
                    <div> Home Page</div>
                </Link>
            </div>
            <div className={StyleActionsSection.item}>
                <img src={require('../../images/tag.png')} alt="" />
                <div >Tag</div>
            </div>
        </div>
    )
})