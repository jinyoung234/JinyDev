import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { FooterListWrapper, FooterContainer, FooterWritterWrapper } from "./style";

/**
 * - 푸터로써, `저작권 및 아이콘들로 구성`하였습니다.
 * - 아이콘을 클릭하면 저의 `LinkedIn, Github, Instagram 주소로 이동`합니다.
 */
function Footer() {
  return (
    <FooterContainer>
      <FooterWritterWrapper>
        <p>© | 2022 JinyDev All rights reserved.</p>
      </FooterWritterWrapper>
      <FooterListWrapper>
        <Link href="https://www.linkedin.com/in/%EC%98%81-%EC%A7%84-80851a255/">
          <Icon icon="iconoir:linkedin" />
        </Link>
        <Link href="https://github.com/jinyoung234">
          <Icon icon="jam:github" />
        </Link>
        <Link href="https://www.instagram.com/wlsdudsson">
          <Icon icon="bi:instagram" />
        </Link>
      </FooterListWrapper>
    </FooterContainer>
  );
}

export default Footer;
