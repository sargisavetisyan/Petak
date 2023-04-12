import React from "react";
import StyleUser from './User.module.scss';
import { NavLink } from "react-bootstrap";
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import { BsQuestionCircle } from 'react-icons/bs'
import { TbCircleNumber2 } from 'react-icons/tb'
import { MdOutlineMessage, MdOutlineAddAlert, MdFormatListBulleted, MdOutlineSort, MdOutlineAccountBalanceWallet, MdOutlineSettings, MdOutlineLogout } from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { exitUser } from "../../features/user/userSlice";
import { Rating } from 'react-simple-star-rating';
import { Link, useNavigate } from "react-router-dom";

export const User = React.memo(() => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector(state => state.userData)
    const [show, setShow] = useState(false)

    const showMenu = () => {
        setShow(!show)
    }

    const exit = () => {
        dispatch(exitUser())
        navigate('/')
    }

    return (
        <div className={StyleUser.user}>
            <AiOutlineUser
                className={StyleUser.userIcon}
                onClick={showMenu}
            />
            {show &&
                <div className={StyleUser.menu}>
                    {user &&
                        <div className={StyleUser.header} >
                            <div className={StyleUser.photo}></div>
                            <div className={StyleUser.name}>
                                {user.name}
                                <div>
                                    <Rating
                                        size={25}
                                        initialValue={0}
                                        iconsCount={5}
                                    // onClick={handleRating}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                    <div className={StyleUser.items}>
                        <Link
                            to={'/profile?announcements'}
                            onClick={showMenu}
                            className={StyleUser.item}
                        >
                            <MdFormatListBulleted />
                            <div> My announouncement</div>
                            <TbCircleNumber2 />
                        </Link>
                        <Link
                            to={'/profile?messages'}
                            onClick={showMenu}
                            className={StyleUser.item}
                        >
                            <MdOutlineMessage />  Messegis
                        </Link>
                        <NavLink className={StyleUser.item}>
                            <MdOutlineAddAlert />  Notification
                        </NavLink>
                        <NavLink className={StyleUser.item}>
                            <MdOutlineSort />   Favorite announouncement
                        </NavLink>
                        <NavLink className={StyleUser.item}>
                            <MdOutlineAccountBalanceWallet />  Wallet
                        </NavLink>
                        <NavLink className={StyleUser.item}>
                            <MdOutlineSettings /> Settings
                        </NavLink>
                        <NavLink className={StyleUser.item}>
                            <BsQuestionCircle />   Reference
                        </NavLink>
                        <NavLink
                            className={StyleUser.item}
                            onClick={exit}
                        >
                            <MdOutlineLogout /> Exit
                        </NavLink>
                    </div>
                </div>
            }
            <AiOutlineHeart className={StyleUser.like} />
        </div >
    )
})