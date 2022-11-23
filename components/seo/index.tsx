import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { SeoProps } from "../../interfaces/common";

function Seo({ title, description, keywords }: SeoProps) {
  const router = useRouter();
  return (
    <Head>
      <title>{title} | JinyDev</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}

      <meta property="og:type" content={router.asPath === "/" ? "blog" : "article"} />
      <meta property="og:url" content={`https://www.jinydev.site${router.asPath}`} />
      <meta property="og:title" content={`${title} | JinyDev`} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="JinyDev" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | JinyDev`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="JinyDev" />
      <meta name="twitter:url" content={`https://www.jinydev.site${router.asPath}`} />
    </Head>
  );
}

export default Seo;
