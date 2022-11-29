import React from 'react'
import Leftbar from '../../components/leftbar/leftbar.component'
import Feed from '../../components/feed/feed.component'
import Rightbar from '../../components/rightbar/rightbar.component'
import Topbar from '../../components/topbar/topbar.component'

import './home.styles.scss'

const Home = () => {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Leftbar originPage='home'/>
        <Feed originPage='home'/>
        <Rightbar originPage='home'/>
      </div>
    </>
  )
}

export default Home
