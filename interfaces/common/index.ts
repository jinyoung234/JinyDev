import React from "react";

// Layout 컴포넌트
export interface LayoutProps {
  chlidren: React.ReactNode;
}

// Seo 컴포넌트
export interface SeoProps {
  title: string;
}

// Blog 컴포넌트 -> BlogCategory 컴포넌트
export interface BlogCategoryProps {
  category: string;
}
