import Link from "next/link";
import NavList from "./NavList";
import { NavWrapper } from "./style";

export default function NavBar() {
  return (
    <NavWrapper>
      <Link href="/">
        <div>JinyDev</div>
      </Link>
      <NavList />
    </NavWrapper>
  );
}
