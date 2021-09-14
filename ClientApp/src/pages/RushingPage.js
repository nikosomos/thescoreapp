import React from "react";
import { Paper } from "@material-ui/core";
import { RushingPageStyles as getStyles } from "./styles";
import RushingTable from "components/RushingTable";

export default function RushingPage() {
  const classes = getStyles();

  return (
    <Paper className={classes.contentPaper}>
      <RushingTable />
    </Paper>
  );
}
