import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  address: "",
};

const onSubmit = (values) => {
  console.log("Form Values", values);
};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.address) {
    errors.address = "Required";
  }
  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  address: Yup.string().required("Address is required"),
});
const FormikFormTest = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });

  //   console.log("Formik Object",formik)
  console.log("Validation Schema", validationSchema);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.name}
        ></input>{" "}
        {formik.touched.name && formik.errors.name ? (
          <div className="errors">{formik.errors.name}</div>
        ) : null}
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.email}
        ></input>{" "}
        {formik.touched.email && formik.errors.email ? (
          <div className="errors">{formik.errors.email}</div>
        ) : null}
        <br />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.address}
        ></input>
        {formik.touched.address && formik.errors.address ? (
          <div className="errors">{formik.errors.address}</div>
        ) : null}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikFormTest;
