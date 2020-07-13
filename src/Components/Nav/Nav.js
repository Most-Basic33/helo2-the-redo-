import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import { getUser, clearUser, goHome } from '../../ducks/reducer'
import { Link } from 'react-router-dom'
import './Nav.css'


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }
    handleLogout = () => {
        axios.get('/api/logout/').then(() => {
            //  history.push('/')
            console.log(this.props)
            //  this.props.goHome()
            this.props.clearUser()
            // .then( this.props.goHome())

            //this.props.user.history.pathname('/')
        })
    }
    render() {
        const { username, profile_picture, id } = this.props.user
        //  console.log(this.props.user.profile_picture)
          console.log(this.props)
        return (
            <div className='main3'>
                <img src={profile_picture} alt='profile bot' />
                <h3>{username}</h3>
                <Link to='/dashboard' >  <span>Dashboard</span></Link>
                <Link to='/'> <button>Home</button> </Link>
                <Link to='/form' > <button>New Post</button></Link>
             <Link onClick={this.handleLogout} to='/'>   <button onClick={this.handleLogout}>Logout</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user

    }
}
//const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, { clearUser, getUser })(Nav)
