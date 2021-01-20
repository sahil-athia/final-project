import {Link, useHistory} from 'react-router-dom'
import {useCallback} from 'react'
import './Home.scss'

export default function Home(props) {
  let history = useHistory()
  const handleOnClick = useCallback(() => history.push('/login'), [history]);

  return (
    <div className="home">
      <div className="info">
        <h1> Insight</h1>
        <br></br>
        <h3>Networking made easy</h3>
        <br></br>
        {!props.state.isLoggedIn && 
          <button type="button" onClick={handleOnClick}>
          Get Connected
          </button>}
      </div>
      <div className='videoDiv'>
        <video className='videoTag' autoPlay loop muted>
            <source src="https://cdn.dribbble.com/users/32512/screenshots/14887210/media/2fbfa27c436be05c378aee863d251110.mp4" type='video/mp4' />
        </video>
      </div>

    </div>
  )
}