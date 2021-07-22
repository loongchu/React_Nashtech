import React, {useState} from 'react';
import {Formik} from "formik";
import './LoginPage.css'
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {useParams} from "react-router-dom";
import data from "bootstrap/js/src/dom/data";

const initialValues = {
    email: '',
    password: '',
};
const validateValues = values => {
    {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        if(values.password.length < 8){
            errors.password = 'Ai least 8 chars';
        }
        return errors;
    }
}


const LoginPage = ({currentUser,setCurrentUser}) => {

    const onSubmit = (values, { setSubmitting }) => {
        console.log('value = ', values);
        axios.post('http://localhost:8080/authenticate',{
            email: values.email,
            password: values.password
        })
            .then(response => {
                setSubmitting(false)
                console.log(response.data);
                setCurrentUser(response.data.jwttoken);
                // if (response.status === 500) {
                //     history.push("/login");
                // }
                axios.defaults.headers.common['Authorization'] =  response.data.token;
            })
    }

    console.log('Current user = ', currentUser);
    return (
        <div className='login-from'>
            <Formik
                initialValues={initialValues}
                validate={validateValues}
                onSubmit={onSubmit}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <div>
                        <h3 className="login-form-title"> Login</h3>
                        <Form noValidate
                              onSubmit={handleSubmit}
                              className="form-input"
                        >
                            <div className="login-form--container">
                                {console.log("values = ", values)}
                                <Form.Group
                                    as={Col}
                                    md="4"
                                    controlId="validationFormik101"
                                    className="position-relative"
                                >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.email && errors.email}
                                        className="login-input"
                                    />
                                    <Form.Control.Feedback type='invalid' >{errors.email}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="4"
                                    controlId="validationFormik102"
                                    className="position-relative"
                                >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        isInvalid={touched.password && errors.password}
                                        onBlur={handleBlur}
                                        className="login-input"
                                    />

                                    <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                                </Form.Group>
                                <Button type="submit">Submit form</Button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default LoginPage;