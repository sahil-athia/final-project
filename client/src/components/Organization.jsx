// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

import Dashboard from "./organization/Dashboard"
import Employees from "./organization/Employees"
import Jobs from "./organization/Jobs"
import Notifications from "./organization/Notifications"

const Organization = ({state}) => {
  // console.log(props);
  // const [state, setState] = useState();

  // useEffect(() => {

  //   Promise.all([
  //     axios.get('/api/v1/organization'),
  //     axios.get('/api/v1/user'),
  //     axios.get('/api/v1/job'),
  //     axios.get('/api/v1/job_reference')
  //   ]).then((all) => {
  //     console.log(all);
  //     setState(prev => ({...prev, organizations: all[0].data, users: all[1].data, jobs: all[2].data, job_references: all[3].data }));
  //   }).catch((err) => {
  //     console.log(err);
  //   });

  // }, []);
  const organizations = state.organizations.map((organization) => (
    <Dashboard
    id={organization.id}
    name={organization.name}
    email={organization.email}
    introduction={organization.introduction}
    industry={organization.industry}
    website={organization.website}
    location={organization.location}
    image_url={organization.image_url}
    />
  ));

  console.log(organizations);

  return (
    <Router>
      <h1> This Is the Organization Page </h1>

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
          {/* render={(organizations) => <Dashboard {...organizations}/>} */}
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
