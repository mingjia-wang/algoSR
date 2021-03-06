import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './Login.css';

class Login extends Component {

  constructor() {
      super()
      this.state = {
          username: '',
          password: '',
          redirect: null
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  
  }

  handleChange(event) {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleSubmit(event) {
      event.preventDefault()
      console.log('handleSubmit')

      axios
          .post('http://localhost:5000/users/login', {
              username: this.state.username,
              password: this.state.password
          })
          .then(response => {
              console.log('login response: ');
              console.log(response['data']['id']);
              const userID = response['data']['id'];
              if (response.status === 200) {
                this.setState({redirect: '/home/' + userID});
              }
              
          }).catch(error => {
              console.log('login error: ')
              console.log(error);
              
          })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="LoginForm">
        <h1 id="heading">Log In</h1>
        <form className="form-horizontal">
          <div className="form-group" style={{margin:"0 auto 10px auto"}}>
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="username" style={{color:"black"}}>Username: </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input className="form-input"
                type="text"
                id="username"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group" style={{margin:"0 auto 10px auto"}}>
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="password" style={{color:"black"}}>Password: </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input className="form-input"
                placeholder="password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group" style={{margin:"10px auto"}}>
            <div className=""></div>
            <button
              className="button"
              onClick={this.handleSubmit}
              type="submit"
            >Login</button>
          </div>
        </form>
      </div>
  
    )
  }
}
export default Login;
