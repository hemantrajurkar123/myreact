import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from './UserList'
import UserCard from './UserCard'

const UserRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<UserList />}></Route>
          <Route path='/user/:userId' element={<UserCard />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default UserRoutes
