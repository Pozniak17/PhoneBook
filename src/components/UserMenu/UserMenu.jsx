import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { Container } from "./UserMenu.styled";
import { useDispatch, useSelector } from "react-redux";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <Container>
      <p>
        Welcome, <span>{user.name}</span>
      </p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </Container>
  );
}
