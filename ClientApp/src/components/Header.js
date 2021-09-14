import React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { ReactComponent as TheScoreLogo } from "public/Logo.svg";
import { HeaderStyles as getStyles } from "./styles";
import { useHistory } from "react-router";

export default function Header() {
  const classes = getStyles();
  const history = useHistory();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar className={classes.toolBar}>
        <Button href="https://www.thescore.com/">
          <TheScoreLogo className={classes.logo} />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
