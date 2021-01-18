import {Link} from 'react-router-dom'
import {useEffect, useState} from "react"
import axios from 'axios';
import ConnectionBox from './ConnectionBox'
import SearchBar from './small_components/SearchBar'

export default function Connections(props) {
  const [input, setInput] = useState('');
  const [data, setData] = useState({})
  const [dataFilterd, setDataFilterd] = useState({})
  
  useEffect(() => {
    axios
    .get(`/logged_in`)
    .then(res => axios.get(`/api/v1/connection/${res.data.user.id}`))
    .then((res) => {
      setData(res.data)
      setDataFilterd(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

  const updateInput = async (input) => {
    const filtered = data.filter(connection => {
     return connection[0].name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setDataFilterd(filtered);
 }

  const connections = () => dataFilterd.map((connection) => {
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
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      {dataFilterd.length > 0 && connections()}
      {0 === dataFilterd.length && <p>No Connections Found</p>}
    </>
  )
}