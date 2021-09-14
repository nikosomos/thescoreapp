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
    toolTip: "Rushing Attempts",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
  {
    name: "attemptsPerGame",
    label: "Att/G",
    toolTip: "Rushing Attempts Per Game Average",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
  {
    name: "yards",
    label: "Yds",
    toolTip: "Total Rushing Yards",
    options: {
      sort: true,
      customHeadLabelRender,
    },
  },
  {
    name: "yardsPerAttempt",
    label: "Yds/Att",
    toolTip: "Rushing Average Yards Per Attempt",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
  {
    name: "yardsPerGame",
    label: "Yds/G",
    toolTip: "Rushing Yards Per Game",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
  {
    name: "touchdowns",
    label: "TD",
    toolTip: "Total Rushing Touchdowns",
    options: {
      sort: true,
      customHeadLabelRender,
    },
  },
  {
    name: "longest",
    label: "Lng",
    toolTip: "Longest Rush",
    options: {
      sort: true,
      customHeadLabelRender,
    },
  },
  {
    name: "firstDowns",
    label: "1st",
    toolTip: "Rushing First Downs",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
  {
    name: "firstDownPercent",
    label: "1st%",
    toolTip: "Rushing First Down Percentage",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
  {
    name: "twentyPlusYardCount",
    label: "20+",
    toolTip: "Rushing 20+ Yards Each",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
  {
    name: "fortyPlusYardCount",
    label: "40+",
    toolTip: "Rushing 40+ Yards Each",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
  {
    name: "fumbles",
    label: "Fum",
    toolTip: "Rushing Fumbles",
    options: {
      sort: false,
      customHeadLabelRender,
    },
  },
];
