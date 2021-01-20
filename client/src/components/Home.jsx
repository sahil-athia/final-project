import {Link, useHistory} from 'react-router-dom'
import {useCallback} from 'react'
import './Home.scss'
export default function Home(props) {
  let history = useHistory()
  const handleOnClick = useCallback(() => history.push('/login'), [history]);

  return (
    <div className="home">
      <div className="info">
        <h1> This Is the Home Page</h1>
        {!props.state.isLoggedIn && 
          <button type="button" onClick={handleOnClick}>
          Get Connected
      </button>}
      </div>
      

      <video className='videoTag grow' autoPlay loop muted>
          <source src="https://cdn.dribbble.com/users/32512/screenshots/14887210/media/2fbfa27c436be05c378aee863d251110.mp4" type='video/mp4' />
      </video>
    </div>
  )
}