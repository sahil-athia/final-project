import React, { useEffect, useRef } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {useCallback} from 'react'
import './Home.scss'
import {TextScramble} from '../helpers/scramble.js'

export default function Home(props) {
  let history = useHistory()
  const text = useRef(null);
  useEffect(() => {
    const phrases = [
      'Neo,',
      'sooner or later',
      'you\'re going to realize',
      'just as I did',
      'that there\'s a difference',
      'between knowing the path',
      'and walking the path',
      ''
    ]
    console.log(text.current.innerHTML)
    const el = text
    const fx = new TextScramble(el)
    
    let counter = 0
    const next = () => {
      console.log(phrases[counter])
      fx.setText(phrases[counter])
        .then(() => {
        setTimeout(next, 800)
      })
      counter = (counter + 1) % phrases.length
    }
    
    next()
  }, [])

  const handleOnClick = useCallback(() => history.push('/login'), [history]);
  
  
  return (
    <div className="home">
      <div className="info">
      <div class="container">
        <div 
          class="text"
          ref={text}
        >hi
        </div>
      </div>
        <h1> Insight</h1>
        <br></br>
        <h3>Networking made easy</h3>
        <br></br>
        {!props.state.isLoggedIn ? (
            <button type="button" onClick={handleOnClick}>
              Get Connected
            </button>
          ) : (
            <button type="button" onClick={props.onClick}>
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