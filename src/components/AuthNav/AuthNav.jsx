import { Link, List, Item } from "./AuthNav.styled";

export default function AuthNav() {
  return (
    <div>
      <List>
        <Item>
          <Link to="/register">Register</Link>
        </Item>
        <Item>
          <Link to="/login">Log In</Link>
        </Item>
      </List>
    </div>
  );
}
