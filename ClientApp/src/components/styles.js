import { makeStyles } from "@material-ui/styles";

export const HeaderStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
  },
  toolBar: {
    paddingLeft: theme.spacing(10),
  },
  logo: {
    width: "110px",
    height: "22px",
  },
}));

export const LayoutStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(5, 5, 2),
  },
}));

export const TableSearchStyles = makeStyles((theme) => ({
  cssLabel: {},
  cssFocused: { borderColor: theme.palette.primary.main },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: theme.palette.primary.main,
  },
}));

export const RushingTableStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
    letterSpacing: "2px",
    fontFamily: "'Inter' sans-serif",
    opacity: 0.65,
  },
  header: {
    padding: theme.spacing(1.5, 3),
  },
}));
