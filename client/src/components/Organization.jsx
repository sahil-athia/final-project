// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from "./organization/Dashboard"
import Employees from "./organization/Employees"
import Jobs from "./organization/Jobs"
import Notifications from "./organization/Notifications"

function Organization() {
  return (
    <Router>
      <h1> This Is the Organization Page</h1>
      <div className="organization">
      <nav>
        <ul>
          <li>
            <Link to="/organization/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/organization/employees">Employees</Link>
          </li>
          <li>
            <Link to="/organization/jobs">Jobs</Link>
          </li>
          <li>
            <Link to="/organization/notifications">Notifications</Link>
          </li>
        </ul>
      </nav>

        <Switch>
          <Route path="/organization/dashboard">
            <Dashboard />
          </Route>

          <Route path="/organization/employees">
            <Employees />
          </Route>

          <Route path="/organization/jobs">
            <Jobs />
          </Route>

          <Route path="/organization/notifications">
            <Notifications />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default Organization;
