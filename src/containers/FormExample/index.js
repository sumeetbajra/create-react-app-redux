import React from 'react';
import { Formik } from 'formik';

const FormExample = () => (
  <div>
    <h1>Fill up the form</h1>
    <hr />
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
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
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="email">
              Email address
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </label>
            {errors.email && touched.email && (
              <div className="text-danger">
                <small>{errors.email}</small>
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </label>
            {errors.password && touched.password && (
              <div className="text-danger text-sm">
                <small>{errors.password}</small>
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-success" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default FormExample;
