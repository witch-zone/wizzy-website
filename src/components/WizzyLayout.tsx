import React, { PropsWithChildren } from "react";

import * as classes from "./WizzyLayout.module.scss";

import Logo from "../assets/images/wizzy-logo.svg";

export default ({ children }: PropsWithChildren) => (
  <div className={classes.Wizzy}>
    <header className={classes.WizzyHeader}>
      <Logo
        className={classes.WizzyHeader__Logo}
        alt="welcome to the Witch💖Zone!"
      />
    </header>

    <main>{children}</main>
  </div>
);
