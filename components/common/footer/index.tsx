import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { FooterWrapper, FooterListWrapper } from "./style";

export default function Footer() {
  return (
    <FooterWrapper>
      <p>© | 2022 JinyDev All rights reserved.</p>
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
    </FooterWrapper>
  );
}
