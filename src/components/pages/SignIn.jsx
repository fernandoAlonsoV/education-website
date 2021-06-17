import React from 'react'
import Axios from "axios";
import { Link } from 'react-router-dom'
const registration = (e) => {
 e.preventDefault();
 const form = e.target;

 const data = {
   email: form.email.value,
   name: form.name.value,
   password: form.password.value,
 };

 Axios.post(`${process.env.REACT_APP_API_USER}/signup`, data)
   .then(() => {
     alert("User created");
     window.location = "/login";
   })
   .catch(() => alert("Error creating user"));
};
const SignIn = () => {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Sign in</h1>
        <form onSubmit={registration.bind()}>
          <div className="form__item">
            <label htmlFor="username">
              Username
              <input
                type="text"
                id="name"
                placeholder="Write down your username"
                required
                name="name"
              />
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                placeholder="Write down your email"
                required
                name="email"
              />
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="password">
              Password
              <input
                type="password"
                id="password"
                placeholder="Write down your password"
                name="password"
              />
            </label>
          </div>
          <div className="form_item">
            <input
              type="submit"
              value="Sign in"
              className="button full"
              required
            />
          </div>
        </form>
        <div className="center">
        <p>
          Do you already have an account? 
          <Link to="/login"> Log in!
          </Link>
        </p>
      </div>
      </div>
    </div>
  );
}

export default SignIn
