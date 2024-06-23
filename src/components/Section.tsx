import React, { PropsWithChildren } from "react";

import * as classes from "./Section.module.scss";

export default ({ children }: PropsWithChildren) => (
  <div className={classes.Section}>{children}</div>
);
