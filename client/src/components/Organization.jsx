import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

import OrganizationHeader from "./OrganizationHeader";
import Dashboard from "./organization/Dashboard";
import Employees from "./organization/Employees";
import Jobs from "./organization/Jobs";
import UserPage from "./organization/UserPage";

const Organization = ({organization_id, onClick}) => {
  const [state, setState] = useState({ profile: {}, jobs: [], employees: []});
  const [reload, setReload] = useState(false);

  useEffect(() => {

    Promise.all([
      axios.get(`/api/v1/organization/${organization_id}`),
      axios.get(`/api/v1/job/by_organization_id/${organization_id}`),
      axios.get(`http://localhost:8080/api/v1/user/by_organization_id/${organization_id}`)
    ]).then((all) => {
      setState({ profile: all[0].data, jobs: all[1].data, employees: all[2].data })
    }).catch((err) => {
      console.log(err);
    });;

  }, [reload])

  return (
    <Router>
      <div className="organization">
        <OrganizationHeader 
          onClick={onClick}
        />

        <Switch>
          <Route path="/organization/dashboard">
            <Dashboard 
            id={organization_id}
            profile={state.profile}
            reload={setReload}
            />
          </Route>

          <Route path="/organization/employees">
            <Employees 
            organization_id={organization_id}
            employees={state.employees}
            reload={setReload}
            />

          </Route>

          <Route path="/organization/jobs">
            <Jobs 
              organization_id={organization_id}
              current_jobs={state.jobs}
              reload={setReload} 
            />
          </Route>

          <Route exact path="/organization/user_page">
            <UserPage />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default Organization;
