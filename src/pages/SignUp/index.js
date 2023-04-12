import React, { useEffect, useState } from "react";
import StyleSignUp from './StyleSignUp.module.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../features/user/userSlice";

export const SignUp = React.memo(() => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.userData)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [eyePassword, setEyePassword] = useState(false)
    const [eyeConfirm, setEyeConfirm] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        getValues
    } = useForm()

    // **** validate  ****
    // 1- validate for name
    const [errorName, setErrorName] = useState(false)

    const validateName = () => {
        let name = getValues('name')
        if (name.length < 3) {
            setErrorName(true)
            return false
        } else {
            return true
        }
    }

    useEffect(() => {

    }, [errorName])

    // 2- validate for email 
    const [errorEmailSimbol, setErrorEmailSimbol] = useState(false)

    const validateEmail = () => {
        let email = getValues('email')
        //    kisat e
    }

    //  3-validate for password
    const [password, setPassword] = useState('')
    const [errorPassword, setErrorPassword] = useState(false)

    const validatePassword = () => {
        let password = getValues('password')
        if (password.length < 6) {
            setErrorPassword(true)
            return false
        } else {
            setPassword(password)
            return true
        }
        // kisat e
    }
    useEffect(() => {

    }, [errorPassword])

    //  4-validate for Confitm

    const [errorConfirm, setErrorConfirm] = useState(false)
    const validateConfirm = () => {
        let confirm = getValues('passwordConfirm')
        if (confirm !== password) {
            setErrorConfirm(true)
            return false
        } else {
            return true
        }
    }

    useEffect(() => {

    }, [password, errorConfirm])

    const signUpUser = (data) => {
        setPassword('')
        data.id = Date.now()
        data.photo = ''
        delete data.passwordConfirm
        dispatch(addUser(data))
        navigate('/login')
        reset()
    }

    return (
        <div className={StyleSignUp.body}>
            <Container>
                <div className={StyleSignUp.main}>
                    <div className={StyleSignUp.form}>
                        <div className={StyleSignUp.header}>
                            <p>Welcome</p>
                            <h1>Sign Up</h1>
                        </div>
                        <Form
                            onSubmit={handleSubmit(signUpUser)}
                        >
                            <Form.Group
                                className={StyleSignUp.item}
                            // controlId="formBasicEmail"
                            >
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    className={StyleSignUp.input}
                                    type="text"
                                    placeholder="Type your first name"
                                    {...register('name', { required: true, min: 3, max: 21, validate: { validateName } })}
                                />
                                {errors.name &&
                                    <Form.Text className={StyleSignUp.error}>
                                        {errorName ? " First name must be min 3 to max 21 point." : "'First name is required."}
                                    </Form.Text>
                                }
                            </Form.Group>
                            <Form.Group
                                className={StyleSignUp.item}
                            // controlId="formBasicEmail"
                            >
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    className={StyleSignUp.input}
                                    type="email"
                                    placeholder="username@gmail.com"
                                    {...register('email', { required: true, validate: { validateEmail } })}
                                />
                                {errors.email &&
                                    <Form.Text className={StyleSignUp.error}>
                                        Please, enter your email address
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
                                    {...register('password', { required: true, min: 6, validate: { validatePassword } })}
                                />
                                {errors.password &&
                                    <Form.Text className={StyleSignUp.error}>
                                        {errorPassword ? 'Your password must be 6 characters or more, with at least one lowercase and one uppercase letter.' : 'Password is required.'}
                                    </Form.Text>
                                }
                            </Form.Group>
                            <Form.Group
                                className={StyleSignUp.item}
                            // controlId="formBasicEmail"
                            >
                                <div className={StyleSignUp.label}>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <span >
                                        {eyeConfirm ?
                                            <BsEye
                                                onClick={() => setEyeConfirm(!eyeConfirm)}
                                                className={StyleSignUp.eyeIcon}
                                            /> :
                                            <BsEyeSlash
                                                onClick={() => setEyeConfirm(!eyeConfirm)}
                                                className={StyleSignUp.eyeIcon}
                                            />}
                                    </span>
                                </div>
                                <Form.Control
                                    className={StyleSignUp.input}
                                    type={eyeConfirm ? 'text' : "password"}
                                    placeholder="Confirm"
                                    {...register('passwordConfirm', { required: true, validate: { validateConfirm } })}
                                />
                                {errors.passwordConfirm &&
                                    <Form.Text className={StyleSignUp.error}>
                                        {errorConfirm ? 'Sorry, passwords do NOT match.' : 'Please Confirm password'}
                                    </Form.Text>
                                }
                            </Form.Group>
                            <Button
                                className={StyleSignUp.btn}
                                type="submit"
                            >
                                Sign Up
                            </Button>
                        </Form >
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
                                Have an account?
                                <Link
                                    to={'/login'}
                                    className={StyleSignUp.link}
                                >
                                    Login
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
