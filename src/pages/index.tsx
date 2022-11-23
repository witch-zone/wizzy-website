import * as React from "react";
import type { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "../styles/base.scss";

const IndexPage: React.FC = () => (
  <main>
    <h1>
      welcome to the
      <br />
      Witch 💖 Zone!
    </h1>

    <p>
      the witch zone is yen quach, dani quinn sexton, and sometimes their
      friends. we want to make cute, silly, and (most importantly) inclusive
      things for everyone to enjoy!
    </p>

    <StaticImage
      placeholder="none"
      src="../assets/images/daniface.png"
      className="c-face c-face--dani"
      alt=""
    />
    <StaticImage
      placeholder="none"
      src="../assets/images/yenface.png"
      className="c-face c-face--yen"
      alt=""
    />
  </main>
);

export default IndexPage;

export const Head: HeadFC = () => <title>the Witch 💖 Zone</title>;
