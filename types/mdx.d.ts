declare module "*.mdx" {
  let metadata: {
    author: string;
  };
  export { metadata };

  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
