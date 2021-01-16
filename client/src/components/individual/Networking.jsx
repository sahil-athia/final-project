import {Link} from 'react-router-dom'
import {useEffect, useState} from "react"
import axios from 'axios';
import NetworkBox from "./NetworkBox"

export default function Networking(props) {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get(`/api/v1/user`)
    .then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err);
    });
  }, [])
  console.log(data)
  const networks = () => data.map((network) => {
    return <NetworkBox
      key={network.id}
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