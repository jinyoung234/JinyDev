import { useRouter } from "next/router";

export default function useMovePage(slug: string) {
  const router = useRouter();
  const path = router.asPath.split("/")[1];
  const handleMovePage = () => {
    router.push(`/post/${path}/${slug}`);
  };
  return { handleMovePage };
}
