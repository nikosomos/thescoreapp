import React from "react";
import { Switch, Route } from "react-router";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Layout from "components/Layout";
import RushingPage from "pages/RushingPage";
import { theme } from "theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Switch>
          <Route path="*">
            <RushingPage />
          </Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}
