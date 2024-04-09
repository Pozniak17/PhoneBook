import AppBar from "../AppBar/AppBar";
import { Container } from "./Layout.styled";

export default function Layout({ children }) {
  return (
    <Container>
      <AppBar />
      {children}
    </Container>
  );
}
