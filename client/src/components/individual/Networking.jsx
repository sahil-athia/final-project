import {Link} from 'react-router-dom'
import {useEffect, useState} from "react"
import axios from 'axios';
import NetworkBox from "./NetworkBox"
import SearchBar from './small_components/SearchBar'
// import {Link} from 'react-router-dom'

export default function Networking(props) {
  const [input, setInput] = useState('');
  const [data, setData] = useState({})
  const [dataFilterd, setDataFilterd] = useState({})
  const [reload, setReload] = useState(false)

  useEffect(() => {
    axios
    .get(`/logged_in`)
    .then(res => axios.get(`/api/v1/user/show_networks/${res.data.user.id}`))
    .then((res) => {
      setData(res.data)
      setDataFilterd(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
  }, [reload])

  const updateInput = async (input) => {
    const filtered = data.filter(network => {
     return network.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setDataFilterd(filtered);
 }
  

  const networks = () => dataFilterd.map((network) => {
    return <NetworkBox
      key={network.id}
      user_id={props.user_id}
      id={network.id}
      name={network.name}
      email={network.email}
      summary={network.summary}
      industry={network.industry}
      reload={setReload}
    />
  })

  return (
    <>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      {dataFilterd.length > 0 && networks()}
      {dataFilterd.length === 0 && <p>no results matched your search</p>}
    </>
  )
}