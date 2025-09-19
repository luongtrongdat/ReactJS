import React from 'react'
import Counter from './pages/Counter'
// import Student from './pages/Student'
import Profile from './pages/Profile'
import ListUser from './pages/ListUser'
import RandomNumber from './pages/RandomNumber'
import ChangeState from './pages/ChangeState'
import Dark from './pages/Dark'
import Register from './pages/Register'
import Login from './pages/Login'

export default function App() {
  return (
    <div>
      {/* EX01 */}
      <Profile></Profile>
      {/* EX02 */}
      <ListUser></ListUser>
      {/* EX03 */}
      <Counter></Counter>
      {/* EX04 */}
      <RandomNumber></RandomNumber>
      {/* EX05 */}
      <ChangeState></ChangeState>
      {/* EX06 */}
      <Dark></Dark>
      {/* EX07 */}
      <Register></Register>
      {/* EX08 */}
      <Login></Login>



      {/* <Student></Student> */}
    </div>
  )
}