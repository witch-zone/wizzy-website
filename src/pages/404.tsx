import * as React from "react";
import { Link, HeadFC } from "gatsby";

import "../styles/base.scss";

export default () => (
  <main>
    <h1>it looks like we've gotten a little lost&hellip;</h1>
    <p>
      <Link to="/">let's go home</Link> !!
    </p>
  </main>
);

export const Head: HeadFC = () => <title>we couldn't find that page...</title>;
