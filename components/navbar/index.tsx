import Link from "next/link";
import NavList from "./NavList";
import { Nav } from "./style";

export default function NavBar() {
  return (
    <Nav>
      <Link href="/">
        <div>JinyDev</div>
      </Link>
      <NavList />
    </Nav>
  );
}
