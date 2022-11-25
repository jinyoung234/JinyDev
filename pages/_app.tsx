import { AppProps } from "next/app";
import Layout from "../components/layout";
import { RecoilRoot } from "recoil";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "../components/post/codeBlock";
import { useEffect, useState } from "react";
import type { MDXComponents } from "mdx/types";
import changeRouteGtag from "../utils/changeRouteGtag";
import router from "next/router";

const mdxComponentObj = {
  code: CodeBlock,
};

export default function App({ Component, pageProps }: AppProps) {
  const [mdxComponents, setMdxComponents] = useState<object | null>(null);

  const handleRouteChange = (url: any) => {
    changeRouteGtag(url);
  };

  useEffect(() => {
    setMdxComponents({ ...mdxComponentObj });
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <RecoilRoot>
      <MDXProvider components={mdxComponents as MDXComponents}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </RecoilRoot>
  );
}
