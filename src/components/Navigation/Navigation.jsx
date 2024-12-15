// import { Suspense } from "react";
// import { Outlet } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Logo, List, Link } from "./Navigation.styled";
import { useSelector } from "react-redux";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Logo>
        <span role="img" aria-label="computer icon">
          ☑️
        </span>
        PhoneBook
      </Logo>

      <nav>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          )}
        </List>
      </nav>

      {/* <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main> */}
    </>
  );
}
