import { BlogCategoryProps } from "../../../interfaces/common";

export default function BlogCategory({ category }: BlogCategoryProps) {
  return <li>{category}</li>;
}
