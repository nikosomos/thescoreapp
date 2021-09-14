import { createTheme } from "@material-ui/core/styles";

const BACKGROUND_COLOR_DARK = "#000";
const BACKGROUND_COLOR_MAIN = "#1e1f21";
const BACKGROUND_COLOR_LIGHT = "#393c42";
const SYMBOL_COLOR = "#f9f9f9";

export const theme = createTheme({
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: BACKGROUND_COLOR_LIGHT,
      },
    },
    MUIDataTableHeadCell: {
      fixedHeader: {
        backgroundColor: BACKGROUND_COLOR_LIGHT,
      },
    },
    MUIDataTableFooter: {
      root: {
        backgroundColor: BACKGROUND_COLOR_MAIN,
        border: "none",
      },
    },
    MuiSelect: {
      icon: {
        color: SYMBOL_COLOR,
      },
    },
    MuiTableCell: {
      body: {
        backgroundColor: BACKGROUND_COLOR_LIGHT,
      },
      footer: {
        borderBottom: "none",
      },
    },
  },
  palette: {
    primary: {
      main: SYMBOL_COLOR,
    },
    text: {
      primary: SYMBOL_COLOR,
    },
    background: {
      paper: BACKGROUND_COLOR_MAIN,
      default: BACKGROUND_COLOR_DARK,
    },
  },
  mixins: {
    toolbar: {
      minHeight: "60px",
    },
  },
});
