import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Specialities from './pages/Specialities'
import Speciality from './pages/Speciality'
import Courses from './pages/Courses'
import Course from './pages/Course'
import Teachers from './pages/Teachers'
import Page404 from './pages/Page404'
import Fragment from './pages/Fragment'
import Protected from './routes/Protected'
import Public from './routes/Public'
import Login from './pages/Login'
import SignIn from './pages/SignIn'
import Header from './organisms/Header'
const App = () => (
  <Router>
    <Header />
    <Switch>
      <Protected path="/" exact component={Home}/>
      <Protected path="/specialities" exact component={Specialities}/>
      <Protected path="/specialities/:id" exact component={Speciality}/>
      <Protected path="/courses" exact component={Courses}/>
      <Protected path="/course/:id" exact component={Course}/>
      <Protected path="/teachers" exact component={Teachers}/>
      <Protected path="/class/:id" exact component={Fragment}/>

      <Public path="/login"  component={Login}/>
      <Public path="/signin"  component={SignIn}/>

      <Route component={Page404} />

    </Switch>
  </Router>
)
export default App;
