import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
const authentication = e => {
  e.preventDefault()
  const form = e.target
  const data = {
    "email": form.email.value,
    "password": form.password.value
  }
  Axios.post(
    `${process.env.REACT_APP_API_USER}/login`
    ,data)
    .then(r =>{
      localStorage.setItem('token',r.data.token)
    })
    .catch(
      alert('Error trying to log in')
    )
}
const Login = () => (
  <div className="ed-grid">
    <div className="l-block"></div>
    <div className="m-to-center m-60 lg-30">
      <h1 className="center">Log in</h1>
      <form onSubmit={authentication.bind()}>
        <div className="form__item">
          <label htmlFor="email">
            Email
            <input type="email" 
            name="email" 
            id="email" 
            placeholder="Write down your email"
            required
            />
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="password">
            Password
            <input type="password" 
            name="password" 
            id="password" 
            placeholder="Write down your password"
            required
            />
          </label>
        </div>
        <div className="form_item">
          <input type="submit" 
          className="button full"
          value="Log in"/>
        </div>
      </form>
      <div className="center">
        <p>
          Don't you have an account? 
          <Link to="/signin"> Create it!
          </Link>
        </p>
      </div>
    </div>
  </div>

)

export default Login
