import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import UserList2 from './UserList2'
import UserCard2 from './UserCard2'
const UserRoutes2 = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<UserList2/>}></Route>
            <Route path='/user/userId' element={<UserCard2 />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default UserRoutes2
