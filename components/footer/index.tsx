import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { FooterComponent } from "./style";

export default function Footer() {
  return (
    <FooterComponent>
      <p>© | 2022 JinyDev All rights reserved.</p>
      <ul>
        <Link href="https://www.linkedin.com/in/%EC%98%81-%EC%A7%84-80851a255/">
          <Icon icon="iconoir:linkedin" />
        </Link>
        <Link href="https://github.com/jinyoung234">
          <Icon icon="jam:github" />
        </Link>
        <Link href="https://www.instagram.com/wlsdudsson">
          <Icon icon="bi:instagram" />
        </Link>
      </ul>
    </FooterComponent>
  );
}
