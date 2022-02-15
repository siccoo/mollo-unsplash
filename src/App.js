import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/collections" component={Collections} />
          <Route path="/search/:type/:query" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>

  );
}

export default App;
