import React from 'react'
import Preloader from './components/Preloader/Preloader'
import Timer from './components/Countdown/Timer'

import './styles.css'

function Home () {
  return (
    <div className='wrapper'>
      <div className='App'>
        <div className='container'>
          <div className='logo'></div>
          <h1>Coming Soon</h1>
          <Timer />
          <Preloader />
        </div>
      </div>
    </div>
  )
}

export default Home
