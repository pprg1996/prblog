import TestMdx, { metadata } from "posts/test.mdx";

export default function Home() {
  return (
    <>
      <h1>{metadata.author}</h1>
      <TestMdx />
    </>
  );
}
