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

  const [data, setData] = useState({})
  const [reload, setReload] = useState(false)

  useEffect(() => {
    axios.get(`/api/v1/organization/${organization_id}`)
    .then((res) => {
      setData(res.data)
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [reload])

  return (
    <Router>
      <div className="organization">
        <OrganizationHeader />

        <Switch>
          <Route path="/organization/dashboard">
            <Dashboard 
            profile={data}
            reload={setReload}
            />
          </Route>

          {/* <Route path="/organization/employees">
            <Employees employees={users}/>
          </Route>

          <Route path="/organization/jobs">
            <Jobs jobs={jobs} job_references={job_references}/>
          </Route> */}

          <Route path="/organization/notifications">
            <Notifications />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default Organization;
