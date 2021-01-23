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
  const [search, setSearch] = useState("By Name")


  const headerStyle = {
    color: "rgb(150, 150, 150)",
    fontSize: "250%",
    fontFamily: "Garamond, serif",
    fontWeight: "100"
  }

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
    if (search === "By Name") {
      const filtered = data.filter(network => {
       return network.name.toLowerCase().includes(input.toLowerCase())
      })
      setInput(input);
      setDataFilterd(filtered);

    } else if (search === "By Industry") {
      const filtered = data.filter(network => {
        console.log(network, input)
        return network.industry.toLowerCase().includes(input.toLowerCase())
       })
       setInput(input);
       setDataFilterd(filtered);
    }
 }
  

  const networks = () => dataFilterd.map((network) => {
    return <NetworkBox
      key={network.id}
      user_id={props.user_id}
      id={network.id}
      name={network.name}
      email={network.email}
      summary={network.summary}
      photo={network.photo_url}
      industry={network.industry}
      reload={setReload}
    />
  })

  return (
    <>
      <h1 style={headerStyle}>Networking</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
       setSearch={setSearch}
      />
      {dataFilterd.length > 0 && networks()}
      {dataFilterd.length === 0 && <p>no results matched your search</p>}
    </>
  )
}