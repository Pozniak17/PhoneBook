import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { Button, FormWrapper, Input } from "./RegistrationForm.styled";
import { register } from "../../redux/auth/operations";
import { useId } from "react";

export default function RegistrationForm() {
  const usernameId = useId();
  const emailId = useId();
  const passwordId = useId();

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
        <label htmlFor={usernameId}>Username</label>
        <Input type="text" name="name" id={usernameId} />

        <label htmlFor={emailId}>Email</label>
        <Input type="email" name="email" id={emailId} />

        <label htmlFor={passwordId}>Password</label>
        <Input type="password" name="password" id={passwordId} />

        <Button type="submit">Registration</Button>
      </FormWrapper>
    </Formik>
  );
}
