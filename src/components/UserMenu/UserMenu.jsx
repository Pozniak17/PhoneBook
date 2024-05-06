import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { Button, Container, UserText } from "./UserMenu.styled";
import { useDispatch, useSelector } from "react-redux";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <Container>
      <UserText>Welcome, {user.name}</UserText>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </Container>
  );
}
