import React from "react";
import Blog from "../components/blogList";
import Seo from "../components/seo";

export default function dev() {
  return (
    <>
      <Seo title="Dev" />
      <Blog />;
    </>
  );
}
