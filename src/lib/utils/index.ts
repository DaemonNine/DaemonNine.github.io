export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob("/src/lib/posts/*.svx");
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const e = (await resolver()) as any
      const metadata = e.metadata;
      console.log(e)
      /* remove the path part and the end part */
      const id = path.slice("/src/lib/posts/".length, ".svx".length * -1);
      const postPath = `${id}`;
      console.log(metadata)
      return {
        meta: metadata,
        path: postPath,
      };
    })
  );

  return allPosts;
};
