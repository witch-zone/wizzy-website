import React, { PropsWithChildren } from "react";

import * as classes from "./WizzyLayout.module.scss";

import Logo from "../assets/images/wizzy-logo.svg";

export default ({ children }: PropsWithChildren) => (
  <div className={classes.Wizzy}>
    <header className={classes.WizzyHeader}>
      <a className={classes.WizzyHeader__Home} href="/">
        <Logo
          className={classes.WizzyHeader__Logo}
          alt="welcome to the Witch💖Zone!"
        />
      </a>
    </header>

    <main>{children}</main>

    <footer className={classes.WizzyFooter}>
      with love and sparkles from dani and yen of the witch zone ♥
    </footer>
  </div>
);
