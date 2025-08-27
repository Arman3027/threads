import dynamic from "next/dynamic";

const MainPostsSection = dynamic<{
  title: string;
}>(
  () =>
    import("@/components/ui/MainPostsSection").then(
      (mod) => mod.MainPostsSection
    ),
  {
    loading: () => <div></div>,
  }
);
export default function Home() {
  return (
    <>
      <MainPostsSection title="Home" />
    </>
  );
}
