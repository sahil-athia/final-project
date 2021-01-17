// import './App.css';
import {useEffect, useState} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';

import Networking from "./individual/Networking"
import Connections from "./individual/Connections"
import Jobs from "./individual/Jobs"
import Notifications from "./individual/Notifications"
import IndividualHeader from "./IndividualHeader"
import Profile from "./individual/Profile"

function Individual(props) {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get(`/api/v1/user/${props.user_id}`)
    .then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  return (
    <Router>
      <IndividualHeader onClick={props.onClick}></IndividualHeader>
      <div className="individual">
        <Switch>

          <Route exact path="/individual">
            <Profile
            name={data.name}
            email={data.email}
            industry={data.industry}
            resume_url={data.resume_url}
            >
              
            </Profile>
          </Route>

          <Route path="/individual/networking">
            <Networking />
          </Route>

          <Route path="/individual/connections">
            <Connections 
              user_id={data.id}
            />
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
