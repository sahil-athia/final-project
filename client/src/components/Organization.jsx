import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

import OrganizationHeader from "./OrganizationHeader"
import Dashboard from "./organization/Dashboard"
import Employees from "./organization/Employees"
import Jobs from "./organization/Jobs"
import Notifications from "./organization/Notifications"

const Organization = ({organization_id}) => {

  const [org_profile, setOrg_profile] = useState({});
  const [org_jobs, setOrg_jobs] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {

    Promise.all([
      axios.get(`/api/v1/organization/${organization_id}`),
      axios.get(`/api/v1/job/by_organization_id/${organization_id}`)
    ]).then((all) => {
      setOrg_profile(all[0].data);
      setOrg_jobs(all[1].data)
    }).catch((err) => {
      console.log(err);
    });;

  }, [reload])

  return (
    <Router>
      <div className="organization">
        <OrganizationHeader />

        <Switch>
          <Route path="/organization/dashboard">
            <Dashboard 
            profile={org_profile}
            reload={setReload}
            />
          </Route>

          <Route path="/organization/employees">
            <Employees />
          </Route>

          <Route path="/organization/jobs">
            <Jobs 
              organization_id={organization_id}
              current_jobs={org_jobs}
              reload={setReload} 
            />
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
