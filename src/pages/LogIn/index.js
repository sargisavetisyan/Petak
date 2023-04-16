import React, { useEffect, useState } from "react";
import StyleLogIn from './LogIn.module.scss';
import StyleSignUp from '../SignUp/StyleSignUp.module.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { defaultAuth, verifyUser } from "../../features/user/userSlice";

export const LogIn = React.memo(({ style, showModal, onCloseModal }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { authentication, responseEmail, responsePassword } = useSelector(state => state.userData)

    const [eyePassword, setEyePassword] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const logIn = (data) => {
        dispatch(verifyUser(data))
        reset()
    }

    useEffect(() => {
        if (authentication) {
            dispatch(defaultAuth())
            if (showModal) onCloseModal()
            navigate('/')
        }
    }, [authentication, responseEmail, responsePassword])

    return (
        <div className={!style ? StyleSignUp.body : StyleSignUp.bodyModal}>
            <Container>
                <div className={StyleSignUp.main}>
                    <div className={StyleSignUp.form}>
                        <div className={StyleSignUp.header}>
                            <p>Welcome Back</p>
                            <h1>Log In</h1>
                        </div>
                        <Form
                            onSubmit={handleSubmit(logIn)}
                        >
                            <Form.Group
                                className={StyleSignUp.item}
                            // controlId="formBasicEmail"
                            >
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    className={StyleSignUp.input}
                                    type="email"
                                    placeholder="username@gmail.com"
                                    {...register('email', { required: true })}
                                />
                                {responseEmail &&
                                    <Form.Text className={StyleSignUp.error}>
                                        Sorry, your email isn’t right. Please, try again.
                                    </Form.Text>
                                }
                            </Form.Group>
                            <Form.Group
                                className={StyleSignUp.item}
                            // controlId="formBasicEmail"
                            >
                                <div className={StyleSignUp.label}>
                                    <Form.Label>Password</Form.Label>
                                    <span >
                                        {eyePassword ?
                                            <BsEye
                                                onClick={() => setEyePassword(!eyePassword)}
                                                className={StyleSignUp.eyeIcon}
                                            /> :
                                            <BsEyeSlash
                                                onClick={() => setEyePassword(!eyePassword)}
                                                className={StyleSignUp.eyeIcon}
                                            />}
                                    </span>
                                </div>
                                <Form.Control
                                    className={StyleSignUp.input}
                                    type={eyePassword ? 'text' : "password"}
                                    placeholder="Password"
                                    {...register('password', { required: true })}
                                />
                                {responsePassword &&
                                    <Form.Text className={StyleSignUp.error}>
                                        Sorry, the password isn’t right. We can help you recover your password.
                                    </Form.Text>
                                }
                            </Form.Group>
                            <Form.Group
                                className={StyleSignUp.item}
                            >
                                <Form.Check
                                    className={StyleLogIn.itemInput}
                                    label='Remember me?'
                                    // value={situation}
                                    name="group1"
                                    type='checkbox'
                                // onChange={changeSituation}
                                />
                            </Form.Group>
                            <Button
                                className={StyleLogIn.btn}
                                type="submit"
                            >
                                Log In
                            </Button>
                        </Form >
                        <div className={StyleLogIn.forgot} >
                            Forgot Password?
                        </div>
                        <div>
                            <div className={StyleSignUp.socialHeader}>
                                <div className={StyleSignUp.socialHeaderLine}></div>
                                <div className={StyleSignUp.socialHeaderText}>
                                    or continue with
                                </div>
                                <div className={StyleSignUp.socialHeaderLine}></div>
                            </div>
                            <div className={StyleSignUp.social}>
                                <Button
                                    className={StyleSignUp.socialBtn}
                                    type="submit"
                                >
                                    <FaFacebookF />
                                </Button>
                                <Button
                                    className={StyleSignUp.socialBtn}
                                    type="submit"
                                >
                                    <FaGoogle />
                                </Button>
                            </div>
                            <div>
                                Don’t have an account yet?
                                <Link
                                    to={'/signup'}
                                    className={StyleSignUp.link}
                                    onClick={onCloseModal}
                                >
                                    Sign Up for free
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={StyleSignUp.logo}>
                        <div>
                            <img src={require("../../images/Vector.png")} />
                            <span>Petak</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div >
    )
})
