import React, { useEffect, useRef } from 'react'
import {useHistory, withRouter} from 'react-router-dom'
import {useCallback} from 'react'
import './Home.scss'
import {TextScramble} from '../helpers/scramble.js'

function Home(props) {
  let history = useHistory()
  
  const text = useRef(<></>);

  useEffect(() => {
    const phrases = [
      'Networking Made Easy',
      'Expand Your Business',
      'Make Connections',
      'Leverage Your Tools'
    ]
    const el = text
    const fx = new TextScramble(el)
    let timeOut;

    let counter = 0
    async function next() {
      fx.setText(phrases[counter])
        .then(() => {
        timeOut = setTimeout(next, 1000)
        })
        .catch(e => console.log(e))
      counter = (counter + 1) % phrases.length
    } 
    next()
    
    return function cleanup() {
      clearTimeout(timeOut)
    }
  }, [])

  const handleOnClick = useCallback(() => history.push('/login'), [history]);
  const handleBack = () => {
    window.location.pathname = '/'
  }
  
  return (
    <div className="home">
      <div className="info">
        <h1>- Insight -</h1>
        <br></br>
        <div className="scatter">
        <h4 className="text" ref={text} ></h4>
        </div>
        <br></br>
        {!props.state.isLoggedIn ? (
            <button type="button" onClick={handleOnClick}>
              Get Connected
            </button>
          ) : (
            <button type="button" onClick={props.onClick(handleBack)}>
              Logout
            </button>
          ) 
          }
      </div>
      <div className='videoDiv'>
        <video className='videoTag' autoPlay loop muted>
            <source src="https://cdn.dribbble.com/users/32512/screenshots/14887210/media/2fbfa27c436be05c378aee863d251110.mp4" type='video/mp4' />
        </video>
      </div>

    </div>
  )
}

export default withRouter(Home)