import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Cancel, FilterList } from "@material-ui/icons";
import { TableSearchStyles as getStyles } from "./styles";

export default function TableSearch(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const classes = getStyles();

  if (isExpanded) {
    return (
      <TextField
        autoFocus
        placeholder="Filter By Name"
        variant="outlined"
        size="small"
        value={props.search}
        onChange={(event) => props.setSearch(event.target.value)}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                color="primary"
                onClick={() => {
                  props.setSearch(null);
                  setIsExpanded(false);
                }}
              >
                <Cancel fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  }

  return (
    <Tooltip title="Filter By Name">
      <IconButton onClick={() => setIsExpanded(true)} color="primary">
        <FilterList />
      </IconButton>
    </Tooltip>
  );
}

TableSearch.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
