import React from 'react'
import Header from './Common/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GetStarted from './Services/GetStarted'
import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import Reset from './PasswordReset/Reset'
import { AuthProvider } from './Contexts/AuthContext'
import Dashboard from './Dashboard/Dashboard'


const Pages = () => {
  return (
   <>
      <AuthProvider>
        <Router> 
          <Header />
          <Routes>
              <Route path='/' element = {<Home/>} />
              <Route path='/get-started' element = {<GetStarted/>}/> 
              <Route path='/about' element = {<About/>}/>
              <Route path='/contact' element = {<Contact/>} />
              <Route path='/sign-up' element = {<Signup/>} />
              <Route path='/log-in' element = {<Login/>} />
              <Route path='/dashboard' element = {<Dashboard/>} />
              <Route path='/reset' element = {<Reset/>} />
          </Routes>
        </Router>
      </AuthProvider>
   </>
  )
}

export default Pages