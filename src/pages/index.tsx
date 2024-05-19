import * as React from "react";
import type { HeadFC } from "gatsby";
import classnames from "classnames";

import "../styles/base.scss";
import * as classes from "./index.module.scss";

import Logo from "../assets/images/wizzy-logo.svg";
import daniface from "../assets/images/daniface.png";
import yenface from "../assets/images/yenface.png";

export default () => (
  <main>
    <section className={classes.WizzyWelcome}>
      <div className={classes.WizzyWelcome__Message}>
        <h1>
          welcome to the
          <Logo className={classes.WizzyWelcome__Logo} alt="Witch💖Zone" />
        </h1>

        <p>
          the witch zone is yen quach, dani valentine, and sometimes their
          friends. we want to make cute, silly, and inclusive things for
          everyone to enjoy!
        </p>
      </div>

      <img
        src={daniface}
        className={classnames(classes.Witch, classes.Witch__Dani)}
        alt=""
      />
      <img
        src={yenface}
        className={classnames(classes.Witch, classes.Witch__Yen)}
        alt=""
      />
    </section>
  </main>
);

export const Head: HeadFC = () => <title>welcome to the Witch💖Zone!</title>;
