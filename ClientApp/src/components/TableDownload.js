import React from "react";
import PropTypes from "prop-types";
import { IconButton, Tooltip } from "@material-ui/core";
import { GetApp } from "@material-ui/icons";

export default function TableDownload(props) {
  return (
    <Tooltip title="Download CSV">
      <IconButton color="primary" onClick={props.downloadCSV}>
        <GetApp />
      </IconButton>
    </Tooltip>
  );
}

TableDownload.propTypes = {
  downloadCSV: PropTypes.func,
};
