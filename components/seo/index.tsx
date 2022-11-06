import Head from "next/head";
import React from "react";
import { SeoProps } from "../../interfaces/common";

function Seo({ title }: SeoProps) {
  return (
    <Head>
      <title>{title} | JinyDev</title>
    </Head>
  );
}

export default Seo;
