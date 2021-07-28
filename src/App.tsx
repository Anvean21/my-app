import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import ComparatorSortingGrid from "./Components/basicsort";
import Flight from "./Pages/Flight";
import FlightsList from "./Pages/FlightsList";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);
const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Router>
      <AppBar color="default" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/flights">Flights</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/sorting">Sorting</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/flights">
          <FlightsList />
        </Route>
        <Route
          exact
          path="/flight/:id"
          render={(props) => (
            <Flight id={Number.parseInt(props.match.params.id)} />
          )}
        />
        <Route path="/sorting">
          <ComparatorSortingGrid />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
