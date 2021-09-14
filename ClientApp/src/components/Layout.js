import React from "react";
import Header from "./Header";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import { LayoutStyles as getStyles } from "./styles";

export default function Layout(props) {
  const classes = getStyles();
  return (
    <>
      <Header />
      <Box className={classes.content}>{props.children}</Box>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};
