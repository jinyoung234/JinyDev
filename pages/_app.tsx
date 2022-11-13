import { AppProps } from "next/app";
import Layout from "../components/layout";
import { RecoilRoot } from "recoil";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "../components/post/codeBlock";
import { useEffect, useState } from "react";
import type { MDXComponents } from "mdx/types";

const mdxComponentObj = {
  code: CodeBlock,
};

export default function App({ Component, pageProps }: AppProps) {
  const [mdxComponents, setMdxComponents] = useState<object | null>(null);
  useEffect(() => {
    setMdxComponents({ ...mdxComponentObj });
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
