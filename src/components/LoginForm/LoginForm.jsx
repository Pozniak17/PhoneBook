import { Formik } from "formik";
import { Button, FormWrapper, Input } from "./LoginForm.styled";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { useId } from "react";

export default function LoginForm() {
  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <FormWrapper>
        <label htmlFor={emailId}>Email</label>
        <Input type="email" name="email" id={emailId} />

        <label htmlFor={passwordId}>Password</label>
        <Input type="password" name="password" id={passwordId} />

        <Button type="submit">Log in</Button>
      </FormWrapper>
    </Formik>
  );
}
