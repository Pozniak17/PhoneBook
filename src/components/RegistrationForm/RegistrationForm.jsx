import { Field, Formik } from "formik";
import { FormWrapper } from "./RegistrationForm.styled";

export default function RegistrationForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <FormWrapper>
        <label>Username</label>
        <Field type="email" name="username" />

        <label>Email</label>
        <Field type="email" name="email" />

        <label>Password</label>
        <Field type="password" name="password" />

        <button type="submit">Registration</button>
      </FormWrapper>
    </Formik>
  );
}
