// components/Login.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../utils/localStorage';
import './css/Login.css';

const Login = ({ setUser: updateUser }) => {
  const navigate = useNavigate();

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-header">Login to Your Account</h2>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={Yup.object({
            username: Yup.string().required('Username is required'),
            password: Yup.string().required('Password is required'),
          })}
          onSubmit={(values) => {
            // Set current user session
            setUser(values);
            updateUser(values);

            // Clear previous invoice form data (fresh form per user)
            localStorage.removeItem('invoiceData');

            // Redirect to invoice form
            navigate('/invoice');
          }}
        >
          {({ isSubmitting }) => (
            <Form className="login-form">
              <div className="form-group">
                <Field name="username" placeholder="Username" className="form-input" />
                <ErrorMessage name="username" component="div" className="form-error" />
              </div>

              <div className="form-group">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-input"
                />
                <ErrorMessage name="password" component="div" className="form-error" />
              </div>

              <button type="submit" className="login-btn" disabled={isSubmitting}>
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
