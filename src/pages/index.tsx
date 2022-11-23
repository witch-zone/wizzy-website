import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1>welcome to the Witch 💖 Zone</h1>

      <p>
        the witch zone is yen quach, dani quinn sexton, and sometimes their
        friends. we want to try to make cute, silly, and (most importantly)
        inclusive things for everyone to enjoy!
      </p>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>the Witch 💖 Zone</title>;
