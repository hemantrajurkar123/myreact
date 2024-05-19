import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'

const initialValues = {
  name: "",
  email: "",
};

const onSubmit = (values) => {
  console.log("Form Values", values);
};

const validate = (values) => {
  let errors = {};
  // validation for name
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  return errors;
};

const validationSchema=Yup.object({
    name:Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required")
})
const FormikTest = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema
  });

  //    console.log("Formik Values",formik.values)
  //    console.log("Formik Values Name",formik.values.name)
  
console.log("Formik Touched (Visited)",formik.touched)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label> <br />
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.name}
        ></input>
        {formik.touched.name && formik.errors.name ?<div className='errors'>{formik.errors.name}</div>:null}

        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.email}
        ></input>
        {formik.touched.email && formik.errors.email?<div className='errors'>{formik.errors.email}</div>:null}

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikTest;
