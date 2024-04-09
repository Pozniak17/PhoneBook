import { Field, Formik } from "formik";
import { FormWrapper } from "./LoginForm.styled";

export default function LoginForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <FormWrapper>
        <label>Email </label>
        <Field type="email" name="email" />

        <label>Password</label>
        <Field type="password" name="password" />

        <button type="submit">Log in</button>
      </FormWrapper>
    </Formik>
  );
}
