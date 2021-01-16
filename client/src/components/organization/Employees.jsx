const Employees = ({employees}) => {

  const organizationEmployees = employees.map((employee) => (
    <div>
      <div>id: </div>
      <div>{employee.id}</div>
      <div>name: </div>
      <div>{employee.name}</div>
      <div>email: </div>
      <div>{employee.email}</div>
      <div>summary: </div>
      <div>{employee.summary}</div>
      <div>industry: </div>
      <div>{employee.industry}</div>
      <div>skills: </div>
      <div>{employee.skills}</div>
      <div>education: </div>
      <div>{employee.education}</div>
      <div>experience: </div>
      <div>{employee.experience}</div>
      <div>location: </div>
      <div>{employee.location}</div>
      <div>contact: </div>
      <div>{employee.contact}</div>
      <div>resume_url: </div>
      <div>{employee.resume_url}</div>
      <div>organization_id: </div>
      <div>{employee.organization_id}</div>
      <div>verified: </div>
      <div>{employee.verified}</div>
    </div>
  ));

  return (
    <>
      <article class='employees'>
      <h1>This is the Employees component</h1>
        {organizationEmployees}
      </article>
    </>
  )
};

export default Employees;