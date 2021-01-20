const Employees = ({employees, reload}) => {

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
      <div className='employees'>
        {currentEmployees}
      </div>
    </>
  )
};

export default Employees;