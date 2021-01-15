import {Link} from 'react-router-dom'
import axios from "axios"
import { useEffect, useState } from "react"

export default function Jobs(props) {
  const [state, setState] = useState({jobs: {}})

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8080/api/v1/job"),
    ])
    .then(all => {
      setState(prev => ({...prev, jobs: all[0].data.data}))
    })
    .catch(e => console.log(e));
  }, [])
  console.log(state)
  return (
    <>
      <h1>This is the Jobs component</h1>
    </>
  )
}