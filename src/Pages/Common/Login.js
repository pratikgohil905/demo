import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
    user: Yup.string().required("username Required"),
    email: Yup.string().email("Invalid email").required("email Required"),
    password: Yup.string()
        .required("password Required")
        .min(8, "Password must be 8 characters long")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter"),
});

const Login = () => {
    const Navigate = useNavigate();
    return (
        <div className="container mt-5">
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({
                    errors,
                    touched,
                    values,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <label for="exampleInputEmail1">Email address</label>
                        <br />
                        <Field
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                            placeholder="Enter Email"
                        />
                        {errors.email && touched.email ? <div className="text-danger">{errors.email}</div> : null}
                        {/* <ErrorMessage name="email" /> */}
                        <br />
                        <label for="exampleInputPassword1">Password</label>
                        <br />
                        <Field
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                            placeholder="Enter Password"
                        />
                        {errors.password && touched.password ? (
                            <div className="text-danger">{errors.password}</div>
                        ) : null}

                        {/* <ErrorMessage name="password" /> */}
                        <br />
                        <button type="submit" onClick={() => Navigate('/dashboard')} className="btn btn-primary mt-3 me-4">
                            login
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
