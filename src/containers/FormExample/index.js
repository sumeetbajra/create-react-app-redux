import React from 'react';
import { Formik } from 'formik';

const FormExample = () => (
  <div>
    <h1>Fill up the form</h1><hr />
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
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
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email &&
              <div className="text-danger text-small">{errors.email}</div>
            }
          </div>
          
          <div class="form-group">
            <label for="exampleInputEmail1">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password &&
              <div className="text-danger text-small">{errors.password}</div>
            }
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
