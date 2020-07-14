import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { getUser } from '../../ducks/reducer'
import './Auth.css'


class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      profilePic: '',
      email: '',
      user: []
    }
    this.proceedAsGuest = this.proceedAsGuest.bind(this);

    this.handleRegister = this.handleRegister.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(prop, val) {
    this.setState({ [prop]: val });
  }
  proceedAsGuest() {
    const { history } = this.props;
    history.push('/dashboard');
  }

  handleRegister() {
    const { username, password, email } = this.state
    axios.post('/api/register', { username, email, password })
      .then(res => {
        console.log(res.data)
        this.props.getUser(res.data)
        this.props.history.push('/dashboard')
      }).catch(err => console.log(err))
  }

  handleLogin = () => {
    const { username, password } = this.state;
    axios.post('/api/login', { username, password })
      .then(res => {
     //   console.log(res.data, "login")
        this.setState({user: res.data})
        //set user somewhere that the app can use it (redux)
        this.props.getUser(res.data);
        //route the user away from landing, to dash
        // console.log(this.props.history)
      }).then(() => {
        this.props.history.push('/dashboard');
      })
      .catch(err => console.log(err));
  }
  


  render() {
    // console.log(this.state)
    //    console.log(this.props.history)
    return (
      <div id='top'>
      <h1 id='big' >HELO MEME MACHINE</h1>
      <div id="Login__parent">
        <div id="Login__child">
        
          <input
            className="Login__input"
            type="text"
            placeholder="Username"
            onChange={(e) => this.handleChange('username', e.target.value)}

          />
          <input className="Login__input"
            type="text"
            placeholder="email"
            onChange={(e) => this.handleChange('email', e.target.value)}
          />
          <input className="Login__input"
            type="password"
            placeholder="Password"
            onChange={(e) => this.handleChange('password', e.target.value)}

          />
          <div>
            <button className="Login__btn" id="Login__loginBtn" onClick={this.handleLogin}>Login </button>
            <button className="Login__btn" id="Login__registerBtn" onClick={this.handleRegister}>Register </button>
          </div>
          <span id="Login__GuestLink" onClick={this.proceedAsGuest}> Continue as a Guest </span>
        </div>
      </div>
      </div>
    )

  }
}
const mapStatetoProps = reduxState => reduxState;
export default connect(mapStatetoProps, { getUser })(Auth)