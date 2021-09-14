import { Tooltip, Typography } from "@material-ui/core";
import React from "react";

const customHeadLabelRender = (meta) => {
  const { label, toolTip, options } = RushingTableColumns.find(
    (x) => x.name === meta.name
  );
  if (label === toolTip || options.sort) return <Typography>{label}</Typography>;
  return (
    <Tooltip title={toolTip} placement="bottom-start">
      <Typography>{label}</Typography>
    </Tooltip>
  );
};

export const RushingTableColumns = [
  {
    name: "player",
    label: "Player",
    toolTip: "Player",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
  {
    name: "team",
    label: "Team",
    toolTip: "Team",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
  {
    name: "position",
    label: "Pos",
    toolTip: "Position",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
  {
    name: "attempts",
    label: "Att",
    toolTip: "Attempts",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
  {
    name: "attemptsPerGame",
    label: "Att/G",
    toolTip: "Attempts Per Game",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
  {
    name: "yards",
    label: "Yds",
    toolTip: "Yards",
    options: {
      sort: true,
      customHeadLabelRender,
    },
  },
  {
    name: "yardsPerAttempt",
    label: "Yds/Att",
    toolTip: "Yards Per Attempt",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
  {
    name: "yardsPerGame",
    label: "Yds/G",
    toolTip: "Yards Per Game",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
  {
    name: "touchdowns",
    label: "TD",
    toolTip: "Touchdowns",
    options: {
      sort: true,
      customHeadLabelRender,
    },
  },
  {
    name: "longest",
    label: "Lng",
    toolTip: "Longest",
    options: {
      sort: true,
      customHeadLabelRender,
    },
  },
  {
    name: "firstDowns",
    label: "1st",
    toolTip: "First Downs",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
  {
    name: "firstDownPercent",
    label: "1st%",
    toolTip: "First Down Percent",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
  {
    name: "twentyPlusYardCount",
    label: "20+",
    toolTip: "Twenty Plus Yard Count",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
  {
    name: "fortyPlusYardCount",
    label: "40+",
    toolTip: "Forty Plus Yard Count",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
  {
    name: "fumbles",
    label: "Fum",
    toolTip: "Fumbles",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
];
