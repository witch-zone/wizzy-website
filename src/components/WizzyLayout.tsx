import React, { PropsWithChildren } from "react";
import { Link } from "gatsby";

import * as classes from "./WizzyLayout.module.scss";

import Logo from "../assets/images/wizzy-logo.svg";

export default ({ children }: PropsWithChildren) => (
  <>
    <header className={classes.WizzyHeader}>
      <Link className={classes.WizzyHeader__Home} to="/">
        <Logo
          className={classes.WizzyHeader__Logo}
          alt="welcome to the Witch💖Zone!"
        />
      </Link>
    </header>

    <main>{children}</main>

    <footer className={classes.WizzyFooter}>
      with love and sparkles from dani and yen of the witch zone ♥
    </footer>
  </>
);
