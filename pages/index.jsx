import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container, Row, Col } from "react-bootstrap";
import { TextField, FormCard, FormButton } from "@/components/index";
import Swal from "sweetalert2";
export default function HomePage() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <Container fluid="md" className="mt-5">
      <Row className="justify-content-md-center">
        <Col lg={8}>
          <FormCard border="primary">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={validate}
              onSubmit={(values) => {
                return Swal.fire("Good job!", "Data Saved!", "success");
              }}
            >
              {(formik) => (
                <div>
                  <h1 className="text-center">Sign Up</h1>
                  <Form>
                    <TextField
                      label="First Name"
                      name="firstName"
                      type="text"
                    />
                    <TextField label="last Name" name="lastName" type="text" />
                    <TextField label="Email" name="email" type="email" />
                    <TextField
                      label="password"
                      name="password"
                      type="password"
                    />
                    <TextField
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                    />
                    <FormButton type="submit" variant="primary">
                      Register
                    </FormButton>
                    <FormButton type="reset" variant="secondary">
                      Reset
                    </FormButton>
                  </Form>
                </div>
              )}
            </Formik>
          </FormCard>
        </Col>
      </Row>
    </Container>
  );
}
