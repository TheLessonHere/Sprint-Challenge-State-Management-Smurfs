import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { connect } from 'react-redux';

import { formSubmit } from '../actions';

function UserForm({ errors, touched, isSubmitting, props }) {

    return (
      <div className="container">
          <h2>Add New Smurf</h2>
            <Form>
                <div>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field type="text" name="name" placeholder="Name" />
                </div>
                <div>
                {touched.age && errors.age && <p>{errors.age}</p>}
                <Field type="text" name="age" placeholder="Age"  />
                </div>
                <div>
                {touched.height && errors.height && <p>{errors.height}</p>}
                <Field type="text" name="height" placeholder="Height"  />
                </div>
                <div>
                <button type="submit" disabled={isSubmitting}>Submit</button>
                </div>
            </Form>
      </div>
    );
  }
  
  const FormikForm = withFormik({
    mapPropsToValues({ name, age, height }) {
      return {
        name: name || "",
        age: age || "",
        height: height || ""
      };
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .max(15, "Name cannot be longer than 15 characters")
        .required("Name is required"),
      age: Yup.string()
        .required("age is required"),
      height: Yup.string()
        .required("age is required")
    }),
    handleSubmit(values, { resetForm, setSubmitting, props }) {
    axios
        .post("http://localhost:3333/smurfs", values)
        .then(res => {
        console.log(res.data);
        resetForm();
        setSubmitting(false);
        props.formSubmit(res.data);
        })
        .catch(err => {
        console.log('Request failed', err);
        setSubmitting(false);
        });
    }
  })(UserForm);
  
  const mapStateToProps = state => {
    console.log(state);
    return {
        error: state.error,
        isFetching: state.isFetching,
        name: state.name,
        age: state.name,
        height: state.height,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { formSubmit })(FormikForm);