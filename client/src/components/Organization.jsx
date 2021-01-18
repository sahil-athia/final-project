// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import OrganizationHeader from "./OrganizationHeader"
import Dashboard from "./organization/Dashboard"
import Employees from "./organization/Employees"
import Jobs from "./organization/Jobs"
import Notifications from "./organization/Notifications"

const Organization = ({state}) => {
  const { organizations, users, jobs, job_references} = state;

  return (
    <Router>
      <div className="organization">
        <OrganizationHeader />

        <Switch>
          <Route path="/organization/dashboard">
            <Dashboard profiles={organizations}/>
          </Route>

          <Route path="/organization/employees">
            <Employees employees={users}/>
          </Route>

          <Route path="/organization/jobs">
            <Jobs jobs={jobs} job_references={job_references}/>
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
