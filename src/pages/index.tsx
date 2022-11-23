import * as React from "react";
import type { HeadFC } from "gatsby";

import "../styles/base.scss";

import logo from "../assets/images/wizzy-logo.png";
import daniface from "../assets/images/daniface.png";
import yenface from "../assets/images/yenface.png";

const IndexPage: React.FC = () => (
  <main>
    <h1>
      welcome to the
      <img src={logo} className="c-logo" />
    </h1>

    <p>
      the witch zone is yen quach, dani quinn sexton, and sometimes their
      friends. we want to make cute, silly, and (most importantly) inclusive
      things for everyone to enjoy!
    </p>

    <img src={daniface} className="c-face c-face--dani" alt="" />
    <img src={yenface} className="c-face c-face--yen" alt="" />
  </main>
);

export default IndexPage;

export const Head: HeadFC = () => <title>the Witch 💖 Zone</title>;
