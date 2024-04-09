// import { Suspense } from "react";
// import { Outlet } from "react-router-dom";
import { Logo, List, Link } from "./Navigation.styled";

export default function Navigation() {
  return (
    <>
      <Logo>
        <span role="img" aria-label="computer icon">
          ☑️
        </span>
        Contacts Store
      </Logo>

      <nav>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="contacts">Contacts</Link>
          </li>
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
