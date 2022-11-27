import Link from "next/link";
import NavList from "./NavList";
import { NavContainer, NavListContainer, NavLogoWrapper } from "./style";

export default function NavBar() {
  return (
    <NavContainer>
      <Link href="/">
        <NavLogoWrapper>JinyDev</NavLogoWrapper>
      </Link>
      <NavListContainer>
        <NavList />
      </NavListContainer>
    </NavContainer>
  );
}
