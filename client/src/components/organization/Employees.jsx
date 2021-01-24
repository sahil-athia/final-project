import { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeBox from './employee_components/EmployeeBox';
import CurrentEmployee from './employee_components/CurrentEmployee';
import SearchBar from './employee_components/SearchBar';
import '../../sass/UserBox.scss';

const Employees = ({organization_id, employees, reload}) => {
  const [input, setInput] = useState('');
  const [data, setData] = useState({})
  const [dataFilterd, setDataFilterd] = useState({})
  const [localReload, setReload] = useState(false)
  const [search, setSearch] = useState("By Name")

  useEffect(() => {
    axios.get(`/logged_in`)
    .then(() => {
      axios.get(`http://localhost:8080/api/v1/user/search_new/${organization_id}`)
      .then((res) => {
        setData(res.data)
        setDataFilterd(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }, [localReload]);

  const updateInput = (input) => {
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
      photo_url={employee.photo_url}
      reload={reload}
      localReload={setReload}
    />
  });

  const currentEmployees = employees.map((employee) => (
    <CurrentEmployee 
      key={employee.id}
      name={employee.name}
      summary={employee.summary}
      industry={employee.industry}
      skills={employee.skills}
      education={employee.education}
      experience={employee.experience}
      email={employee.email}
      location={employee.location}
      contact={employee.contact}
      resume_url={employee.resume_url}
      id={employee.id}
      organization_id={organization_id}
      reload={reload}
      localReload={setReload}
    />

  ));

  return (
    <>
    <div>
      <SearchBar 
        input={input} 
        onChange={updateInput}
        setSearch={setSearch}
      />
      <br/>
      {dataFilterd.length > 0 && newEmployees()}
      {dataFilterd.length === 0 && <>
      <p>No results matched your search</p>
      <hr/>
      </>}
    <div>
      <h2>Current Employees</h2>
      <div className='employees'>
        {currentEmployees.length > 0 && currentEmployees}
      </div>
    </div>
    </div>
    </>
  )
};

export default Employees;