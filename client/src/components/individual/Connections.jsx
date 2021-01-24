import {useEffect, useState} from "react"
import axios from 'axios';
import ConnectionBox from './ConnectionBox'
import SearchBar from './small_components/SearchBar'

export default function Connections(props) {
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
    .then(res => axios.get(`/api/v1/connection/${res.data.user.id}`))
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
      const filtered = data.filter(connection => {
       return connection[0].name.toLowerCase().includes(input.toLowerCase())
      })
      setInput(input);
      setDataFilterd(filtered);
    } else {
      const filtered = data.filter(connection => {
        return connection[0].industry.toLowerCase().includes(input.toLowerCase())
       })
       setInput(input);
       setDataFilterd(filtered);
    }
 }

  const connections = () => dataFilterd.map((connection) => {
    return <ConnectionBox
      key={connection[0].id}
      id={connection[0].id}
      user_id={props.user_id}
      name={connection[0].name}
      email={connection[0].email}
      summary={connection[0].summary}
      industry={connection[0].industry}
      reload={setReload}
    />
  })
  return (
    <>
      <h1 style={headerStyle}>Connections</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
       setSearch={setSearch}
      />
      {dataFilterd.length > 0 && connections()}
      {0 === dataFilterd.length && <p>No Connections Found</p>}
    </>
  )
}