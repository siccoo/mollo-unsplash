import { Route, Switch } from "react-router-dom";

import Home from "../../layout/home";
import Collections from "../../layout/collections";
import Search from "../../layout/search";
import NotFound from "../../layout/notFound";

const Routes = () => {
<Switch>
    <Route exact={true} path="/" component={Home} />
    <Route path="/collections" component={Collections} />
    <Route path="/search/:type/:query" component={Search} />

    <Route component={NotFound} />
</Switch>
}

export default Routes;