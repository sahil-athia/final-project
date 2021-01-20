import { useEffect, useState } from 'react-scripts';
import axios from 'axios';
import EmployeeBox from './search_components/EmployeeBox';
import SearchBar from './search_components/SearchBar';

const Employees = ({organization_id, employees, reload}) => {
  const [input, setInput] = useState('');
  const [data, setData] = useState({})
  const [dataFilterd, setDataFilterd] = useState({})
  const [reload, setReload] = useState(false)
  const [search, setSearch] = useState("By Name")

  useEffect(() => {
    axios
    .get(`/logged_in`)
    .then(res => {
      console.log(res);
      axios.get(`/api/v1/user/by_organization_id/${organization_id}`)
    })
    .then((res) => {
      console.log(res);
      setData(res.data)
      // setDataFilterd(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
  }, [reload]);

  const updateInput = async (input) => {
    if (search === "By Name") {
      const filtered = data.filter(employee => {
       return employee.name.toLowerCase().includes(input.toLowerCase())
      })
      setInput(input);
      setDataFilterd(filtered);
    } else {
      const filtered = data.filter(employee => {
        return employee.email.toLowerCase().includes(input.toLowerCase())
       })
       setInput(input);
       setDataFilterd(filtered);
    }
  };

 const newEmployees = () => dataFilterd.map((employee) => {
    return <EmployeeBox
      key={employee.id}
      organization_id={organization_id}
      id={employee.id}
      name={employee.name}
      email={employee.email}
      summary={employee.summary}
      industry={employee.industry}
      reload={setReload}
    />
  });

  const currentEmployees = employees.map((employee) => (
    <div key={employee.id}>
      <h3>Name: {employee.name}</h3>
      <p>Summary: {employee.summary}</p>
      <p>Industry: {employee.industry}</p>
      <p>Skills: {employee.skills}</p>
      <p>Education: {employee.education}</p>
      <p>Experience: {employee.experience}</p>
      <p>Email: {employee.email}</p>
      <p>Location: {employee.location}</p>
      <p>Contact: {employee.contact}</p>
      <img src={employee.resume_url} className="user_resume"></img>
      <p>Id: {employee.id}</p>
      <p>Organization_id: {employee.organization_id}</p>
      <p>Verified: {employee.verified}</p>
      <hr/>
    </div>
  ));

  return (
    <>
    <div>
      <SearchBar 
        input={input} 
        onChange={updateInput}
        setSearch={setSearch}
      />
      {dataFilterd.length > 0 && newEmployees()}
      {dataFilterd.length === 0 && <p>No results matched your search</p>}
    </div>
      <div className='employees'>
        {currentEmployees.length > 0 && currentEmployees}
      </div>
    </>
  )
};

export default Employees;