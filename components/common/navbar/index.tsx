import Link from "next/link";
import NavList from "./NavList";
import { NavContainer, NavListContainer, NavLogoWrapper } from "./style";

/**
 * - 네비게이션 바로써, `로고, 아이콘, 텍스트`로 나타내었습니다.
 * - 로고를 클릭하면 `Main Page로 이동`합니다.
 * - 아이콘을 클릭하면 `다른 아이콘으로 변경`되며 `lightMode, colorMode`에 맞게 `전체 theme color가 수정` 됩니다.
 * - 사용자 UX를 고려하여 아이콘을 `hover` 했을 때, `간단한 애니메이션이 동작`하도록 하였습니다.
 * - 텍스트들은 각각의 `url`을 나타내며, `About은 main, Dev는 dev, Blog는 blog` `page로 이동`하도록 하였습니다.
 */
function NavBar() {
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

export default NavBar;
