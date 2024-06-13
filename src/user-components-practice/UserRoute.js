import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserHome from './UserHome'
import UserCard from './UserCard'

const UserRoute = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<UserHome />}></Route>
            <Route path='/user/:userId' element={<UserCard />}></Route>
        </Routes>
      
    </Router>
  )
}

export default UserRoute
