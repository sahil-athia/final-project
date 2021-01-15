// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from "./individual/Dashboard"
import Networking from "./individual/Networking"
import Connections from "./individual/Connections"
import Jobs from "./individual/Jobs"
import Notifications from "./individual/Notifications"

function Individual() {
  return (
    <Router>
      <h1> This Is the Individual Page</h1>
      <div className="individual">
      <nav>
        <ul>
          <li>
            <Link to="/individual/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/individual/networking">Networking</Link>
          </li>
          <li>
            <Link to="/individual/connections">Connections</Link>
          </li>
          <li>
            <Link to="/individual/jobs">Jobs</Link>
          </li>
          <li>
            <Link to="/individual/notifications">Notifications</Link>
          </li>
        </ul>
      </nav>

        <Switch>
          <Route path="/individual/dashboard">
            <Dashboard />
          </Route>

          <Route path="/individual/networking">
            <Networking />
          </Route>

          <Route path="/individual/connections">
            <Connections />
          </Route>

          <Route path="/individual/jobs">
            <Jobs />
          </Route>

          <Route path="/individual/notifications">
            <Notifications />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default Individual;
