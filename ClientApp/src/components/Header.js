import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { ReactComponent as TheScoreLogo } from "public/Logo.svg";
import { HeaderStyles as getStyles } from "./styles";
import { useHistory } from "react-router";

export default function Header() {
  const classes = getStyles();
  const history = useHistory();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar className={classes.toolBar}>
        <TheScoreLogo
          className={classes.logo}
          onClick={() => history.push("https://www.thescore.com/")}
        />
      </Toolbar>
    </AppBar>
  );
}
