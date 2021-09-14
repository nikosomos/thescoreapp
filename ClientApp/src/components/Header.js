import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { ReactComponent as TheScoreLogo } from "public/Logo.svg";
import { HeaderStyles as getStyles } from "./styles";

export default function Header() {
  const classes = getStyles();
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar className={classes.toolBar}>
        <TheScoreLogo className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
}
