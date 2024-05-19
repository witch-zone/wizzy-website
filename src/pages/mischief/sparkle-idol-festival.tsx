import * as React from "react";
import type { HeadFC } from "gatsby";

import WizzyLayout from "../../components/WizzyLayout";

import "../../styles/base.scss";

export default () => (
  <WizzyLayout>
    <article>
      <header>
        <h2>sparkle idol festival &hearts;</h2>
      </header>
    </article>
  </WizzyLayout>
);

export const Head: HeadFC = () => (
  <title>the Sparkle Idol Festival ~ a mischief from the Witch💖Zone</title>
);
