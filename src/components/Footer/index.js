import React from "react";
import StyleFooter from './Footer.module.scss';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF } from 'react-icons/fa'
import { SlSocialLinkedin, SlSocialInstagram } from 'react-icons/sl'

export const Footer = React.memo(() => {

    const abouts = ['Compnay info', 'News', 'Privacy', 'Careers', 'Terms and Conditions', 'Advertise with us', 'Policies']
    const apps = ['Developers', 'Security Centre', 'Site Map']
    const helps = ['Seller Information Centre', 'Contact Us']
    const sells = ['Start selling', 'Learn to sell']
    const discoverys = ['New Season', 'Most Searched', 'Most Selled']

    return (
        <div className={StyleFooter.footer}>
            <div className={StyleFooter.header}>
                <Link to={'/'}>
                    <img src={require("../../images/Vector.png")} />
                    Petak
                </Link>
            </div>
            <Container>
                <div className={StyleFooter.body}>
                    <div className={StyleFooter.main}>
                        <div className={StyleFooter.items}>
                            <h3>About</h3>
                            {abouts.map((about, i) => {
                                return (
                                    <Link
                                        key={i}
                                    >
                                        {about}
                                    </Link>
                                )
                            })}
                        </div>
                        <div className={StyleFooter.items}>
                            <h3>Apps</h3>
                            {apps.map((app, i) => {
                                return (
                                    <Link
                                        key={i}
                                    >
                                        {app}
                                    </Link>
                                )
                            })}
                        </div>
                        <div className={StyleFooter.items}>
                            <h3>Help</h3>
                            {helps.map((help, i) => {
                                return (
                                    <Link
                                        key={i}
                                    >
                                        {help}
                                    </Link>
                                )
                            })}
                        </div>
                        <div className={StyleFooter.items}>
                            <h3>Sell</h3>
                            {sells.map((sell, i) => {
                                return (
                                    <Link
                                        key={i}
                                    >
                                        {sell}
                                    </Link>
                                )
                            })}
                        </div>
                        <div className={StyleFooter.items}>
                            <h3>Discovery</h3>
                            {discoverys.map((discovery, i) => {
                                return (
                                    <Link
                                        key={i}
                                    >
                                        {discovery}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className={StyleFooter.footer_footer}>
                        <h3 >Follow Us</h3>
                        <div className={StyleFooter.items}>
                            <Link>
                                <FaFacebookF />
                            </Link>
                            <Link>
                                <SlSocialLinkedin />
                            </Link>
                            <Link>
                                <SlSocialInstagram />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
})