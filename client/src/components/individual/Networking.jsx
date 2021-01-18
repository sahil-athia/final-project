import {Link} from 'react-router-dom'
import {useEffect, useState} from "react"
import axios from 'axios';
import NetworkBox from "./NetworkBox"
// import {Link} from 'react-router-dom'

export default function Networking(props) {
  const [data, setData] = useState({})
  useEffect(() => {
    axios
    .get(`/logged_in`)
    .then(res => axios.get(`/api/v1/user/show_networks/${res.data.user.id}`))
    .then((res) => setData(res.data))
    .catch((err) => {
      console.log(err);
    });
  }, [])
  
  const networks = () => data.map((network) => {
    return <NetworkBox
      key={network.id}
      id={network.id}
      name={network.name}
      email={network.email}
      summary={network.summary}
      industry={network.industry}
    />
  })
  return (
    <>
      {data.length && networks()}
    </>
  )
}