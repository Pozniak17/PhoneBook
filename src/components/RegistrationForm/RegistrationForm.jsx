import { useDispatch } from "react-redux";
import { Field, Formik } from "formik";
import { FormWrapper } from "./RegistrationForm.styled";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <FormWrapper>
        <label>Username</label>
        <Field type="text" name="name" />

        <label>Email</label>
        <Field type="email" name="email" />

        <label>Password</label>
        <Field type="password" name="password" />

        <button type="submit">Registration</button>
      </FormWrapper>
    </Formik>
  );
}
