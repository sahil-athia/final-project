const Dashboard = ({profiles}) => {

  const organizationProfiles = profiles.map((profile) => (
    <div>
      <div>id: </div>
      <div>{profile.id}</div>
      <div>name: </div>
      <div>{profile.name}</div>
      <div>email: </div>
      <div>{profile.email}</div>
      <div>introduction: </div>
      <div>{profile.introduction}</div>
      <div>industry: </div>
      <div>{profile.industry}</div>
      <div>website: </div>
      <div>{profile.website}</div>
      <div>location: </div>
      <div>{profile.location}</div>
      <div>image_url: </div>
      <div>{profile.image_url}</div>
    </div>
  ));

  return (
    <>
      <article class='dashboard'>
      <h1>This is the Dashboard component</h1>
        {organizationProfiles}
      </article>
    </>
  )
};

export default Dashboard;