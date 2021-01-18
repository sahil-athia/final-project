import {Link} from 'react-router-dom'
import {useEffect, useState} from "react"
import axios from 'axios';
import ConnectionBox from './ConnectionBox'

export default function Connections(props) {
  const [data, setData] = useState({})
  
  useEffect(() => {
    axios
    .get(`/logged_in`)
    .then(res => axios.get(`/api/v1/connection/${res.data.user.id}`))
    .then((res) => setData(res.data))
    .catch((err) => {
      console.log(err);
    });
  }, [])


  const connections = () => data.map((connection) => {
    console.log(connection)
    return <ConnectionBox
      key={connection[0].id}
      name={connection[0].name}
      email={connection[0].email}
      summary={connection[0].summary}
      industry={connection[0].industry}
    />
  })
  return (
    <>
      {data.length && connections()}
      {0 === data.length && <p>you currently have no connections</p>}
    </>
  )
}